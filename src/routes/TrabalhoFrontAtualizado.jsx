import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"


export default function EditForm(){
    const url = 'http://localhost:3000/products';
    const { id } = useParams();
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [stock,setStock]=useState('');
    const [edit,setEdit]=useState(false);
    const navigate=useNavigate()
    useEffect(() => {
    const getProductById = async(id) => {
    // Faz a requisição http
    const res = await fetch(url + `/${id}`);
    const data = await res.json();
    console.log(data)
    // Carrega os dados no formulário para edição:
    setName(data.name)
    setPrice(data.price);
    setStock(data.stock);
   

    // Habilita edição:
    setEdit(true);
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
      body: JSON.stringify({ name, price, stock})
    }

    // Faz a requisição http
    try {
        const res = await fetch(url + `/${id}`, saveRequestParams);
        navigate('/products')
    } catch (error) {
        console.log(error.message)
        
    }
  }
    
    const handleName = (e) => {setName(e.target.value)}
    const handlePrice = (e) => {setPrice(e.target.value)}
    const handleStock = (e) => {setStock(e.target.value)}

    return (
        <div>
            <p>Edição do componente { id }</p>
            <div className="container">
                <form onSubmit={saveProduct}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" value={name} onChange={(e) => handleName(e)}/>

                    <label htmlFor="price">Preço:</label>
                    <input type="number" name="price" value={price} onChange={(e) => handlePrice(e)}/>

                    <label htmlFor="stock">Estoque:</label>
                    <input type="number" name="stock" value={stock} onChange={(e) => handleStock(e)}/>

                    <input type="submit" value="Salvar" onChange={(e) => saveProduct(e)}/>
                    <button style={{float: 'right'}}><Link to={'/products'}>Voltar</Link></button>
                </form>
            </div>
        </div>
    )
}