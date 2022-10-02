import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feelings(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState();
    console.log("Feeling Value:", inputValue);

    // dispatch to redux and route to next view
    function nextButton(){
        let action = {
            type: 'ADD_FEELING',
            payload: inputValue
        }
        dispatch(action);
        history.push('/understanding')
    }




    return (
        <div id="feeling-view">
            <h1>Feelings</h1>
            <label htmlFor="feeling-radio-1">1</label>
            <input id="feeling-radio-1" value="1" type="radio" name="feelings-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="feeling-radio-2">2</label>
            <input id="feeling-radio-2" value="2" type="radio" name="feelings-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="feeling-radio-3">3</label>
            <input id="feeling-radio-3" value="3" type="radio" name="feelings-radios" onClick={(e)=> setInputValue(e.target.value)}/>
            <label htmlFor="feeling-radio-4">4</label>
            <input id="feeling-radio-4" value="4" type="radio" name="feelings-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="feeling-radio-5">5</label>
            <input id="feeling-radio-5" value="5" type="radio" name="feelings-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <button onClick = {()=>nextButton()}>Next</button>
        </div>
    )
}

export default Feelings;
