// Global
import React, { useEffect, useState } from "react";
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

  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionScore, setQuestionScore] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form enviado!");
  }

  return (
    <div className="containerStage">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name="Adição de Perguntas" color={color} />

      <div className="addQuestion">
        <form onSubmit={handleSubmit}>
          <div className="slotQuestion">
            <h2>Enunciado</h2>
            <input
              type="text"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
          </div>
          <div className="slotQuestion">
            <h2>Resposta 1</h2>
            <input
              type="text"
              value={answer1}
              onChange={(e) => {
                setAnswer1(e.target.value);
              }}
            />
          </div>
          <div className="slotQuestion">
            <h2>Resposta 2</h2>
            <input
              type="text"
              value={answer2}
              onChange={(e) => {
                setAnswer2(e.target.value);
              }}
            />
          </div>
          <div className="slotQuestion">
            <h2>Resposta 3</h2>
            <input
              type="text"
              value={answer3}
              onChange={(e) => {
                setAnswer3(e.target.value);
              }}
            />
          </div>
          <div className="slotQuestion">
            <h2>Resposta 4</h2>
            <input
              type="text"
              value={answer4}
              onChange={(e) => {
                setAnswer4(e.target.value);
              }}
            />
          </div>
          <div className="slotQuestion">
            <h2>Resposta Correta</h2>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => {
                setCorrectAnswer(e.target.value);
              }}
            />
          </div>
          <div className="slotQuestion">
            <h2>Valor</h2>
            <select
              name="phase1Stage1"
              value={questionScore}
              onChange={(e) => {
                setQuestionScore(parseInt(e.target.value, 10));
              }}
            >
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="6">6</option>
            </select>
          </div>
          <input className="button" type="submit" value="Adicionar" />
        </form>
      </div>
    </div>
  );
}
