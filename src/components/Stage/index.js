// Global
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import ListQuestion from "../LisQuestion";
import firebase from "../../firebaseConfig";

// Assets
import "./styles.css";

export default function Stage(props) {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const stageName = localStorage.getItem("subBarName");
  const userUid = localStorage.getItem("userUid");

  const db = firebase.firestore();

  const [questions, setQuestions] = useState();

  function getQuestions() {
    const count = [];

    var docRef = db.collection(phaseId).doc(stageId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const dataDb = doc.data();
          // setData(data);

          console.log("====================================");
          console.log(dataDb);
          setQuestions(dataDb);
          console.log("====================================");
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="containerStage">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name={stageName} color={color} />

      <Link to="/addquestion">
        <button className="button">Adicionar Questão</button>
      </Link>

      <div className="listStage">
        <ListQuestion />
        <ListQuestion />
      </div>
    </div>
  );
}
