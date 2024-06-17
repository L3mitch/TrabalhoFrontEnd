import React from 'react'
import "./TabelaProdutos.module.css"
import { Link } from "react-router-dom";


const TabelaProdutos = ({ produtos, editProduct, deleteProduct }) => {
    return (
        <div>
            <div className="memata">
                <h2 className='memata'>Tabela de Produtos</h2>
            </div>
            <button style={{float: 'right'}}><Link to={'/cadastroProd'}>Cadastrar</Link></button>
            <table className="tabela-produtos">
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
                    {produtos.map((produto, index) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.name}</td>
                            <td>{produto.price}</td>
                            <td>{produto.stock}</td>
                            <td className="actions">
                                <button> <Link to={`/products/${produto.id}/info`}>Editar</Link></button>
                                <button onClick={() => deleteProduct(produto.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaProdutos;