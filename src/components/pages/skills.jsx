import React, { Component } from 'react';

const skillsObj = {
  "Frontend Languages": ["Javascript", "HTML5", "CSS3"],
  "Backend Languages": ["Python 2.x", "Python 3.x"],
  "Frameworks/Libraries": ["React.js", "Jquery", "Bootstrap"],
  "Package Managers/Build Tools": ["NPM", "Bower", "Brunch", "Webpack"],
  "Task & Project Management": ["Jira", "Git", "Github", "Dropbox", "Slack"],
  "Virtualization": ["Vagrant", "VirtualBox"],
  "Operating Systems": ["Linux", "Windows"],
  "Testing Suites/Libraries": ["Mocha", "Enzyme", "JSDOM", "Chai"],
  "Testing Styles": ["Test-Driven Development", "Behavior-Driven Development", "Unit Testing"]
}

class IndividualSkillItem extends Component {
  render() {
    return (
      <dd>
        - {this.props.skill}
      </dd>
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
        let key = "individual_skill_" + index.toString(); 

        return <IndividualSkillItem skill={skill} key={key} />;
      })
    );
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div style={{padding: "15px"}}>
        <dt>{this.props.skill}</dt>
        {this.displaySkills()}
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
        let key = "skill_" + index.toString(); 

        return <IndividualSkill skill={skill} skillValues={skillsObj[skill]} key={key} />;
      })
    );
  }

  render() {
    return (
      <div className="offset-md-0 col-md-12 offset-sm-3 col-sm-6 col-xs-12 route-body skills-page">
        <div style={{marginLeft: "20px"}}>
          <h1>Skills</h1>
          <div style={{display: "inline-flex"}}>
            {this.displaySkills()}
          </div>        
        </div>
      </div>
    );
  }
}

export default Skills;
