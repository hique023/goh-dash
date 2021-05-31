// Global
import React from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import ListUser from "../ListUser";

// Assets
import "./styles.css";

export default function Users() {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseName = localStorage.getItem("phaseName");

  return (
    <div className="containerUsers">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name={phaseName} color={color} />

      <div className="contentUsers">
        <ListUser name="Usuário 01" />
        <ListUser name="Usuário 02" />
        <ListUser name="Usuário 03" />
        <ListUser name="Usuário 04" />
        <ListUser name="Usuário 05" />
      </div>
    </div>
  );
}
