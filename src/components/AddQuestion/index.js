// Global
import React, { useEffect, useState } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";

export default function Stage(props) {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const stageName = localStorage.getItem("subBarName");
  const [lengthData, setLengthData] = useState(0);

  const db = firebase.firestore();

  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionScore, setQuestionScore] = useState(0);

  function getData() {
    var docRef = db.collection(phaseId).doc(stageId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          // setData(data);

          setLengthData(Object.keys(data).length + 1);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form enviado!");

    db.collection(phaseId)
      .doc(stageId)
      .set(
        {
          lengthData: [
            question,
            answer1,
            answer2,
            answer3,
            answer4,
            correctAnswer,
            questionScore,
          ],
        },
        { merge: true }
      )
      .then((docRef) => {})
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar questão!");
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
