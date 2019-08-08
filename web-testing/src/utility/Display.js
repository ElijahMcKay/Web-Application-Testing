import React from 'react';

function Display(props) {
    console.log(props.props.strikes); 
    if(props.props.strikes === 3) {
        return <p>BATTER IS OUT</p>
    }
    return (
        <div>
            <p>Strikes: {props.props.strikes}</p>
            <p>Balls: {props.props.balls}</p>
            <p>Fouls: {props.props.fouls}</p>
            <p>Hits: {props.props.hits}</p>
        </div>
    )
}

export default Display; 