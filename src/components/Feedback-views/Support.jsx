import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';



function Support(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState('');
    console.log("Support Value:", inputValue);

    // dispatch to redux and route to next view
    function nextButton(){
        if(inputValue === ''){
            alert('Please rate how supported you felt today before continuing.');
        } else{
        let action = {
            type: 'ADD_SUPPORT',
            payload: inputValue
        }
        dispatch(action);
        history.push('/comments');
        }
    }

    return (
        <div className="view-window">
            <h1>Support</h1>
            <h2>How are you feeling today?</h2>
            <div className="scoring">
                <h3 className="low-score">1<br/>I don't feel <br/> supported at all.</h3>
                <h3 className="dashes">-</h3>
                <h3 className="dashes">-</h3>
                <h3 className="dashes">-</h3>
                <h3 className="high-score">5<br/>I feel incredibly <br/> supported!</h3>
            </div>
            <div className="radio-button-spread">
                <div className="label-w-button">
                    <label htmlFor="support-radio-1">1</label>
                    <input id="support-radio-1" value="1" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="support-radio-2">2</label>
                    <input id="support-radio-2" value="2" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="support-radio-3">3</label>
                    <input id="support-radio-3" value="3" type="radio" name="support-radios" onClick={(e)=> setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">
                    <label htmlFor="support-radio-4">4</label>
                    <input id="support-radio-4" value="4" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
                <div className="label-w-button">        
                    <label htmlFor="support-radio-5">5</label>
                    <input id="support-radio-5" value="5" type="radio" name="support-radios" onClick={(e)=>setInputValue(e.target.value)}/>
                </div>
            </div>
            <button onClick = {()=>nextButton()}>Next</button>
        </div>
    )

}

export default Support;
