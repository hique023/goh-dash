// Global
import React from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";

// Assets
import "./styles.css";

export default function EditUser() {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");

  return (
    <div className="containerEditUser">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name="Edição de Usuário" color={color} />

      <div className="contentEditUser">
        <h1>Edit User</h1>
      </div>
    </div>
  );
}
