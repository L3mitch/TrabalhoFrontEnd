import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Users.module.css';  // Importando o arquivo CSS

export default function User() {
  const [users, setUsers] = useState([]);

  const url = 'http://localhost:3000/users';

  useEffect(() => {
    const getUsersLists = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsersLists();
  }, []);

  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete user');
      }

      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Usuários do Sistema</h2>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>*******</td> {/* Aqui você pode exibir um placeholder ou não mostrar a senha */}
              <td>{user.email}</td>
              <td>{user.telefone}</td>
              <td>{user.endereco}</td>
              <td className="actions">
                <button><Link to={`/users/edit/${user.id}`}>Editar</Link></button>
                <button onClick={() => deleteUser(user.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button"><Link to={'/cadastroUser'}>Cadastrar</Link></button>
      <button className="button"><Link to={'/home'}>Voltar</Link></button>
    </div>
  );
}
