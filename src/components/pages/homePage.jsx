import React, { Component } from 'react';

// components
import TransitionBoiler from '../reusableComponents/cssTransitions/transitionBoiler';

const sharedDefaults = {
  fontFamily: '"Nunito", serif',
  fontWeight: 600,
  fontSize: '50px'
};

const endColor = '#f0f5f5'; // '#d1e0e0'; // '#000033'; // '#000066', // #4006e2',

const ryanParams = [
  {
    jsxName: 'marginLeft',
    cssName: 'margin-left',
    valueStart: '60%',
    valueEnd: '0%',
    duration: 1200,
    ease: 'ease-in-out'
  },
  {
    jsxName: 'opacity',
    cssName: 'opacity',
    valueStart: 0,
    valueEnd: 1,
    duration: 1200,
    ease: 'ease-in-out'
  },
  {
    jsxName: 'color',
    cssName: 'color',
    valueStart: 'white', // #4006e2',
    valueEnd: endColor,
    duration: 1000,
    ease: 'ease-in-out'
  }
];

const paixaoParams = [
  {
    jsxName: 'marginLeft',
    cssName: 'margin-left',
    valueStart: '-3%',
    valueEnd: '3%',
    duration: 700,
    ease: 'ease-in-out'
  },
  {
    jsxName: 'opacity',
    cssName: 'opacity',
    valueStart: 0,
    valueEnd: 1,
    duration: 1200,
    ease: 'ease-in-out'
  },
  {
    jsxName: 'color',
    cssName: 'color',
    valueStart: 'white',
    valueEnd: endColor,
    duration: 1000,
    ease: 'ease-in-out'
  }
];

const bodyTextParams = [
  {
    jsxName: 'opacity',
    cssName: 'opacity',
    valueStart: 0,
    valueEnd: 1,
    duration: 2000,
    ease: 'ease-in-out'
  }
];

class Homepage extends Component {
  render() {
    const bodyText = <p style={{color: '#f0f5f5'}}>
      Hello world! I'm a Frontend Web Developer from South Florida. Find out more <a href='/About'>about</a> me.
    </p>;

    return (
      <div className='offset-md-4 col-md-4 offset-sm-3 col-sm-6 col-xs-12'>
        <div style={{display: 'flex', marginTop: '260px'}}>
          <TransitionBoiler 
            styleParameters={ryanParams} 
            text={'Ryan'} 
            sharedDefaults={sharedDefaults} 
          />
          <TransitionBoiler 
            styleParameters={paixaoParams} 
            text={'Paixao'} 
            sharedDefaults={sharedDefaults} 
          />
        </div>
        
        <TransitionBoiler 
          styleParameters={bodyTextParams} 
          text={bodyText} 
          sharedDefaults={{}} 
        />
        
      </div>
    );
  }
}

export default Homepage;
