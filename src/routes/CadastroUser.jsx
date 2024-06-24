import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./CadastroUser.module.css"

export default function CadastroUser() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const navigate = useNavigate();
    
    const url = 'http://localhost:3000/users';

    const clearForm = () => {
        setNome("");
        setSenha("");
        setEmail("");
        setTelefone("");
        setEndereco("");
    }
    
    const saveUsername = async (e) => {
        e.preventDefault();
        const saveRequestParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, senha, email, telefone, endereco})
        };

         //  Verificando resposta HTTP
        try {
            const res = await fetch(url, saveRequestParams);
            navigate('/home')
        }
        catch (error) {
            console.log(error.message)    
        }
        clearForm();
    };

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <h2 style={{textAlign: 'center'}}>Cadastro de Usuário</h2>
                <form onSubmit={saveUsername}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" placeholder="Nome" value={nome} required onChange={(e) => setNome(e.target.value)}/>

                    <label htmlFor="senha">Senha:</label>
                    <input type="password" placeholder="Senha" value={senha} required onChange={(e) => setSenha(e.target.value)}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="number" placeholder="Telefone" value={telefone} required onChange={(e) => setTelefone(e.target.value)}/>

                    <label htmlFor="endereco">Endereço:</label>
                    <input type="text" placeholder="Endereço" value={endereco} required onChange={(e) => setEndereco(e.target.value)}/>

                    <button type="submit">Salvar</button>
                    <button><Link to={'/users'}>Cancelar</Link></button>
                </form>
            </div>
        </div>
    );
}