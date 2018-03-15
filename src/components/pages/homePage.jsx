import React, { Component } from 'react';

// components
import TransitionBoiler from '../reusableComponents/cssTransitions/transitionBoiler';

const endColor = '#f0f5f5'; // '#d1e0e0'; // '#000033'; // '#000066', // #4006e2',

const helloParams = [
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
    const bodyText = <p>
      I'm Ryan Paixao.<br/> A Frontend Web Developer from South Florida.<br/><br/> Find out more <a href='/About'>about</a> me.
    </p>;

    return (
      <div className='content' style={{textAlign: 'center'}}>
        <div className='header-title'>
          <TransitionBoiler 
            styleParameters={helloParams} 
            text={'Hello World!'} 
            sharedDefaults={{}}
          />
        </div>
        
        <div className=''>
          <TransitionBoiler 
            styleParameters={bodyTextParams} 
            text={bodyText} 
            sharedDefaults={{}} 
          />
        </div>
      </div>
    );
  }
}

export default Homepage;
