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

  const db = firebase.firestore();

  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [question3, setQuestion3] = useState();
  const [question4, setQuestion4] = useState();
  const [question5, setQuestion5] = useState();
  const [question6, setQuestion6] = useState();
  const [question7, setQuestion7] = useState();
  const [question8, setQuestion8] = useState();
  const [question9, setQuestion9] = useState();
  const [question10, setQuestion10] = useState();

  function getQuestions() {
    var docRef = db.collection(phaseId).doc(stageId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();

          setQuestion1(data[1][0]);
          setQuestion2(data[2][0]);
          setQuestion3(data[3][0]);
          setQuestion4(data[4][0]);
          setQuestion5(data[5][0]);
          setQuestion6(data[6][0]);
          setQuestion7(data[7][0]);
          setQuestion8(data[8][0]);
          setQuestion9(data[9][0]);
          setQuestion10(data[10][0]);
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

      <Link to="/editquestion">
        <button className="button">Editar / Adicionar Questão</button>
      </Link>

      <div className="listStage">
        <div className="slotQuestion">
          <h1>1.</h1>
          <h2>{question1}</h2>
        </div>
        <div className="slotQuestion">
          <h1>2.</h1>
          <h2>{question2}</h2>
        </div>
        <div className="slotQuestion">
          <h1>3.</h1>
          <h2>{question3}</h2>
        </div>
        <div className="slotQuestion">
          <h1>4.</h1>
          <h2>{question4}</h2>
        </div>
        <div className="slotQuestion">
          <h1>5.</h1>
          <h2>{question5}</h2>
        </div>
        <div className="slotQuestion">
          <h1>6.</h1>
          <h2>{question6}</h2>
        </div>
        <div className="slotQuestion">
          <h1>7.</h1>
          <h2>{question7}</h2>
        </div>
        <div className="slotQuestion">
          <h1>8.</h1>
          <h2>{question8}</h2>
        </div>
        <div className="slotQuestion">
          <h1>9.</h1>
          <h2>{question9}</h2>
        </div>
        <div className="slotQuestion">
          <h1>10.</h1>
          <h2>{question10}</h2>
        </div>
      </div>
    </div>
  );
}
