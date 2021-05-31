// Global
import React, { useState, useEffect } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import ListUser from "../ListUser";
import firebase from "../../firebaseConfig";

// Assets
import "./styles.css";

export default function Users() {
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseName = localStorage.getItem("phaseName");
  const db = firebase.firestore();

  const [user, setUser] = useState({ data: [] });

  function getuser() {
    const count = [];

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          count.push(doc.data());
        });

        count.sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          } else {
            return true;
          }
        });

        setUser({ data: count });
      });
  }

  useEffect(() => {
    getuser();
  }, []);

  return (
    user && (
      <div className="containerUsers">
        <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

        <SubBar name={phaseName} color={color} />

        <div className="contentUsers">
          {user.data.map((item, key) => (
            <div key={key}>
              <ListUser
                name={item.firstName}
                avatar={item.avatar}
                uid={item.uid}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
}
