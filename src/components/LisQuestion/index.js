// Global
import React from "react";
import { Link } from "react-router-dom";

// Assets
import "./styles.css";
import { FiEdit } from "react-icons/fi";

export default function ListQuestion({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer,
  scoreQuestion,
}) {
  function editQuestion() {
    alert("Edição de pergunta");
  }

  return (
    <div className="containerListQuestion">
      <div className="contentListQuestion">
        <div className="slotQuestion">
          <h1>Enunciado:</h1>
          <h2>{question}</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 1:</h1>
          <h2>{answer1}</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 2:</h1>
          <h2>{answer2}</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 3:</h1>
          <h2>{answer3}</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 4:</h1>
          <h2>{answer4}</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta Correta:</h1>
          <h2>{correctAnswer}</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Pontuação:</h1>
          <h2>{scoreQuestion}</h2>
        </div>
      </div>

      <button type="button" className="editButton" onClick={editQuestion}>
        <Link to="editquestion">
          <FiEdit size={20} color="var(--edit)" />
        </Link>
      </button>
    </div>
  );
}
