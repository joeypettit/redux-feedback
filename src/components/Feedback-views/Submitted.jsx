import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Submitted(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();

    function resetForm(){
        let action ={
            type: 'CLEAR_FEEDBACK'
        }
        dispatch(action);
        // route to welcome page
        history.push('/');
    }

    return (
        <div id="welcome-view" className="view-window">
            <h1>Submission Successful!</h1>
            <h2>Thank you for your feedback!</h2>
            <h3>Click the button below to submit additional feedback.</h3>
            <button onClick = {()=>resetForm()}>New</button>
        </div>
    )
}

export default Submitted;