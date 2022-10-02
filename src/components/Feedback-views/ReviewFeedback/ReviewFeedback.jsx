import {useSelector} from 'react-redux';
import axios from 'axios';

function ReviewFeedback(){
    const finalFeedback = useSelector(store => store.feedback);

    function submitFeedback(){
        // axios({
        //     method: 'POST',
        //     url: '/feedback/',
        //     payload: finalFeedback
        // }).then(()=>{
        //     // route to next page

        // }).catch(error => console.log('Error with POST', error));
    }
    
    return(
        <div id="review-view">
            <h1>Review Your Feedback</h1>
            <h3 className="review-h3">Feelings: {finalFeedback.name}</h3>
            <h3 className="review-h3">Understanding: {finalFeedback.understanding}</h3>
            <h3 className="review-h3"> Support: {finalFeedback.support}</h3>
            <h3 className="review-h3"> Comments: {finalFeedback.comments}</h3>
            <button id="submit-btn" onClick={()=>submitFeedback()}>Submit</button>
        </div>
    )
}

export default ReviewFeedback;