// Global
import React, { useEffect, useState } from 'react'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'
// import SubStage from '../SubStage'
// import QuizLink from '../QuizLink'

// Assets
import './styles.css'

export default function Stage(props) {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const phaseId = localStorage.getItem('phaseId')
    const stageId = localStorage.getItem('stageId')
    const stageName = localStorage.getItem('subBarName')
    const userUid = localStorage.getItem('userUid')

    return (
        <div className="containerStage">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar name={stageName} color={color} />

            <div className="listStage">

                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>
                <h1>List questions</h1>

            </div>
        </div>
    )
}