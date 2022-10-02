import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Understanding(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState();
    console.log("Understanding Value:", inputValue);

    function nextButton(){
        let action = {
            type: 'ADD_UNDERSTANDING',
            payload: inputValue
        }
        dispatch(action);
        history.push('/support')
    }

    return (
        <div id="understanding-view">
            <h1>Understanding</h1>
            <label htmlFor="understanding-radio-1">1</label>
            <input id="understanding-radio-1" value="1" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="understanding-radio-2">2</label>
            <input id="understanding-radio-2" value="2" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="understanding-radio-3">3</label>
            <input id="understanding-radio-3" value="3" type="radio" name="understanding-radios" onClick={(e)=> setInputValue(e.target.value)}/>
            <label htmlFor="understanding-radio-4">4</label>
            <input id="understanding-radio-4" value="4" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="understanding-radio-5">5</label>
            <input id="understanding-radio-5" value="5" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <button onClick = {()=>nextButton()}>Next</button>
        </div>
    )
}

export default Understanding;
