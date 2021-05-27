// Global
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { BsGearFill } from "react-icons/bs";

export default function StageLink(props) {

    const history = useHistory()

    function goStage() {
        localStorage.setItem('stageId', props.stageId)
        localStorage.setItem('subBarName', props.name)
        history.push('/stage')
    }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="containerStageLink" style={cardStyle}>
            <div className="contentStageLink">
                <button onClick={goStage} id="buttonStage" disabled={props.status}>
                    <div className="leftStageLink">

                        <BsGearFill size={80} color="var(--black)" />

                        <h1>{props.name}</h1>
                    </div>
                    {/* <h1>{props.score} 5555555</h1> */}
                </button>
            </div>
        </div>
    )
}