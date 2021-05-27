// Global
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { IoArrowBack } from 'react-icons/io5'

export default function TopBarPhase(props) {

    const history = useHistory()

    function backLink() {
        history.goBack()
        localStorage.setItem('timer', false)
    }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="topBarPhase" style={cardStyle}>
            <div className="leftTopBarPhase" style={cardStyle}>

                {props.quiz !== true && (
                    <button onClick={backLink} className="back-link">
                        <IoArrowBack size={30} color="white" />
                    </button>
                )}

                <h1>{props.name}!</h1>
            </div>
        </div>
    )
}