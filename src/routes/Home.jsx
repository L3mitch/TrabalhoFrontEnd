import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Menu Principal</h2>
            <div style={{ marginBottom: '10px' }}>
                <Link to={'/users'} style={{ marginRight: '10px' }}>Manutenção de Usuários</Link>
                <Link to={'/products'}>Manutenção de Produtos</Link>
            </div>
        </div>
    );
}
