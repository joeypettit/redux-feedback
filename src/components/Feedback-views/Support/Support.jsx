import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';



function Support(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState();
    console.log("Support Value:", inputValue);

    function nextButton(){
        let action = {
            type: 'ADD_SUPPORT',
            payload: inputValue
        }
        dispatch(action);
        history.push('/comments')
    }

    return (
        <div>
            <h1>Support</h1>
            <label htmlFor="support-radio-1">1</label>
            <input id="support-radio-1" value="1" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="support-radio-2">2</label>
            <input id="support-radio-2" value="2" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="support-radio-3">3</label>
            <input id="support-radio-3" value="3" type="radio" name="support-radios" onClick={(e)=> setInputValue(e.target.value)}/>
            <label htmlFor="support-radio-4">4</label>
            <input id="support-radio-4" value="4" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <label htmlFor="support-radio-5">5</label>
            <input id="support-radio-5" value="5" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
            <button onClick = {()=>nextButton()}>Next</button>
        </div>
    )

}

export default Support;
