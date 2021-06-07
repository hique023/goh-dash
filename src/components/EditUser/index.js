// Global
import React, { useEffect, useState } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";

export default function EditUser() {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const uid = localStorage.getItem("idUser");
  const db = firebase.firestore();

  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [uidDb, setUidDb] = useState("");

  const [trueVar] = useState(Boolean("true"));
  const [falseVar] = useState(false);

  const [quizPhase1Stage1, setQuizPhase1Stage1] = useState("");
  const [quizPhase1Stage2, setQuizPhase1Stage2] = useState("");
  const [quizPhase1Stage3, setQuizPhase1Stage3] = useState("");
  const [quizPhase1Stage4, setQuizPhase1Stage4] = useState("");

  const [quizPhase2Stage1, setQuizPhase2Stage1] = useState("");
  const [quizPhase2Stage2, setQuizPhase2Stage2] = useState("");
  const [quizPhase2Stage3, setQuizPhase2Stage3] = useState("");
  const [quizPhase2Stage4, setQuizPhase2Stage4] = useState("");

  const [quizPhase3Stage1, setQuizPhase3Stage1] = useState("");
  const [quizPhase3Stage2, setQuizPhase3Stage2] = useState("");
  const [quizPhase3Stage3, setQuizPhase3Stage3] = useState("");
  const [quizPhase3Stage4, setQuizPhase3Stage4] = useState("");

  const [quizPhase4Stage1, setQuizPhase4Stage1] = useState("");
  const [quizPhase4Stage2, setQuizPhase4Stage2] = useState("");
  const [quizPhase4Stage3, setQuizPhase4Stage3] = useState("");
  const [quizPhase4Stage4, setQuizPhase4Stage4] = useState("");

  // Fase 1

  // Etapa 1
  const [desafioFase1Etapa1, setDesafioFase1Etapa1] = useState(0);
  const [qualidadeFase1Etapa1, setQualidadeFase1Etapa1] = useState(0);
  const [treinamentoFase1Etapa1, setTreinamentoFase1Etapa1] = useState(0);
  const [quizFase1Etapa1, setQuizFase1Etapa1] = useState(0);
  const [totalFase1Etapa1, setTotalFase1Etapa1] = useState(0);

  // Etapa 2
  const [desafioFase1Etapa2, setDesafioFase1Etapa2] = useState(0);
  const [qualidadeFase1Etapa2, setQualidadeFase1Etapa2] = useState(0);
  const [treinamentoFase1Etapa2, setTreinamentoFase1Etapa2] = useState(0);
  const [quizFase1Etapa2, setQuizFase1Etapa2] = useState(0);
  const [totalFase1Etapa2, setTotalFase1Etapa2] = useState(0);

  // Etapa 3
  const [desafioFase1Etapa3, setDesafioFase1Etapa3] = useState(0);
  const [qualidadeFase1Etapa3, setQualidadeFase1Etapa3] = useState(0);
  const [treinamentoFase1Etapa3, setTreinamentoFase1Etapa3] = useState(0);
  const [quizFase1Etapa3, setQuizFase1Etapa3] = useState(0);
  const [totalFase1Etapa3, setTotalFase1Etapa3] = useState(0);

  // Etapa 4
  const [desafioFase1Etapa4, setDesafioFase1Etapa4] = useState(0);
  const [qualidadeFase1Etapa4, setQualidadeFase1Etapa4] = useState(0);
  const [treinamentoFase1Etapa4, setTreinamentoFase1Etapa4] = useState(0);
  const [quizFase1Etapa4, setQuizFase1Etapa4] = useState(0);
  const [totalFase1Etapa4, setTotalFase1Etapa4] = useState(0);

  // Fase 2

  // Etapa 1
  const [desafioFase2Etapa1, setDesafioFase2Etapa1] = useState(0);
  const [qualidadeFase2Etapa1, setQualidadeFase2Etapa1] = useState(0);
  const [treinamentoFase2Etapa1, setTreinamentoFase2Etapa1] = useState(0);
  const [quizFase2Etapa1, setQuizFase2Etapa1] = useState(0);
  const [totalFase2Etapa1, setTotalFase2Etapa1] = useState(0);

  // Etapa 2
  const [desafioFase2Etapa2, setDesafioFase2Etapa2] = useState(0);
  const [qualidadeFase2Etapa2, setQualidadeFase2Etapa2] = useState(0);
  const [treinamentoFase2Etapa2, setTreinamentoFase2Etapa2] = useState(0);
  const [quizFase2Etapa2, setQuizFase2Etapa2] = useState(0);
  const [totalFase2Etapa2, setTotalFase2Etapa2] = useState(0);

  // Etapa 3
  const [desafioFase2Etapa3, setDesafioFase2Etapa3] = useState(0);
  const [qualidadeFase2Etapa3, setQualidadeFase2Etapa3] = useState(0);
  const [treinamentoFase2Etapa3, setTreinamentoFase2Etapa3] = useState(0);
  const [quizFase2Etapa3, setQuizFase2Etapa3] = useState(0);
  const [totalFase2Etapa3, setTotalFase2Etapa3] = useState(0);

  // Etapa 4
  const [desafioFase2Etapa4, setDesafioFase2Etapa4] = useState(0);
  const [qualidadeFase2Etapa4, setQualidadeFase2Etapa4] = useState(0);
  const [treinamentoFase2Etapa4, setTreinamentoFase2Etapa4] = useState(0);
  const [quizFase2Etapa4, setQuizFase2Etapa4] = useState(0);
  const [totalFase2Etapa4, setTotalFase2Etapa4] = useState(0);

  // Fase 3

  // Etapa 1
  const [desafioFase3Etapa1, setDesafioFase3Etapa1] = useState(0);
  const [qualidadeFase3Etapa1, setQualidadeFase3Etapa1] = useState(0);
  const [treinamentoFase3Etapa1, setTreinamentoFase3Etapa1] = useState(0);
  const [quizFase3Etapa1, setQuizFase3Etapa1] = useState(0);
  const [totalFase3Etapa1, setTotalFase3Etapa1] = useState(0);

  // Etapa 2
  const [desafioFase3Etapa2, setDesafioFase3Etapa2] = useState(0);
  const [qualidadeFase3Etapa2, setQualidadeFase3Etapa2] = useState(0);
  const [treinamentoFase3Etapa2, setTreinamentoFase3Etapa2] = useState(0);
  const [quizFase3Etapa2, setQuizFase3Etapa2] = useState(0);
  const [totalFase3Etapa2, setTotalFase3Etapa2] = useState(0);

  // Etapa 3
  const [desafioFase3Etapa3, setDesafioFase3Etapa3] = useState(0);
  const [qualidadeFase3Etapa3, setQualidadeFase3Etapa3] = useState(0);
  const [treinamentoFase3Etapa3, setTreinamentoFase3Etapa3] = useState(0);
  const [quizFase3Etapa3, setQuizFase3Etapa3] = useState(0);
  const [totalFase3Etapa3, setTotalFase3Etapa3] = useState(0);

  // Etapa 4
  const [desafioFase3Etapa4, setDesafioFase3Etapa4] = useState(0);
  const [qualidadeFase3Etapa4, setQualidadeFase3Etapa4] = useState(0);
  const [treinamentoFase3Etapa4, setTreinamentoFase3Etapa4] = useState(0);
  const [quizFase3Etapa4, setQuizFase3Etapa4] = useState(0);
  const [totalFase3Etapa4, setTotalFase3Etapa4] = useState(0);

  // Fase 4

  // Etapa 1
  const [desafioFase4Etapa1, setDesafioFase4Etapa1] = useState(0);
  const [qualidadeFase4Etapa1, setQualidadeFase4Etapa1] = useState(0);
  const [treinamentoFase4Etapa1, setTreinamentoFase4Etapa1] = useState(0);
  const [quizFase4Etapa1, setQuizFase4Etapa1] = useState(0);
  const [totalFase4Etapa1, setTotalFase4Etapa1] = useState(0);

  // Etapa 2
  const [desafioFase4Etapa2, setDesafioFase4Etapa2] = useState(0);
  const [qualidadeFase4Etapa2, setQualidadeFase4Etapa2] = useState(0);
  const [treinamentoFase4Etapa2, setTreinamentoFase4Etapa2] = useState(0);
  const [quizFase4Etapa2, setQuizFase4Etapa2] = useState(0);
  const [totalFase4Etapa2, setTotalFase4Etapa2] = useState(0);

  // Etapa 3
  const [desafioFase4Etapa3, setDesafioFase4Etapa3] = useState(0);
  const [qualidadeFase4Etapa3, setQualidadeFase4Etapa3] = useState(0);
  const [treinamentoFase4Etapa3, setTreinamentoFase4Etapa3] = useState(0);
  const [quizFase4Etapa3, setQuizFase4Etapa3] = useState(0);
  const [totalFase4Etapa3, setTotalFase4Etapa3] = useState(0);

  // Etapa 4
  const [desafioFase4Etapa4, setDesafioFase4Etapa4] = useState(0);
  const [qualidadeFase4Etapa4, setQualidadeFase4Etapa4] = useState(0);
  const [treinamentoFase4Etapa4, setTreinamentoFase4Etapa4] = useState(0);
  const [quizFase4Etapa4, setQuizFase4Etapa4] = useState(0);
  const [totalFase4Etapa4, setTotalFase4Etapa4] = useState(0);

  function getPersonalData() {
    var docRef = db.collection("users").doc(uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          // setData(data);

          // console.log("====================================");
          // console.log(data);
          // console.log("====================================");

          setAvatar(data.avatar);
          setEmail(data.email);
          setFirstName(data.firstName);
          setGroup(data.group);
          setName(data.name);
          setScore(data.score);
          setUidDb(data.uid);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function getQuizFinish() {
    var docRef = db.collection("quizFinish").doc(uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          // setData(data);

          // console.log("====================================");
          // console.log(data);
          // console.log("====================================");

          setQuizPhase1Stage1(data.fase1.etapa1);
          setQuizPhase1Stage2(data.fase1.etapa2);
          setQuizPhase1Stage3(data.fase1.etapa3);
          setQuizPhase1Stage4(data.fase1.etapa4);

          setQuizPhase2Stage1(data.fase2.etapa1);
          setQuizPhase2Stage2(data.fase2.etapa2);
          setQuizPhase2Stage3(data.fase2.etapa3);
          setQuizPhase2Stage4(data.fase2.etapa4);

          setQuizPhase3Stage1(data.fase3.etapa1);
          setQuizPhase3Stage2(data.fase3.etapa2);
          setQuizPhase3Stage3(data.fase3.etapa3);
          setQuizPhase3Stage4(data.fase3.etapa4);

          setQuizPhase4Stage1(data.fase4.etapa1);
          setQuizPhase4Stage2(data.fase4.etapa2);
          setQuizPhase4Stage3(data.fase4.etapa3);
          setQuizPhase4Stage4(data.fase4.etapa4);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function getScore() {
    var docRef = db.collection("score").doc(uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          // setData(data);

          // console.log("====================================");
          // console.log(data);
          // console.log("====================================");

          // Fase 1

          // Etapa 1
          setDesafioFase1Etapa1(data.fase1.etapa1.desafio);
          setQualidadeFase1Etapa1(data.fase1.etapa1.qualidade);
          setTreinamentoFase1Etapa1(data.fase1.etapa1.treinamento);
          setQuizFase1Etapa1(data.fase1.etapa1.quiz);

          // Etapa 2
          setDesafioFase1Etapa2(data.fase1.etapa2.desafio);
          setQualidadeFase1Etapa2(data.fase1.etapa2.qualidade);
          setTreinamentoFase1Etapa2(data.fase1.etapa2.treinamento);
          setQuizFase1Etapa2(data.fase1.etapa2.quiz);

          // Etapa 3
          setDesafioFase1Etapa3(data.fase1.etapa3.desafio);
          setQualidadeFase1Etapa3(data.fase1.etapa3.qualidade);
          setTreinamentoFase1Etapa3(data.fase1.etapa3.treinamento);
          setQuizFase1Etapa3(data.fase1.etapa3.quiz);

          // Etapa 4
          setDesafioFase1Etapa4(data.fase1.etapa4.desafio);
          setQualidadeFase1Etapa4(data.fase1.etapa4.qualidade);
          setTreinamentoFase1Etapa4(data.fase1.etapa4.treinamento);
          setQuizFase1Etapa4(data.fase1.etapa4.quiz);

          // Fase 2

          // Etapa 1
          setDesafioFase2Etapa1(data.fase2.etapa1.desafio);
          setQualidadeFase2Etapa1(data.fase2.etapa1.qualidade);
          setTreinamentoFase2Etapa1(data.fase2.etapa1.treinamento);
          setQuizFase2Etapa1(data.fase2.etapa1.quiz);

          // Etapa 2
          setDesafioFase2Etapa2(data.fase2.etapa2.desafio);
          setQualidadeFase2Etapa2(data.fase2.etapa2.qualidade);
          setTreinamentoFase2Etapa2(data.fase2.etapa2.treinamento);
          setQuizFase2Etapa2(data.fase2.etapa2.quiz);

          // Etapa 3
          setDesafioFase2Etapa3(data.fase2.etapa3.desafio);
          setQualidadeFase2Etapa3(data.fase2.etapa3.qualidade);
          setTreinamentoFase2Etapa3(data.fase2.etapa3.treinamento);
          setQuizFase2Etapa3(data.fase2.etapa3.quiz);

          // Etapa 4
          setDesafioFase2Etapa4(data.fase2.etapa4.desafio);
          setQualidadeFase2Etapa4(data.fase2.etapa4.qualidade);
          setTreinamentoFase2Etapa4(data.fase2.etapa4.treinamento);
          setQuizFase2Etapa4(data.fase2.etapa4.quiz);

          // Fase 3

          // Etapa 1
          setDesafioFase3Etapa1(data.fase3.etapa1.desafio);
          setQualidadeFase3Etapa1(data.fase3.etapa1.qualidade);
          setTreinamentoFase3Etapa1(data.fase3.etapa1.treinamento);
          setQuizFase3Etapa1(data.fase3.etapa1.quiz);

          // Etapa 2
          setDesafioFase3Etapa2(data.fase3.etapa2.desafio);
          setQualidadeFase3Etapa2(data.fase3.etapa2.qualidade);
          setTreinamentoFase3Etapa2(data.fase3.etapa2.treinamento);
          setQuizFase3Etapa2(data.fase3.etapa2.quiz);

          // Etapa 3
          setDesafioFase3Etapa3(data.fase3.etapa3.desafio);
          setQualidadeFase3Etapa3(data.fase3.etapa3.qualidade);
          setTreinamentoFase3Etapa3(data.fase3.etapa3.treinamento);
          setQuizFase3Etapa3(data.fase3.etapa3.quiz);

          // Etapa 4
          setDesafioFase3Etapa4(data.fase3.etapa4.desafio);
          setQualidadeFase3Etapa4(data.fase3.etapa4.qualidade);
          setTreinamentoFase3Etapa4(data.fase3.etapa4.treinamento);
          setQuizFase3Etapa4(data.fase3.etapa4.quiz);

          // Fase 4

          // Etapa 1
          setDesafioFase4Etapa1(data.fase4.etapa1.desafio);
          setQualidadeFase4Etapa1(data.fase4.etapa1.qualidade);
          setTreinamentoFase4Etapa1(data.fase4.etapa1.treinamento);
          setQuizFase4Etapa1(data.fase4.etapa1.quiz);

          // Etapa 2
          setDesafioFase4Etapa2(data.fase4.etapa2.desafio);
          setQualidadeFase4Etapa2(data.fase4.etapa2.qualidade);
          setTreinamentoFase4Etapa2(data.fase4.etapa2.treinamento);
          setQuizFase4Etapa2(data.fase4.etapa2.quiz);

          // Etapa 3
          setDesafioFase4Etapa3(data.fase4.etapa3.desafio);
          setQualidadeFase4Etapa3(data.fase4.etapa3.qualidade);
          setTreinamentoFase4Etapa3(data.fase4.etapa3.treinamento);
          setQuizFase4Etapa3(data.fase4.etapa3.quiz);

          // Etapa 4
          setDesafioFase4Etapa4(data.fase4.etapa4.desafio);
          setQualidadeFase4Etapa4(data.fase4.etapa4.qualidade);
          setTreinamentoFase4Etapa4(data.fase4.etapa4.treinamento);
          setQuizFase4Etapa4(data.fase4.etapa4.quiz);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function updatePersonalData() {
    db.collection("users")
      .doc(uid)
      .set(
        {
          avatar: avatar,
          email: email,
          firstName: firstName,
          group: group,
          name: name,
        },
        { merge: true }
      )
      .then((docRef) => {
        alert(`Dados do usuário atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados do usuário!");
      });
  }

  function updateQuizFinish() {
    db.collection("quizFinish")
      .doc(uid)
      .set(
        {
          fase1: {
            etapa1: quizPhase1Stage1,
            etapa2: quizPhase1Stage2,
            etapa3: quizPhase1Stage3,
            etapa4: quizPhase1Stage4,
          },
          fase2: {
            etapa1: quizPhase2Stage1,
            etapa2: quizPhase2Stage2,
            etapa3: quizPhase2Stage3,
            etapa4: quizPhase2Stage4,
          },
          fase3: {
            etapa1: quizPhase3Stage1,
            etapa2: quizPhase3Stage2,
            etapa3: quizPhase3Stage3,
            etapa4: quizPhase3Stage4,
          },
          fase4: {
            etapa1: quizPhase4Stage1,
            etapa2: quizPhase4Stage2,
            etapa3: quizPhase4Stage3,
            etapa4: quizPhase4Stage4,
          },
        },
        { merge: true }
      )
      .then((docRef) => {
        alert(`Dados do usuário atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados do usuário!");
      });
  }

  function updateScore() {
    db.collection("score")
      .doc(uid)
      .set(
        {
          fase1: {
            etapa1: {
              qualidade: qualidadeFase1Etapa1,
              treinamento: treinamentoFase1Etapa1,
              desafio: desafioFase1Etapa1,
              quiz: quizFase1Etapa1,
            },
            etapa2: {
              qualidade: qualidadeFase1Etapa2,
              treinamento: treinamentoFase1Etapa2,
              desafio: desafioFase1Etapa2,
              quiz: quizFase1Etapa2,
            },
            etapa3: {
              qualidade: qualidadeFase1Etapa3,
              treinamento: treinamentoFase1Etapa3,
              desafio: desafioFase1Etapa3,
              quiz: quizFase1Etapa3,
            },
            etapa4: {
              qualidade: qualidadeFase1Etapa4,
              treinamento: treinamentoFase1Etapa4,
              desafio: desafioFase1Etapa4,
              quiz: quizFase1Etapa4,
            },
          },
          fase2: {
            etapa1: {
              qualidade: qualidadeFase2Etapa1,
              treinamento: treinamentoFase2Etapa1,
              desafio: desafioFase2Etapa1,
              quiz: quizFase2Etapa1,
            },
            etapa2: {
              qualidade: qualidadeFase2Etapa2,
              treinamento: treinamentoFase2Etapa2,
              desafio: desafioFase2Etapa2,
              quiz: quizFase2Etapa2,
            },
            etapa3: {
              qualidade: qualidadeFase2Etapa3,
              treinamento: treinamentoFase2Etapa3,
              desafio: desafioFase2Etapa3,
              quiz: quizFase2Etapa3,
            },
            etapa4: {
              qualidade: qualidadeFase2Etapa4,
              treinamento: treinamentoFase2Etapa4,
              desafio: desafioFase2Etapa4,
              quiz: quizFase2Etapa4,
            },
          },
          fase3: {
            etapa1: {
              qualidade: qualidadeFase3Etapa1,
              treinamento: treinamentoFase3Etapa1,
              desafio: desafioFase3Etapa1,
              quiz: quizFase3Etapa1,
            },
            etapa2: {
              qualidade: qualidadeFase3Etapa2,
              treinamento: treinamentoFase3Etapa2,
              desafio: desafioFase3Etapa2,
              quiz: quizFase3Etapa2,
            },
            etapa3: {
              qualidade: qualidadeFase3Etapa3,
              treinamento: treinamentoFase3Etapa3,
              desafio: desafioFase3Etapa3,
              quiz: quizFase3Etapa3,
            },
            etapa4: {
              qualidade: qualidadeFase3Etapa4,
              treinamento: treinamentoFase3Etapa4,
              desafio: desafioFase3Etapa4,
              quiz: quizFase3Etapa4,
            },
          },
          fase4: {
            etapa1: {
              qualidade: qualidadeFase4Etapa1,
              treinamento: treinamentoFase4Etapa1,
              desafio: desafioFase4Etapa1,
              quiz: quizFase4Etapa1,
            },
            etapa2: {
              qualidade: qualidadeFase4Etapa2,
              treinamento: treinamentoFase4Etapa2,
              desafio: desafioFase4Etapa2,
              quiz: quizFase4Etapa2,
            },
            etapa3: {
              qualidade: qualidadeFase4Etapa3,
              treinamento: treinamentoFase4Etapa3,
              desafio: desafioFase4Etapa3,
              quiz: quizFase4Etapa3,
            },
            etapa4: {
              qualidade: qualidadeFase4Etapa4,
              treinamento: treinamentoFase4Etapa4,
              desafio: desafioFase4Etapa4,
              quiz: quizFase4Etapa4,
            },
          },
        },
        { merge: true }
      )
      .then((docRef) => {
        alert(`Dados do usuário atualizados com sucesso!`);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
        console.log("Erro ao cadastrar score do usuário!");
      });
  }

  useEffect(() => {
    getPersonalData();
    getQuizFinish();
    getScore();
  }, []);

  return (
    <div className="containerEditUser">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar name="Edição de Usuário" color={color} />

      <div className="contentEditUser">
        <div className="editUser">
          <h1>Dados Pessoais</h1>
          <div className="slot">
            <h1>Avatar</h1>
            <input
              type="text"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
          </div>
          <div className="slot">
            <h1>Email</h1>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="slot">
            <h1>Primeiro Nome</h1>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="slot">
            <h1>Grupo</h1>
            <select
              name="group"
              value={group}
              onChange={(e) => {
                setGroup(e.target.value);
              }}
            >
              {/* <option hidden>Time</option> */}
              <option value="rc">RC</option>
              <option value="fidelizacao">Fidelização</option>
              <option value="onboarding">Onboarding</option>
            </select>
          </div>
          <div className="slot">
            <h1>Nome</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="slot">
            <h1>Score</h1>
            <h2>{score} xp</h2>
          </div>
          <div className="slot">
            <h1>UID</h1>
            <h2>{uidDb}</h2>
          </div>

          <button className="button" onClick={updatePersonalData}>
            Atualizar Dados
          </button>

          <hr />

          <div className="editUser">
            <h1>Liberação de Quiz</h1>
            <div className="phase">
              <div className="stage">
                <h1>Fase 1</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select
                    name="phase1Stage1"
                    value={quizPhase1Stage1}
                    onChange={(e) => {
                      setQuizPhase1Stage1(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select
                    name="phase1Stage2"
                    value={quizPhase1Stage2}
                    onChange={(e) => {
                      setQuizPhase1Stage2(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select
                    name="phase1Stage3"
                    value={quizPhase1Stage3}
                    onChange={(e) => {
                      setQuizPhase1Stage3(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select
                    name="phase1Stage4"
                    value={quizPhase1Stage4}
                    onChange={(e) => {
                      setQuizPhase1Stage4(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
              <div className="stage">
                <h1>Fase 2</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select
                    name="phase2Stage1"
                    value={quizPhase2Stage1}
                    onChange={(e) => {
                      setQuizPhase2Stage1(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select
                    name="phase2Stage2"
                    value={quizPhase2Stage2}
                    onChange={(e) => {
                      setQuizPhase2Stage2(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select
                    name="phase2Stage3"
                    value={quizPhase2Stage3}
                    onChange={(e) => {
                      setQuizPhase2Stage3(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select
                    name="phase2Stage4"
                    value={quizPhase2Stage4}
                    onChange={(e) => {
                      setQuizPhase2Stage4(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
              <div className="stage">
                <h1>Fase 3</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select
                    name="phase3Stage1"
                    value={quizPhase3Stage1}
                    onChange={(e) => {
                      setQuizPhase3Stage1(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select
                    name="phase3Stage2"
                    value={quizPhase3Stage2}
                    onChange={(e) => {
                      setQuizPhase3Stage2(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select
                    name="phase3Stage3"
                    value={quizPhase3Stage3}
                    onChange={(e) => {
                      setQuizPhase3Stage3(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select
                    name="phase3Stage4"
                    value={quizPhase3Stage4}
                    onChange={(e) => {
                      setQuizPhase3Stage4(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
              <div className="stage">
                <h1>Fase 4</h1>
                <div className="slot">
                  <h2>Etapa 1</h2>
                  <select
                    name="phase4Stage1"
                    value={quizPhase4Stage1}
                    onChange={(e) => {
                      setQuizPhase4Stage1(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 2</h2>
                  <select
                    name="phase4Stage2"
                    value={quizPhase4Stage2}
                    onChange={(e) => {
                      setQuizPhase4Stage2(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 3</h2>
                  <select
                    name="phase4Stage3"
                    value={quizPhase4Stage3}
                    onChange={(e) => {
                      setQuizPhase4Stage3(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
                <div className="slot">
                  <h2>Etapa 4</h2>
                  <select
                    name="phase4Stage4"
                    value={quizPhase4Stage4}
                    onChange={(e) => {
                      setQuizPhase4Stage4(
                        e.target.value === "true" ? true : false
                      );
                    }}
                  >
                    <option value="true">Bloqueado</option>
                    <option value="false">Liberado</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="button" onClick={updateQuizFinish}>
              Atualizar Dados
            </button>
            <hr />
          </div>
        </div>

        <div className="editUser">
          <h1>Pontuação</h1>
          <h1>Fase 1</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase1Etapa1}
                  onChange={(e) => {
                    setDesafioFase1Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase1Etapa1}
                  onChange={(e) => {
                    setQualidadeFase1Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase1Etapa1}
                  onChange={(e) => {
                    setQuizFase1Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase1Etapa1}
                  onChange={(e) => {
                    setTreinamentoFase1Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase1Etapa2}
                  onChange={(e) => {
                    setDesafioFase1Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase1Etapa2}
                  onChange={(e) => {
                    setQualidadeFase1Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase1Etapa2}
                  onChange={(e) => {
                    setQuizFase1Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase1Etapa2}
                  onChange={(e) => {
                    setTreinamentoFase1Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase1Etapa3}
                  onChange={(e) => {
                    setDesafioFase1Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase1Etapa3}
                  onChange={(e) => {
                    setQualidadeFase1Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase1Etapa3}
                  onChange={(e) => {
                    setQuizFase1Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase1Etapa3}
                  onChange={(e) => {
                    setTreinamentoFase1Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase1Etapa4}
                  onChange={(e) => {
                    setDesafioFase1Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase1Etapa4}
                  onChange={(e) => {
                    setQualidadeFase1Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase1Etapa4}
                  onChange={(e) => {
                    setQuizFase1Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase1Etapa4}
                  onChange={(e) => {
                    setTreinamentoFase1Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
          </div>
          <h1>Fase 2</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase2Etapa1}
                  onChange={(e) => {
                    setDesafioFase2Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase2Etapa1}
                  onChange={(e) => {
                    setQualidadeFase2Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase2Etapa1}
                  onChange={(e) => {
                    setQuizFase2Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase2Etapa1}
                  onChange={(e) => {
                    setTreinamentoFase2Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase2Etapa2}
                  onChange={(e) => {
                    setDesafioFase2Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase2Etapa2}
                  onChange={(e) => {
                    setQualidadeFase2Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase2Etapa2}
                  onChange={(e) => {
                    setQuizFase2Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase2Etapa2}
                  onChange={(e) => {
                    setTreinamentoFase2Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase2Etapa3}
                  onChange={(e) => {
                    setDesafioFase2Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase2Etapa3}
                  onChange={(e) => {
                    setQualidadeFase2Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase2Etapa3}
                  onChange={(e) => {
                    setQuizFase2Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase2Etapa3}
                  onChange={(e) => {
                    setTreinamentoFase2Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase2Etapa4}
                  onChange={(e) => {
                    setDesafioFase2Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase2Etapa4}
                  onChange={(e) => {
                    setQualidadeFase2Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase2Etapa4}
                  onChange={(e) => {
                    setQuizFase2Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase2Etapa4}
                  onChange={(e) => {
                    setTreinamentoFase2Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
          </div>
          <h1>Fase 3</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase3Etapa1}
                  onChange={(e) => {
                    setDesafioFase3Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase3Etapa1}
                  onChange={(e) => {
                    setQualidadeFase3Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase3Etapa1}
                  onChange={(e) => {
                    setQuizFase3Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase3Etapa1}
                  onChange={(e) => {
                    setTreinamentoFase3Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase3Etapa2}
                  onChange={(e) => {
                    setDesafioFase3Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase3Etapa2}
                  onChange={(e) => {
                    setQualidadeFase3Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase3Etapa2}
                  onChange={(e) => {
                    setQuizFase3Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase3Etapa2}
                  onChange={(e) => {
                    setTreinamentoFase3Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase3Etapa3}
                  onChange={(e) => {
                    setDesafioFase3Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase3Etapa3}
                  onChange={(e) => {
                    setQualidadeFase3Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase3Etapa3}
                  onChange={(e) => {
                    setQuizFase3Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase3Etapa3}
                  onChange={(e) => {
                    setTreinamentoFase3Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase3Etapa4}
                  onChange={(e) => {
                    setDesafioFase3Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase3Etapa4}
                  onChange={(e) => {
                    setQualidadeFase3Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase3Etapa4}
                  onChange={(e) => {
                    setQuizFase3Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase3Etapa4}
                  onChange={(e) => {
                    setTreinamentoFase3Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
          </div>
          <h1>Fase 4</h1>
          <div className="phase">
            <div className="stage">
              <h1>Etapa 1</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase4Etapa1}
                  onChange={(e) => {
                    setDesafioFase4Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase4Etapa1}
                  onChange={(e) => {
                    setQualidadeFase4Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase4Etapa1}
                  onChange={(e) => {
                    setQuizFase4Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase4Etapa1}
                  onChange={(e) => {
                    setTreinamentoFase4Etapa1(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 2</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase4Etapa2}
                  onChange={(e) => {
                    setDesafioFase4Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase4Etapa2}
                  onChange={(e) => {
                    setQualidadeFase4Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase4Etapa2}
                  onChange={(e) => {
                    setQuizFase4Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase4Etapa2}
                  onChange={(e) => {
                    setTreinamentoFase4Etapa2(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 3</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase4Etapa3}
                  onChange={(e) => {
                    setDesafioFase4Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase4Etapa3}
                  onChange={(e) => {
                    setQualidadeFase4Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase4Etapa3}
                  onChange={(e) => {
                    setQuizFase4Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase4Etapa3}
                  onChange={(e) => {
                    setTreinamentoFase4Etapa3(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
            <div className="stage">
              <h1>Etapa 4</h1>
              <div className="slot">
                <h2>Desafio</h2>
                <input
                  type="text"
                  value={desafioFase4Etapa4}
                  onChange={(e) => {
                    setDesafioFase4Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Qualidade</h2>
                <input
                  type="text"
                  value={qualidadeFase4Etapa4}
                  onChange={(e) => {
                    setQualidadeFase4Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Quiz</h2>
                <input
                  type="text"
                  value={quizFase4Etapa4}
                  onChange={(e) => {
                    setQuizFase4Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
              <div className="slot">
                <h2>Treinamento</h2>
                <input
                  type="text"
                  value={treinamentoFase4Etapa4}
                  onChange={(e) => {
                    setTreinamentoFase4Etapa4(parseInt(e.target.value, 10));
                  }}
                />
              </div>
            </div>
          </div>
          <button className="button" onClick={updateScore}>
            Atualizar Dados
          </button>
        </div>
      </div>
    </div>
  );
}
