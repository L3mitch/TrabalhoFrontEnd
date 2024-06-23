import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./CadastroProd.module.css"

export default function CadastroProd(){
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const navigate = useNavigate()
    
    const url = 'http://localhost:3000/products'
    
    const saveProduct = async (e) => {
        e.preventDefault();
        const saveRequestParams= {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name, price, stock})
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
          <p>Cadastro de Produtos</p>
          <div className="container">
              <form onSubmit={saveProduct}>
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" name="nome" placeholder='Digite o nome do produto...' onChange={(e) => setName(e.target.value)}/>

                  <label htmlFor="price">Preço:</label>
                  <input type="number" name="price" placeholder='Digite o preço do produto...' onChange={(e) => setPrice(e.target.value)}/>

                  <label htmlFor="stock">Estoque:</label>
                  <input type="number" name="stock" placeholder='Digite a quantidade de estoque do produto...' onChange={(e) => setStock(e.target.value)}/>

                  <input type="submit" value="Salvar"/>
                  <button style={{float: 'right'}}><Link to={'/products'}>Voltar</Link></button>
              </form>
          </div>
      </div>
        )


}