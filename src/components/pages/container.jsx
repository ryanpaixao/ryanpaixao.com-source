import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// standard components
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';

// different page components
import Homepage from './homePage';
import Skills from './skills';
import Blog from './blog';
import About from './about';
import Contact from './contact';

const Container = () => {
  return (
    <Router>
      <div className="App">
        <div className="container col-md-12">
        
          <div className="row">
            <Header />
          </div>
          
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 left-bg-image" />

              <div className="col-md-4 route-body">
                <div className="row">
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/Skills' component={Skills} />
                  <Route exact path='/Blog' component={Blog} />
                  <Route exact path='/About' component={About} />
                  <Route exact path='/Contact' component={Contact} />
                </div>
              </div>

              <div className="right-bg-image col-md-4" />
            </div>
          </div>

          <div className="row">
            <Footer />
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default Container;
