// Global
import React from "react";
import { Link } from "react-router-dom";

// Assets
import "./styles.css";
import { FiEdit } from "react-icons/fi";

export default function ListQuestion(props) {
  function editQuestion() {
    alert("Edição de pergunta");
  }

  return (
    <div className="containerListQuestion">
      <div className="contentListQuestion">
        <div className="slotQuestion">
          <h1>Enunciado:</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            incidunt id enim unde veniam?
          </h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 1:</h1>
          <h2>Cappta</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 2:</h1>
          <h2>Cappta</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 3:</h1>
          <h2>Cappta</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta 4:</h1>
          <h2>Cappta</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Reposta Correta:</h1>
          <h2>Cappta</h2>
        </div>
        <hr />
        <div className="slotQuestion">
          <h1>Pontuação:</h1>
          <h2>6</h2>
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
