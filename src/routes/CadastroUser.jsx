import { useState, useEffect } from "react";
import CadastroPag from "../Components/CadastroPag";

export default function CadastroUser() {
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(null);

    const url = 'http://localhost:3000/users';

    useEffect(() => {
        const getUserLists = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setUsuarios(data);
        };

        getUserLists();
    }, []);

    const clearForm = () => {
        setNome("");
        setSenha("");
        setEdit(false);
        setId(null);
    };

    const saveUsername = async (e) => {
        e.preventDefault();
        const saveRequestParams = {
            method: edit ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, senha })
        };

        const saveUrl = edit ? `${url}/${id}` : url;
        const res = await fetch(saveUrl, saveRequestParams);
        const savedUser = await res.json();

        if (!edit) {
            setUsuarios((prevUsuarios) => [...prevUsuarios, savedUser]);
        } else {
            const updatedUsuarios = usuarios.map(user => 
                user.id === id ? savedUser : user
            );
            setUsuarios(updatedUsuarios);
        }

        clearForm();
    };

    const handleUsername = (e) => setNome(e.target.value);
    const handlePassword = (e) => setSenha(e.target.value);

    return (
        <CadastroPag 
            nome={nome} 
            senha={senha} 
            handleUsername={handleUsername} 
            handlePassword={handlePassword} 
            saveUsername={saveUsername}
        />
    );
}