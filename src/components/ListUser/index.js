// Global
import React from "react";
import { Link } from "react-router-dom";

// Assets
import "./styles.css";
import { FiEdit } from "react-icons/fi";

export default function ListUser(props) {
  function editUser() {
    localStorage.setItem("idUser", props.uid);
  }

  return (
    <div className="containerListUser">
      <div className="contentListUser">
        <img src={props.avatar} alt="Imagem de Perfil" />

        <h1>{props.name}</h1>
      </div>

      <button type="button" className="editButton" onClick={editUser}>
        <Link to="edituser">
          <FiEdit size={20} color="var(--edit)" />
        </Link>
      </button>
    </div>
  );
}
