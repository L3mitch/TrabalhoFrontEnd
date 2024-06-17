import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <span style={{padding: '8px'}}><Link to={'/login'}>Login</Link> </span>
            <span style={{padding: '8px'}}><Link to={'/cadastroUser'}>CadastroUser</Link> </span>
        </div>
    )
}