import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app wrapper">

          <Route path='/' component={Header} />

          <Switch>
            <Route exact path='/' render={ (routerProps) => <Homepage routerProps={routerProps} /> } />
            <Route exact path='/Skills' render={ (routerProps) => <Skills routerProps={routerProps} /> } />
            <Route exact path='/Blog' render={ (routerProps) => <Blog routerProps={routerProps} /> } />
            <Route exact path='/About' render={ (routerProps) => <About routerProps={routerProps} /> } />
            <Route exact path='/Contact' render={ (routerProps) => <Contact routerProps={routerProps} /> } />
            <Route path='/404' render={ (routerProps) => <NotFound routerProps={routerProps} /> } />
            <Redirect to='/404' />
          </Switch>

          <Route path='/' component={Footer} />
                
        </div>
      </Router>
    );
  }
}

export default App;
