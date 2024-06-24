import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.module.css'; // Importe o arquivo CSS externo

export default function Products() {
    const [products, setProducts] = useState([]);

    const url = 'http://localhost:3000/products';

    useEffect(() => {
        const getProductsLists = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProductsLists();
    }, []);

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (!res.ok) {
                throw new Error('Failed to delete product');
            }

            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container">
            <h2>Tabela de Produtos</h2>
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
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nome}</td>
                            <td>{product.preco}</td>
                            <td>{product.estoque}</td>
                            <td>{product.ano}</td>
                            <td>{product.obs}</td>
                            <td className="actions">
                                <button className="button"><Link to={`/products/edit/${product.id}`}>Editar</Link></button>
                                <button className="button" onClick={() => deleteProduct(product.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '10px' }}>
                <button className="button"><Link to={'/cadastroProd'}>Cadastrar</Link></button>
                <button className="button"><Link to={'/home'}>Voltar</Link></button>
            </div>
        </div>
    );
}
