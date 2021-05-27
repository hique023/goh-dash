// Global
import React from 'react'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'

// Assets
import './styles.css'

export default function Users() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const phaseName = localStorage.getItem('phaseName')

    return (
        <div className="containerUsers">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar name={phaseName} color={color} />

            <div className="contentUsers">

                <div className="users">
                    <h1>Users</h1>
                </div>

                <div className="users">
                    <h2>Users Managament</h2>
                </div>

            </div>

        </div>
    )
}