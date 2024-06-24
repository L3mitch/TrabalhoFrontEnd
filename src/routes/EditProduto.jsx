import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import "./EditProduto.module.css"

export default function EditProduto(){
  
  const url = 'http://localhost:3000/products';
  const { id } = useParams();
  const [nome,setNome]=useState('');
  const [preco,setPreco]=useState('');
  const [estoque,setEstoque]=useState('');
  const [ano,setAno]=useState('');
  const [obs,setObs]=useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const getProductById = async(id) => {

      // Faz a requisição http
      const res = await fetch(url + `/${id}`);
      const data = await res.json();
      console.log(data)

      // Carrega os dados no formulário para edição:
      setNome(data.nome)
      setPreco(data.preco);
      setEstoque(data.estoque);
      setAno(data.ano);
      setObs(data.obs);
    }
    getProductById(id);

  }, []);
 
  const saveProduct = async (e) => {
    e.preventDefault();
    const saveRequestParams = {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ nome, preco, estoque, ano, obs})
    }

    try {
        const res = await fetch(url + `/${id}`, saveRequestParams);
        navigate('/products')
    }
    catch (error) {
        console.log(error.message)    
    }
  }

  return (
      <div>
        <h2 style={{textAlign: 'center'}}>Editando Produto</h2>
          <div>
              <form onSubmit={saveProduct}>
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" nome="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>

                  <label htmlFor="preco">Preço:</label>
                  <input type="number" nome="preco" value={preco} onChange={(e) => setPreco(e.target.value)}/>

                  <label htmlFor="estoque">Estoque:</label>
                  <input type="number" nome="estoque" value={estoque} onChange={(e) => setEstoque(e.target.value)}/>

                  <label htmlFor="ano">Ano:</label>
                  <input type="date" nome="ano" value={ano} onChange={(e) => setAno(e.target.value)}/>

                  <label htmlFor="obs">Observação:</label>
                  <input type="text" nome="obs" value={obs} onChange={(e) => setObs(e.target.value)}/>                  

                  <input type="submit" value="Salvar" onChange={(e) => saveProduct(e)}/>
                  <button><Link to={'/products'}>Voltar</Link></button>
              </form>
          </div>
      </div>
  )
}