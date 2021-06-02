// Global
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";

// Assets
import "./styles.css";

export default function Stage(props) {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const stageName = localStorage.getItem("subBarName");
  const userUid = localStorage.getItem("userUid");

  return (
    <div className="containerStage">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name={stageName} color={color} />

      <Link to="/addquestion">
        <button className="button">Adicionar Questão</button>
      </Link>

      <div className="listStage">
        <h1>List questions</h1>
        <h1>List questions</h1>
        <h1>List questions</h1>
        <h1>List questions</h1>
        <h1>List questions</h1>
      </div>
    </div>
  );
}
