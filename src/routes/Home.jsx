import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <span style={{padding: '8px'}}><Link to={'/users'}>Manutenção de Usuários</Link> </span>
            <span style={{padding: '8px'}}><Link to={'/products'}>Manutenção de Produtos</Link> </span>
        </div>
    )
}