// Global
import React from "react";
import { Link } from "react-router-dom";

// Assets
import "./styles.css";
import { FiEdit } from "react-icons/fi";

export default function ListUser(props) {
  return (
    <div className="containerListUser">
      <div className="contentListUser">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/goh-global-41575.appspot.com/o/herois%2FAdmin.png?alt=media&token=690b1f4d-7b52-4984-a23a-9c92fa83e4fe"
          alt="Imagem de Perfil"
        />

        <h1>{props.name}</h1>
      </div>

      <button type="button" className="editButton">
        <Link to="edituser">
          <FiEdit size={20} color="var(--edit)" />
        </Link>
      </button>
    </div>
  );
}
