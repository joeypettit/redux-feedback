import { useHistory } from "react-router-dom";

function Welcome(){
    const history = useHistory();
    return (
        <div id="welcome-view">
            <h1>Welcome!</h1>
            <button onClick={()=> history.push('/feeling')}>Begin</button>
        </div>
    )
}

export default Welcome;