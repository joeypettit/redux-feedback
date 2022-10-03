import React from 'react';
import axios from 'axios';
import './App.css';
import { useHistory } from 'react-router-dom';

// import router functions
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Comments from '../Feedback-views/Comments';
import Feelings from '../Feedback-views/Feeling';
import ReviewFeedback from '../Feedback-views/ReviewFeedback';
import Support from '../Feedback-views/Support';
import Understanding from '../Feedback-views/Understanding';
import Header from './Header';
import Welcome from '../Feedback-views/Welcome';
import Submitted from '../Feedback-views/Submitted';




function App() {
  // call functions and store as variables
  const history = useHistory();


  return (
    <Router>
      <div className='App'>
      
        <Header />
        
        {/* ROUTES */}
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path='/feeling/'>
          <Feelings />
        </Route>
        <Route path='/understanding/'>
          <Understanding />
        </Route>
        <Route path='/support'>
          <Support />
        </Route>
        <Route path='/comments'>
          <Comments />
        </Route>
        <Route path='/review'>
          <ReviewFeedback />
        </Route>
        <Route path='/submitted'>
          <Submitted />
        </Route>
        
      </div>
    </Router>
    
  );
}

export default App;
