import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// import styling
import './scss/App.css';

// import page framework components
import Header from './components/headerComponent/header.jsx';
import Footer from './components/footerComponent/footer.jsx';

// import individual page components
import Homepage from './components/pages/homePage.jsx';
import Skills from './components/pages/skills.jsx';
import Experience from './components/pages/experience.jsx';
import About from './components/pages/about.jsx';
import Contact from './components/pages/contact.jsx';

const App = () => {
  return (
    <Router>
      <div className="container col-sm-12 ">
      
        <div className="row">
          <Header />
        </div>
        
        <div className="col-xs-12">
          <div className="row">
            <div className="col-md-4 col-xs-0 left-bg-image" />

            <div className="col-md-4 col-xs-12 route-body">
              <div className="row">
                <Route exact path='/' component={Homepage} />
                <Route exact path='/Skills' component={Skills} />
                <Route exact path='/Experience' component={Experience} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Contact' component={Contact} />
              </div>
            </div>

            <div className="col-md-4 col-xs-0 right-bg-image" />
          </div>
        </div>

        <div className="row">
          <Footer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
