// Global
import React, { useEffect, useState } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";

export default function EditQuestion(props) {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const stageName = localStorage.getItem("subBarName");
  const [lengthData, setLengthData] = useState(0);

  const db = firebase.firestore();

  const [numberQuestion, setNumberQuestion] = useState("");
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionScore, setQuestionScore] = useState(0);

  function getData(e) {
    e.preventDefault();

    var docRef = db.collection(phaseId).doc(stageId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          // setData(data);

          const pergunta = data[numberQuestion];
          // console.table(pergunta);
          // console.log('-----------------------------');

          setQuestion(pergunta[0]);
          setAnswer1(pergunta[1]);
          setAnswer2(pergunta[2]);
          setAnswer3(pergunta[3]);
          setAnswer4(pergunta[4]);
          setCorrectAnswer(pergunta[5]);
          setQuestionScore(pergunta[6]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function updateQuestion(e) {
    e.preventDefault();

    if (numberQuestion <= 10) {
      if (numberQuestion === 1) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              1: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 2) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              2: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 3) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              3: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 4) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              4: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 5) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              5: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 6) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              6: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 7) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              7: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 8) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              8: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 9) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              9: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      } else if (numberQuestion === 10) {
        db.collection(phaseId)
          .doc(stageId)
          .set(
            {
              10: [
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
          .then((docRef) => {
            alert(`Questão atualizada com sucesso!`);
          })
          .catch((error) => {
            // console.error("Error adding document: ", error);
            alert("Erro ao atualizar questão!");
          });
      }
    } else {
      alert("Número máximo de questões atingido!");
    }
  }

  useEffect(() => {}, []);

  return (
    <div className="containerStage">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name="Edição / Adição de Pergunta" color={color} />

      <div className="editQuestion">
        <form onSubmit={getData}>
          <div className="searchQuestion">
            <h2>Número da Questão</h2>
            <input
              type="text"
              value={numberQuestion}
              onChange={(e) => {
                setNumberQuestion(parseInt(e.target.value, 10));
              }}
            />
            <input
              type="submit"
              className="button"
              value="Consultar Pergunta"
            />
          </div>
        </form>
        <form onSubmit={updateQuestion}>
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
          <input
            className="button"
            type="submit"
            value="Atualizar / Adicionar"
          />
        </form>
      </div>
    </div>
  );
}
