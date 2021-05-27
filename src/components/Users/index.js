// Global
import React from 'react'
import TopBarPhase from '../TopBarPhase'

// Assets
import './styles.css'

export default function Users() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerUsers">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />
            <h1>Users</h1>
        </div>
    )
}