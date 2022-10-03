import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Understanding(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState('');
    console.log("Understanding Value:", inputValue);

    // dispatch to redux and route to next view
    function nextButton(){
        if(inputValue === ''){
            alert('Please rate your understanding today before continuing.');
        } else{
        let action = {
            type: 'ADD_UNDERSTANDING',
            payload: inputValue
        }
        dispatch(action);
        history.push('/support');
        }
    }

    return (
        <div id="understanding-view" className="view-window">
            <h1>Understanding</h1>
            <h2>How are you feeling today?</h2>
            <div className="scoring">
                <h3 className="low-score">1<br/>I'm totally lost</h3>
                <h3 className="dashes">-</h3>
                <h3 className="dashes">-</h3>
                <h3 className="dashes">-</h3>
                <h3 className="high-score">5<br/>I could teach this!</h3>
            </div>
            <div className="radio-button-spread">
                <div className="label-w-button">
                    <label htmlFor="understanding-radio-1">1</label>
                    <input id="understanding-radio-1" value="1" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="understanding-radio-2">2</label>
                    <input id="understanding-radio-2" value="2" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="understanding-radio-3">3</label>
                    <input id="understanding-radio-3" value="3" type="radio" name="understanding-radios" onClick={(e)=> setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="understanding-radio-4">4</label>
                    <input id="understanding-radio-4" value="4" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="understanding-radio-5">5</label>
                    <input id="understanding-radio-5" value="5" type="radio" name="understanding-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
            </div>    
            <button onClick = {()=>nextButton()}>Next</button>
        </div>
    )
}

export default Understanding;
