import {useSelector} from 'react-redux';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function ReviewFeedback(){
    const history = useHistory();
    const finalFeedback = useSelector(store => store.feedback);
    console.log('finalfeedback is', finalFeedback);


    function submitFeedback(){
        axios({
            method: 'POST',
            url: '/feedback/',
            data: finalFeedback
        }).then(()=>{
            history.push('/submitted/');
            

        }).catch(error => console.log('Error with POST', error));
    }
    
    return(
        <div id="review-view" className="view-window">
            <h1>Review Your Feedback</h1>
            <h3 className="review-h3">Feelings: {finalFeedback.feeling}</h3>
            <h3 className="review-h3">Understanding: {finalFeedback.understanding}</h3>
            <h3 className="review-h3"> Support: {finalFeedback.support}</h3>
            <h3 className="review-h3"> Comments: {finalFeedback.comments}</h3>
            <button id="submit-btn" onClick={()=>submitFeedback()}>Submit</button>
        </div>
    )
}

export default ReviewFeedback;