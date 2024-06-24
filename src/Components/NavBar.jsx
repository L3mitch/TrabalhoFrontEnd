import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './NavBar.css';

export default function Navbar() {
    const [usuarioAtual, setUsuarioAtual] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioString = localStorage.getItem('user');
        if (usuarioString) {
            const user = JSON.parse(usuarioString);
            setUsuarioAtual(user.nome);
        } else {
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <h3>Sistema de Contabilidade de Produtos</h3>
            </div>
            <div>
                <Link to={'/users'}>Manutenção de Usuários</Link>
                <Link to={'/products'}>Manutenção de Produtos</Link>
            </div>
            <div className="user-info">
                <span>Bem vindo, {usuarioAtual}</span>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}
