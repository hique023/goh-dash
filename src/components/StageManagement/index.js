// Global
import React, { useEffect, useState } from 'react'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'
import firebase from '../../firebaseConfig'

// Assets
import './styles.css'

export default function StageManagement() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const phaseName = localStorage.getItem('phaseName')
    const db = firebase.firestore();

    const [data, setData] = useState()
    // const [score, setScore] = useState({ data: [] })

    const [phase1Stage1, setPhase1Stage1] = useState()
    const [phase1Stage2, setPhase1Stage2] = useState()
    const [phase1Stage3, setPhase1Stage3] = useState()
    const [phase1Stage4, setPhase1Stage4] = useState()

    const [phase2Stage1, setPhase2Stage1] = useState()
    const [phase2Stage2, setPhase2Stage2] = useState()
    const [phase2Stage3, setPhase2Stage3] = useState()
    const [phase2Stage4, setPhase2Stage4] = useState()

    const [phase3Stage1, setPhase3Stage1] = useState()
    const [phase3Stage2, setPhase3Stage2] = useState()
    const [phase3Stage3, setPhase3Stage3] = useState()
    const [phase3Stage4, setPhase3Stage4] = useState()

    const [phase4Stage1, setPhase4Stage1] = useState()
    const [phase4Stage2, setPhase4Stage2] = useState()
    const [phase4Stage3, setPhase4Stage3] = useState()
    const [phase4Stage4, setPhase4Stage4] = useState()

    function getStatusStage() {

        var docRef = db.collection("status").doc('fase1');

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                setData(data)

                console.log('====================================');
                console.log(data);
                console.log('====================================');

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }

    useEffect(() => {
        getStatusStage()
    }, [])

    return (
        <div className="containerStageManagement">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar name={phaseName} color={color} />

            <div className="contentStageManagement">
                <div className="phase">
                    <h1>Fase 1</h1>
                    <div className="stageManagement">
                        <h2>Etapa 1</h2>
                        <select name="phase1Stage1" value={phase1Stage1} onChange={e => { setPhase1Stage1(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 2</h2>
                        <select name="phase1Stage2" value={phase1Stage2} onChange={e => { setPhase1Stage2(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 3</h2>
                        <select name="phase1Stage3" value={phase1Stage3} onChange={e => { setPhase1Stage3(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 4</h2>
                        <select name="phase1Stage4" value={phase1Stage4} onChange={e => { setPhase1Stage4(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                </div>

                <div className="phase">
                    <h1>Fase 2</h1>
                    <div className="stageManagement">
                        <h2>Etapa 1</h2>
                        <select name="phase2Stage1" value={phase2Stage1} onChange={e => { setPhase2Stage1(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 2</h2>
                        <select name="phase2Stage2" value={phase2Stage2} onChange={e => { setPhase2Stage2(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 3</h2>
                        <select name="phase2Stage3" value={phase2Stage3} onChange={e => { setPhase2Stage3(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 4</h2>
                        <select name="phase2Stage4" value={phase2Stage4} onChange={e => { setPhase2Stage4(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                </div>

                <div className="phase">
                    <h1>Fase 3</h1>
                    <div className="stageManagement">
                        <h2>Etapa 1</h2>
                        <select name="phase3Stage1" value={phase3Stage1} onChange={e => { setPhase3Stage1(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 2</h2>
                        <select name="phase3Stage2" value={phase3Stage2} onChange={e => { setPhase3Stage2(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 3</h2>
                        <select name="phase3Stage3" value={phase3Stage3} onChange={e => { setPhase3Stage3(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 4</h2>
                        <select name="phase3Stage4" value={phase3Stage4} onChange={e => { setPhase3Stage4(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                </div>

                <div className="phase">
                    <h1>Fase 4</h1>
                    <div className="stageManagement">
                        <h2>Etapa 1</h2>
                        <select name="phase4Stage1" value={phase4Stage1} onChange={e => { setPhase4Stage1(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 2</h2>
                        <select name="phase4Stage2" value={phase4Stage2} onChange={e => { setPhase4Stage2(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 3</h2>
                        <select name="phase4Stage3" value={phase4Stage3} onChange={e => { setPhase4Stage3(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                    <div className="stageManagement">
                        <h2>Etapa 4</h2>
                        <select name="phase4Stage4" value={phase4Stage4} onChange={e => { setPhase4Stage4(e.target.value) }}>
                            <option value="true">Bloqueado</option>
                            <option value="false">Liberado</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}