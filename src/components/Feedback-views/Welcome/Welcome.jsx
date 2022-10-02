import { useHistory } from "react-router-dom";

function Welcome(){
    // assign history and dispatch
    const history = useHistory();

    return (
        <div id="welcome-view" className="view-window">
            <h1>Welcome!</h1>
            <h2>Your feedback helps us improve!</h2>
            <h3>Please press "Start" to begin.</h3>
            <button onClick = {()=>history.push('/feeling')}>Start</button>
        </div>
    )
}

export default Welcome;