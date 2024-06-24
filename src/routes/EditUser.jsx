import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import "./EditUser.module.css"

export default function EditUser(){
  
  const url = 'http://localhost:3000/users';
  const { id } = useParams();
  const [nome,setNome]=useState('');
  const [senha,setSenha]=useState('');
  const [email,setEmail]=useState('');
  const [telefone,setTelefone]=useState('');
  const [endereco,setEndereco]=useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const getUserById = async(id) => {

      // Faz a requisição http
      const res = await fetch(url + `/${id}`);
      const data = await res.json();
      console.log(data)

      // Carrega os dados no formulário para edição:
      setNome(data.nome)
      setSenha(data.senha);
      setEmail(data.email);
      setTelefone(data.telefone);
      setEndereco(data.endereco);
    }
    getUserById(id);

  }, []);
 
  const saveUser = async (e) => {
    e.preventDefault();
    const saveRequestParams = {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ nome, senha, email, telefone, endereco})
    }

    try {
        const res = await fetch(url + `/${id}`, saveRequestParams);
        navigate('/users')
    }
    catch (error) {
        console.log(error.message)    
    }
  }

  return (
      <div>
        <h2 style={{textAlign: 'center'}}>Editando Usuários</h2>
          <div className="container">
              <form onSubmit={saveUser}>
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" nome="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>

                  <label htmlFor="senha">Senha:</label>
                  <input type="password" nome="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                  <label htmlFor="email">Email:</label>
                  <input type="email" nome="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                  <label htmlFor="telefone">Telefone:</label>
                  <input type="value" nome="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>

                  <label htmlFor="endereco">Endereço:</label>
                  <input type="text" nome="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>

                  <input type="submit" value="Salvar" onChange={(e) => saveUser(e)}/>
                  <button><Link to={'/users'}>Cancelar</Link></button>
              </form>
          </div>
      </div>
  )
}