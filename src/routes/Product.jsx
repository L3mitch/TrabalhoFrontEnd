import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Product.module.css'

export default function Product(){
    
    const [products, setProducts] = useState([])
    
    const url = 'http://localhost:3000/products'
    
    useEffect(() => {
        //Lista todos os productss:
        const getProductsLists = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
    
        getProductsLists();
    
    }, [])  
    
    const deleteProduct = async(id) => {
        //   Faz a requisição http
        const res = await fetch(url + `/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
    
        const deletedProduct = await res.json()
        //  Atualização da tabela:
        setProducts(products.filter(prod => prod.id !== deletedProduct.id))
    }
    
    return (
        <div>
            <h2>Tabela de produtos</h2>
            <button style={{float: 'right'}}><Link to={'/cadastroProd'}>Cadastrar</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((products) => (
                        <tr key={products.id}>
                            <td>{products.id}</td>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.stock}</td>
                            <td className="actions">
                                <button> <Link to={`/products/edit/${products.id}`}>Editar</Link></button>
                                <button onClick={() => deleteProduct(products.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )
}