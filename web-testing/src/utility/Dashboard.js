import React from 'react';
import Display from "./Display"
function Dashboard(props) {

    return (
        <div>
            <h1>Baseball Tally Dashboard</h1>
            <Display props={props}/>
            <button onClick={props.handleStrikes}>Add Strike</button>
            <button onClick={props.handleBalls}>Add Ball</button>
            <button onClick={props.handleFouls}>Add Foul</button>
            <button onClick={props.handleHit}>Add Hit</button>
        </div>
    )
}

export default Dashboard