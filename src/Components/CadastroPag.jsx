import { Link } from "react-router-dom"

export default function CadastroPag({nome, senha, handleUsername, handlePassword, saveUsername}) {
    return (
        <>
        <div className="container">
            <h2>Cadastro de Login</h2>
                <form onSubmit={saveUsername}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => handleUsername(e)}/>

                    <label htmlFor="price">Senha:</label>
                    <input type="text" name="price" value={senha} onChange={(e) => handlePassword(e)}/>

                    <input type="submit" value="Teste"/>
                    <button style={{float: 'right'}}><Link to={'/products'}>PularTelaDeLogin</Link></button>
                    <button style={{float: 'right'}}><Link to={'http://localhost:3000/users'}>UsuariosCadastrados</Link></button>
                </form>
        </div>
        </>
    )
}