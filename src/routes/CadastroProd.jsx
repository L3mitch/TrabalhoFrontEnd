import { useState, useEffect } from 'react'
import Formulario from '../Components/Formulario'

export default function CadastroProd(){
    
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [edit, setEdit] = useState(false)
    
    const url = 'http://localhost:3000/products'
    
    useEffect(() => {
        //Lista todos os produtos:
        const getProductsLists = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
    
        getProductsLists();
    
    }, [])

    const clearForm = () => {
        setName("")
        setPrice("")
        setStock("")
    }
    
    
    const saveProduct = async (e) => {
        e.preventDefault();
        const saveRequestParams= {
            method: edit ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name, price, stock})
        }
        //  Cria url para buscar todos ou apenas um produto
        const save_url = edit ? url + `/${id}` : url;
        //  Faz a requisição http
        const res = await fetch(save_url, saveRequestParams);
        // Se for cadastro de produto novo:
        if(!edit) {
            const newProduct = await res.json();
            //  Atualização da tabela:
            setProducts((prevProducts) => [...prevProducts, newProduct])
        }
        //  Se for edição/atualização de produto ja cadastrado:
        if(edit) {
            const editedProduct = await res.json();
            //  Atualização da tabela:
            const editedProductIndex = products.findIndex(prod => prod.id === id)
            products[editedProductIndex] = editedProduct;
            setProducts(products)
        }
        clearForm()
        setEdit(false)
    }
    
    
    const handleName = (e) => {setName(e.target.value)}
    const handlePrice = (e) => {setPrice(e.target.value)}
    const handleStock = (e) => {setStock(e.target.value)}

    return (
        <>
        <Formulario name={name} price={price} stock={stock} handleName={handleName} handlePrice={handlePrice} handleStock={handleStock} saveProduct={saveProduct}/>
        </>
        )


}