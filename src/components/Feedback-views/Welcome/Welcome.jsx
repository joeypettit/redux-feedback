import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Welcome(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState();
    console.log("Name Value:", inputValue);

    // dispatch to redux and route to next view
    function beginButton(){
        let action = {
            type: 'ADD_NAME',
            payload: inputValue
        }
        dispatch(action);
        history.push('/feeling');
    }

    return (
        <div id="welcome-view">
            <h1>Welcome!</h1>
            <h3>Please type your name below before you begin.</h3>
            <label htmlFor="name-input">Your name:</label>
            <input id="name-in" type="text" name="name-input" onChange={(e)=>setInputValue(e.target.value)}/>


            <button onClick = {()=>beginButton()}>Begin</button>
        </div>
    )
}

export default Welcome;