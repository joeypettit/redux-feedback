import { useHistory } from "react-router-dom";
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Comments(){
    // assign history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();
    // assign last selected radio button value
    const [inputValue, setInputValue] = useState();
    console.log("Comments Value:", inputValue);

    // dispatch to redux and route to next view
    function nextButton(){
        let action = {
            type: 'ADD_COMMENTS',
            payload: inputValue
        }
        dispatch(action);
        history.push('/review');
    }

    return (
        <div id="comment-view">
            <h1>Comments</h1>
            <label htmlFor="comments-in">Your comments: </label>
            <textarea id="comments-in" type="text" name="comments-input" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick = {()=>nextButton()}>Next</button>
        </div>
    )
}

export default Comments;