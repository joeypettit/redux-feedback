import { useHistory } from "react-router-dom";

function Comments(){
    const history = useHistory();
    return (
        <div id="comment-view">
            <h1>Comments</h1>
            <button onClick = {()=>history.push('/review')}>Next</button>
        </div>
    )
}

export default Comments;