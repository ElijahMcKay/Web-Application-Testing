import React from 'react';
import styled from 'styled-components'

function Display(props) {
    console.log(props.props.strikes); 

    const StyleDiv = styled.div`
    display: flex; 
    font-size: 36px; 
    width: 100%; 
    justify-content: space-around; 
    text-align: center; 
    `

    const StyleP = styled.p`
    margin-bottom: 13rem; 
    color: white; 
    `

    const StyleSpan = styled.span`
    background: white; 
    color: red; 
    font-size: 50px; 
    padding: 1.5rem 3rem;  
    margin-top: 10rem; 
    `

    return (
        <StyleDiv>
            <StyleP>Strikes: <br/><br/><StyleSpan>{props.props.strikes}</StyleSpan></StyleP>
            <StyleP>Balls: <br/><br/><StyleSpan>{props.props.balls}</StyleSpan></StyleP>
            <StyleP>Fouls: <br/><br/><StyleSpan>{props.props.fouls}</StyleSpan></StyleP>
            <StyleP>Hits: <br/><br/><StyleSpan>{props.props.hits}</StyleSpan></StyleP>
        </StyleDiv>
    )
}

export default Display; 