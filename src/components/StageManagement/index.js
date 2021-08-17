// Global
import React, { useEffect, useState } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import firebase from "../../firebaseConfig";

// Assets
import "./styles.css";

export default function StageManagement() {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseName = localStorage.getItem("phaseName");
  const db = firebase.firestore();

  const [data, setData] = useState();
  // const [score, setScore] = useState({ data: [] })

  const [phase1Stage1, setPhase1Stage1] = useState();
  const [phase1Stage2, setPhase1Stage2] = useState();
  const [phase1Stage3, setPhase1Stage3] = useState();
  const [phase1Stage4, setPhase1Stage4] = useState();

  const [phase2Stage1, setPhase2Stage1] = useState();
  const [phase2Stage2, setPhase2Stage2] = useState();
  const [phase2Stage3, setPhase2Stage3] = useState();
  const [phase2Stage4, setPhase2Stage4] = useState();

  const [phase3Stage1, setPhase3Stage1] = useState();
  const [phase3Stage2, setPhase3Stage2] = useState();
  const [phase3Stage3, setPhase3Stage3] = useState();
  const [phase3Stage4, setPhase3Stage4] = useState();

  const [phase4Stage1, setPhase4Stage1] = useState();
  const [phase4Stage2, setPhase4Stage2] = useState();
  const [phase4Stage3, setPhase4Stage3] = useState();
  const [phase4Stage4, setPhase4Stage4] = useState();

  function getStatusStage1() {
    var docRef = db.collection("status").doc("fase1");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setData(data);

          //   console.log("====================================");
          //   console.table(data);
          //   console.log("====================================");

          setPhase1Stage1(data.etapa1[0]);
          setPhase1Stage2(data.etapa2[0]);
          setPhase1Stage3(data.etapa3[0]);
          setPhase1Stage4(data.etapa4[0]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function getStatusStage2() {
    var docRef = db.collection("status").doc("fase2");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setData(data);

          //   console.log("====================================");
          //   console.log(data);
          //   console.log("====================================");

          setPhase2Stage1(data.etapa1[0]);
          setPhase2Stage2(data.etapa2[0]);
          setPhase2Stage3(data.etapa3[0]);
          setPhase2Stage4(data.etapa4[0]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function getStatusStage3() {
    var docRef = db.collection("status").doc("fase3");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setData(data);

          //   console.log("====================================");
          //   console.log(data);
          //   console.log("====================================");

          setPhase3Stage1(data.etapa1[0]);
          setPhase3Stage2(data.etapa2[0]);
          setPhase3Stage3(data.etapa3[0]);
          setPhase3Stage4(data.etapa4[0]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function getStatusStage4() {
    var docRef = db.collection("status").doc("fase4");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setData(data);

          //   console.log("====================================");
          //   console.log(data);
          //   console.log("====================================");

          setPhase4Stage1(data.etapa1[0]);
          setPhase4Stage2(data.etapa2[0]);
          setPhase4Stage3(data.etapa3[0]);
          setPhase4Stage4(data.etapa4[0]);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function updatePhase1() {
    db.collection("status")
      .doc("fase1")
      .set(
        {
          etapa1: [phase1Stage1],
          etapa2: [phase1Stage2],
          etapa3: [phase1Stage3],
          etapa4: [phase1Stage4],
        },
        { merge: true }
      )
      .then((docRef) => {
        // alert(`Dados atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados!");
      });
  }

  function updatePhase2() {
    db.collection("status")
      .doc("fase2")
      .set(
        {
          etapa1: [phase2Stage1],
          etapa2: [phase2Stage2],
          etapa3: [phase2Stage3],
          etapa4: [phase2Stage4],
        },
        { merge: true }
      )
      .then((docRef) => {
        // alert(`Dados atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados!");
      });
  }

  function updatePhase3() {
    db.collection("status")
      .doc("fase3")
      .set(
        {
          etapa1: [phase3Stage1],
          etapa2: [phase3Stage2],
          etapa3: [phase3Stage3],
          etapa4: [phase3Stage4],
        },
        { merge: true }
      )
      .then((docRef) => {
        // alert(`Dados atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados!");
      });
  }

  function updatePhase4() {
    db.collection("status")
      .doc("fase4")
      .set(
        {
          etapa1: [phase4Stage1],
          etapa2: [phase4Stage2],
          etapa3: [phase4Stage3],
          etapa4: [phase4Stage4],
        },
        { merge: true }
      )
      .then((docRef) => {
        // alert(`Dados atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados!");
      });
  }

  function updateAll() {
    updatePhase1();
    updatePhase2();
    updatePhase3();
    updatePhase4();
    alert(`Dados atualizados com sucesso!`);
  }

  useEffect(() => {
    getStatusStage1();
    getStatusStage2();
    getStatusStage3();
    getStatusStage4();
  }, []);

  return (
    <div className="containerStageManagement">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name={phaseName} color={color} />

      <div className="contentStageManagement">
        <div className="phase">
          <h1>Fase 1</h1>
          <div className="stageManagement">
            <h2>Etapa 1</h2>
            <select
              name="phase1Stage1"
              value={phase1Stage1}
              onChange={(e) => {
                setPhase1Stage1(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 2</h2>
            <select
              name="phase1Stage2"
              value={phase1Stage2}
              onChange={(e) => {
                setPhase1Stage2(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 3</h2>
            <select
              name="phase1Stage3"
              value={phase1Stage3}
              onChange={(e) => {
                setPhase1Stage3(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 4</h2>
            <select
              name="phase1Stage4"
              value={phase1Stage4}
              onChange={(e) => {
                setPhase1Stage4(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
        </div>

        <div className="phase">
          <h1>Fase 2</h1>
          <div className="stageManagement">
            <h2>Etapa 1</h2>
            <select
              name="phase2Stage1"
              value={phase2Stage1}
              onChange={(e) => {
                setPhase2Stage1(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 2</h2>
            <select
              name="phase2Stage2"
              value={phase2Stage2}
              onChange={(e) => {
                setPhase2Stage2(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 3</h2>
            <select
              name="phase2Stage3"
              value={phase2Stage3}
              onChange={(e) => {
                setPhase2Stage3(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 4</h2>
            <select
              name="phase2Stage4"
              value={phase2Stage4}
              onChange={(e) => {
                setPhase2Stage4(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
        </div>

        <div className="phase">
          <h1>Fase 3</h1>
          <div className="stageManagement">
            <h2>Etapa 1</h2>
            <select
              name="phase3Stage1"
              value={phase3Stage1}
              onChange={(e) => {
                setPhase3Stage1(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 2</h2>
            <select
              name="phase3Stage2"
              value={phase3Stage2}
              onChange={(e) => {
                setPhase3Stage2(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 3</h2>
            <select
              name="phase3Stage3"
              value={phase3Stage3}
              onChange={(e) => {
                setPhase3Stage3(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 4</h2>
            <select
              name="phase3Stage4"
              value={phase3Stage4}
              onChange={(e) => {
                setPhase3Stage4(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
        </div>

        <div className="phase">
          <h1>Fase 4</h1>
          <div className="stageManagement">
            <h2>Etapa 1</h2>
            <select
              name="phase4Stage1"
              value={phase4Stage1}
              onChange={(e) => {
                setPhase4Stage1(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 2</h2>
            <select
              name="phase4Stage2"
              value={phase4Stage2}
              onChange={(e) => {
                setPhase4Stage2(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 3</h2>
            <select
              name="phase4Stage3"
              value={phase4Stage3}
              onChange={(e) => {
                setPhase4Stage3(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
          <div className="stageManagement">
            <h2>Etapa 4</h2>
            <select
              name="phase4Stage4"
              value={phase4Stage4}
              onChange={(e) => {
                setPhase4Stage4(e.target.value === "true" ? true : false);
              }}
            >
              <option value="true">Bloqueado</option>
              <option value="false">Liberado</option>
            </select>
          </div>
        </div>
      </div>
      <button className="button" onClick={updateAll}>
        Atualizar Dados
      </button>
    </div>
  );
}
