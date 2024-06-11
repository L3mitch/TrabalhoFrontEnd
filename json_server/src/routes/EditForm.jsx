import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"


export default function EditForm(){
    const url = 'http://localhost:3000/products';
    const { id } = useParams();
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [stock,setStock]=useState('');
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
    // setId(data.id);

    // Habilita edição:
    // setEdit(true);
  }

  getProductById(id);
    }, []);


    return (
        <div>
            <p>Edição do componente { id }</p>
            <button><Link to={`/products`}>Voltar</Link></button>
        </div>
    )
}