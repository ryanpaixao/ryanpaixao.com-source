import React from 'react';

const About = () => {
  return (
    <div className='content'>

      <div className='text-body'>
        <h1 className='header-title'>About Me</h1>
        <p>
          I'm a programmer who loves what I do. 
          I get great enjoyment from creating something new. 
          Starting with an empty directory, an empty file, a blank page, and ending up with a harmonious collaboration. 
          It’s a great feeling. To have an idea evolve, and become something tangible. 
        </p>

        <br/>

        <p>
          I am a life long learner. 
          I love to learn, figure out how things work, why tasks are done the way they are, and if there’s a better way to get it done.
        </p>

        <br/>
        
        <p>
          I am very grateful for being alive in a period of time where, so much of humanity’s collective information is so readily accessible.  
          That different minds from different parts of the world can collaborate to create. 
          It is a powerful thing.
        </p>
      </div>

      <div className='text-body'>
        <h1 className='header-title'>About The Site</h1>
        <p>
          I used <a href='https://github.com/facebook/create-react-app'>create-react-app</a> to make this site. 
          I find that it's the quickest, and easiest route to a finished Reactjs product.
        </p>
        <br />
        <p>
          For animations, <a href='https://github.com/reactjs/react-transition-group'>react-transition-group</a> was used.
        </p>
        <br />
        <p>
          Feel free to check out the source code for yourself at <a href='https://github.com/ryanpaixao/ryanpaixao.com-source'>ryanpaixao-source</a>
        </p>
      </div>
      
    </div>
  );
}

export default About;
