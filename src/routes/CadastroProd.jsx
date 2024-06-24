import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./CadastroProd.module.css"

export default function CadastroProd(){
    
    const [nome, setName] = useState("")
    const [preco, setPreco] = useState("")
    const [estoque, setEstoque] = useState("")
    const [ano, setAno] = useState("")
    const [obs , setObs] = useState("")
    
    const navigate = useNavigate()
    
    const url = 'http://localhost:3000/products'
    
    const saveProduct = async (e) => {
        e.preventDefault();
        const saveRequestParams= {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({nome, preco, estoque, ano, obs})
        }
        //  Verificando resposta HTTP
        try {
            const res = await fetch(url, saveRequestParams);
            navigate('/products')
        }
        catch (error) {
            console.log(error.message)    
        }
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Cadastro de Produtos</h2>
            <div className="container">
                <form onSubmit={saveProduct}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" required placeholder='Digite o nome do produto...' onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="preco">Preço:</label>
                    <input type="number" name="preco" required placeholder='Digite o preço do produto...' onChange={(e) => setPreco(e.target.value)}/>

                    <label htmlFor="estoque">Estoque:</label>
                    <input type="number" name="estoque" required placeholder='Digite a quantidade de estoque do produto...' onChange={(e) => setEstoque(e.target.value)}/>

                    <label htmlFor="ano">Ano:</label>
                    <input type="date" name="ano" required placeholder='Digite o ano de origem do produto...' onChange={(e) => setAno(e.target.value)}/>
                
                    <label htmlFor="obs">Observação:</label>
                    <input type="text" name="observation" placeholder='Digite uma observação do produto...' onChange={(e) => setObs(e.target.value)}/>

                    <input type="submit" value="Salvar"/>
                    <button style={{float: 'right'}}><Link to={'/products'}>Cancelar</Link></button>
                </form>
            </div>
        </div>
    )


}