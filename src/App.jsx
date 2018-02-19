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
import Blog from './components/pages/blog.jsx';
import About from './components/pages/about.jsx';
import Contact from './components/pages/contact.jsx';

const App = () => {
  return (
    <Router>
      <div className="container col-sm-12 ">
        <div className="row">
          <Header />
          
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Skills' component={Skills} />
            <Route exact path='/Blog' component={Blog} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />

          <Footer />
              
        </div>
      </div>
    </Router>
  );
}

export default App;
