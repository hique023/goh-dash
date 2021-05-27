// Global
import React from 'react'
import TopBarPhase from '../TopBarPhase'

// Assets
import './styles.css'

export default function StageManagement() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerStageManagement">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />
            <h1>Stage Management</h1>
        </div>
    )
}