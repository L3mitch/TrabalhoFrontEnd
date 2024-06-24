import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Product.module.css'

export default function Product(){
    
    const [products, setProducts] = useState([])
    
    const url = 'http://localhost:3000/products'
    
    useEffect(() => {
        
        const getProductsLists = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
    
        getProductsLists();
    
    }, [])  
    
    const deleteProduct = async(id) => {

        const res = await fetch(url + `/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
    
        const deletedProduct = await res.json()

        setProducts(products.filter(prod => prod.id !== deletedProduct.id))
    }
    
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Tabela de Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th>Ano</th>
                        <th>Observação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((products) => (
                        <tr key={products.id}>
                            <td>{products.id}</td>
                            <td>{products.nome}</td>
                            <td>{products.preco}</td>
                            <td>{products.estoque}</td>
                            <td>{products.ano}</td>
                            <td>{products.obs}</td>
                            <td className="actions">
                                <button> <Link to={`/products/edit/${products.id}`}>Editar</Link></button>
                                <button onClick={() => deleteProduct(products.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button><Link to={'/cadastroProd'}>Cadastrar</Link></button>
            <button><Link to={'/home'}>Voltar</Link></button>
        </div>
        )
}