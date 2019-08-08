import React from 'react';
import Display from "./Display"
import styled from "styled-components"

function Dashboard(props) {

    const StyleDiv = styled.div`
    padding-bottom: 10rem; 
    `

    const StyleH1 = styled.h1`
    font-size: 58px; 
    color: white; 
    padding-top: 3rem; 
    `

    const StyleButton = styled.button`
    border: 1px solid white; 
    border-radius: 10px; 
    background: white; 
    color: darkcyan; 
    font-size: 24px; 
    margin: 0 10px 10rem 10px;
    padding: .5rem 2.5rem; 
    `

    return (
        <div>
            <StyleH1>Baseball Tally Dashboard</StyleH1>
            <Display props={props}/>
            <StyleButton onClick={props.handleStrikes}>Add Strike</StyleButton>
            <StyleButton onClick={props.handleBalls}>Add Ball</StyleButton>
            <StyleButton onClick={props.handleFouls}>Add Foul</StyleButton>
            <StyleButton onClick={props.handleHit}>Add Hit</StyleButton>
        </div>
    )
}

export default Dashboard