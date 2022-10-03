import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//import react-redux
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const feedbackTemplate = {
    feeling: 1,
    understanding: 1,
    support: 5,
    comments: 'These are comments',
}



// reducers
const feedbackReducer = (state = {}, action) => {
    let updatedFeedback = {...state};

    if(action.type === 'ADD_FEELING'){
        console.log('FEELING update:', action.payload);
        updatedFeedback.feeling = action.payload;
        return updatedFeedback;
    } else if(action.type === 'ADD_UNDERSTANDING'){
        console.log('UNDERSTANDING update:', action.payload);
        updatedFeedback.understanding = action.payload;
        return updatedFeedback;
    } else if(action.type === 'ADD_SUPPORT'){
        console.log('SUPPORT update:', action.payload);
        updatedFeedback.support = action.payload;
        return updatedFeedback;
    } else if(action.type === 'ADD_COMMENTS'){
        console.log('COMMENTS update:', action.payload);
        updatedFeedback.comments = action.payload;
        return updatedFeedback;
    } else if (action.type === 'CLEAR_FEEDBACK'){
        updatedFeedback = {};
    return updatedFeedback;
    } else{
        return state;
    } 
}




// setup store
const storeInstance = createStore(
    combineReducers({
        feedback: feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
