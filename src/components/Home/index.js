// Global
import React, { useEffect, useState } from 'react'
import TopBar from '../TopBar'
import ListPhases from '../ListPhases'
// import firebase from '../../firebaseConfig.js'

// Assets
import './styles.css'

export default function Home() {

    const [data, setData] = useState(0)
    const userUid = localStorage.getItem('userUid')
    const nameUser = localStorage.getItem('nameUser')
    // const db = firebase.firestore();

    return (
        <div className="containerHome">
            <TopBar name={nameUser} />
            <ListPhases />
        </div>
    )
}