import React from "react";
import "./CadastroPag.css";

const CadastroPag = ({ nome, senha, handleUsername, handlePassword, saveUsername }) => {
    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <h2>Cadastro de Usuário</h2>
                <form onSubmit={saveUsername}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={handleUsername}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={handlePassword}
                    />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroPag;