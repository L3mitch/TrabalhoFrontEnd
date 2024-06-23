import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CadastroUser() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const url = 'http://localhost:3000/users';

    const clearForm = () => {
        setNome("");
        setSenha("");
    }
    
    const saveUsername = async (e) => {
        e.preventDefault();
        const saveRequestParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, senha })
        };

         //  Verificando resposta HTTP
        try {
            const res = await fetch(url, saveRequestParams);
            navigate('/products')
        }
        catch (error) {
            console.log(error.message)    
        }
        clearForm();
    };

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <h2>Cadastro de Usuário</h2>
                <form onSubmit={saveUsername}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}