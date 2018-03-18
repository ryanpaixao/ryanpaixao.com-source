import React, { Component } from 'react';

// import svg sprite
import skillSprites from '../../assets/images/icons/skills/skills_svg_sprite.svg';

const skillsObj = {
'Frontend Languages': ['Javascript', 'HTML5', 'CSS3'],
'Backend Languages': ['Node.js', 'Python 2.x', 'Python 3.x'],
'Frameworks & Libraries': ['React.js', 'Jquery', 'Bootstrap'],
'Build Tools & Package Managers': ['NPM', 'Bower', 'Brunch', 'Webpack'],
'Task & Project Management': ['Jira', 'Git', 'Github', 'Dropbox', 'Slack'],
'Testing Suites & Libraries': ['Mocha', 'Enzyme', 'JSDOM', 'Chai'],
'Virtualization': ['Vagrant', 'VirtualBox', 'Docker'],
'Testing Styles': ['TDD', 'BDD', 'Unit Testing'],
'Operating Systems': ['Linux', 'Windows']
}

const spriteNames = {
  'Frontend Languages': '#computer-1',
  'Backend Languages': '#browser',
  'Frameworks & Libraries': '#drawing',
  'Build Tools & Package Managers': '#connection',
  'Task & Project Management': '#group',
  'Virtualization': '#browser-1',
  'Operating Systems': '#cogwheel',
  'Testing Suites & Libraries': '#internet',
  'Testing Styles': '#computer'
}

class IndividualSkillItem extends Component {
  render() {
    return (
      <li>
        {this.props.skill} 
      </li>
    )
  }
}

class IndividualSkill extends Component {
  constructor(props) {
    super(props);

    this.displaySkills = this.displaySkills.bind(this);
  }

  displaySkills() {
    return (
      this.props.skillValues.map(function(skill, index) {
        let key = 'individual_skill_' + index.toString(); 

        return <IndividualSkillItem skill={skill} key={key} />;
      })
    );
  }

  render() {
    return (
      <div className='individual-skill'>
        <svg className='icon'>
          <use xlinkHref={skillSprites + this.props.spriteName}></use>
        </svg>
        <h2>{this.props.skill}</h2>
        <br />
        <div  style={{textAlign: 'left'}}>
          {this.displaySkills()}
        </div>
      </div>
    )
  }
}

class Skills extends Component {
  constructor(props) {
    super(props);

    this.displaySkills = this.displaySkills.bind(this);
  }

  displaySkills() {
    return (
      Object.keys(skillsObj).map(function(skill, index) {
        let key = 'skill_' + index.toString(); 

        return <IndividualSkill 
          skill={skill} 
          skillValues={skillsObj[skill]} 
          spriteName={spriteNames[skill]}
          key={key} 
        />;
      })
    );
  }

  render() {
    return (
      <div className='skills-content'>
        <div className='skills-header-title'>
          <h1>Skills</h1>
        </div>
        <div className='skills-body'>
          {this.displaySkills()}
        </div>
        <div style={{textAlign: 'center', marginTop: '30px', fontSize: '16px', marginBottom: '-40px'}}>
          <p>Icons made by DinosoftLabs from <a href='www.flaticon.com'>www.flaticon.com</a></p>
        </div>
      </div>
    );
  }
}

export default Skills;
