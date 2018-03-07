import React, { Component } from 'react';

// components
import TransitionBoiler from '../reusableComponents/cssTransitions/transitionBoiler';

const sharedDefaults = {
  fontFamily: '"Nunito", serif',
  fontWeight: 600,
  fontSize: '50px'
};

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
    valueEnd: '#4006e2',
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
    valueEnd: '#4006e2',
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
    const bodyText = <p>
      Hello world! I'm a Frontend Web Developer from South Florida.
    </p>;

    return (
      <div className='offset-md-4 col-md-4 offset-sm-3 col-sm-6 col-xs-12 route-body'>
        <div style={{display: 'flex'}}>
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
