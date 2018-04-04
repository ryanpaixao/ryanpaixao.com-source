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
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import BgImage from './components/bgImage/BgImage';
import ViewCode from './components/viewCode/ViewCode';
import rawCode from './components/pages/rawFiles/rawFilesImport';

// import individual page components
import Homepage from './components/pages/HomePage';
import Skills from './components/pages/Skills';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app wrapper">

          <Route path='/' component={Header} />
          <Route path='/' component={BgImage} />

          <div className='content-router'>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Skills' component={Skills} />
              <Route exact path='/Blog' component={Blog} />
              <Route exact path='/Projects' component={Projects} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Contact' component={Contact} />
              <Route path='/404' component={NotFound} />
              <Redirect to='/404' />
            </Switch>
           
            <Route 
              path='/' 
              render={
                (props) => { 
                  let rc = rawCode[props.location.pathname] === undefined 
                    ? rawCode["/NotFound"].rawCodeExample 
                    : rawCode[props.location.pathname].rawCodeExample;

                  return <ViewCode filename={props.location.pathname} rawCodeExample={rc}  {...props}/>
                }
              } 
            />
          </div>

          <Route path='/' component={Footer} />
                
        </div>
      </Router>
    );
  }
}

export default App;
