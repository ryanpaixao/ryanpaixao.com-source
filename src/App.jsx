import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// import styling
import 'reset-css/reset.css';
import './css/App.css';

// import page framework components
import Header from './components/headerComponent/header.jsx';
import Footer from './components/footerComponent/footer.jsx';

// import individual page components
import Homepage from './components/pages/homePage.jsx';
import Skills from './components/pages/skills.jsx';
import Blog from './components/pages/blog.jsx';
import About from './components/pages/about.jsx';
import Contact from './components/pages/contact.jsx';
import NotFound from './components/pages/notFound.jsx';

const App = () => {
  return (
    <Router>
      <div className="app wrapper">

        <Route path='/' component={Header} />

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Skills' component={Skills} />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>

        <Route path='/' component={Footer} />
              
      </div>
    </Router>
  );
}

export default App;
