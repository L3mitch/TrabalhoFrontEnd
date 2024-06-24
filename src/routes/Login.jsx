import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

export default function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const url = 'http://localhost:3000/users';

    const clearForm = () => {
        setNome("");
        setSenha("");
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${url}?nome=${nome}`);
            const users = await res.json();
            const res2 = await fetch(`${url}?senha=${senha}`);
            const pass = await res2.json();

            if (users.length > 0 && pass.length > 0) {
                const user = users[0];
                
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/home');

            } else {
                setError('Usuário ou senha inválidos');
            }
        } catch (error) {
            console.log(error.message);
            setError('Erro na conexão com o servidor');
        }
        clearForm();
    }

    return (

        // Aqui é chamado o estilo CSS do div, como estamos usando module, tem que ser assim
       <div className={styles.loginContainer}>

        <h1 style={{textAlign: 'center', color: 'black'}}>SISTEMA DE RASTREAMENTO E CADASTRO DE PRODUTOS</h1>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>

                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Nome" value={nome} required onChange={(e) => setNome(e.target.value)}/>

                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Senha" value={senha} required onChange={(e) => setSenha(e.target.value)}/>

                {error && <p style={{color: 'red'}}>{error}</p>}

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
