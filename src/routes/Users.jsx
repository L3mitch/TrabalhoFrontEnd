import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Users.module.css'

export default function User(){
    
    const [users, setUsers] = useState([])
    
    const url = 'http://localhost:3000/users'
    
    useEffect(() => {
        
        const getUsersLists = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setUsers(data)
        }
    
        getUsersLists();
    
    }, [])  
    
    const deleteUser = async(id) => {

        const res = await fetch(url + `/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
    
        const deletedUser = await res.json()

        setUsers(users.filter(usuario => usuario.id !== deletedUser.id))
    }
    
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Usuários do Sistema</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Senha</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.nome}</td>
                            <td>*******</td>
                            <td>{users.email}</td>
                            <td>{users.telefone}</td>
                            <td>{users.endereco}</td>
                            <td className="actions">
                                <button> <Link to={`/users/edit/${users.id}`}>Editar</Link></button>
                                <button onClick={() => deleteUser(users.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button><Link to={'/cadastroUser'}>Cadastrar</Link></button>
            <button><Link to={'/home'}>Voltar</Link></button>
        </div>
        )
}