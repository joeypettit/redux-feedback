import React from 'react';
import axios from 'axios';
import './App.css';

// import router functions
import { HashRouter as Router, Route, Switch } from "react-router-dom";


// Import Components
import Comments from '../Feedback-views/Comments/Comments';
import Feelings from '../Feedback-views/Feeling/Feeling';
import ReviewFeedback from '../Feedback-views/ReviewFeedback/ReviewFeedback';
import Support from '../Feedback-views/Support/Support';
import Understanding from '../Feedback-views/Understanding/Understanding';
import Header from './Header/Header';
import Welcome from '../Feedback-views/Welcome/Welcome';

function App() {
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

      </div>
    </Router>
  );
}

export default App;
