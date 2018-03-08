import React from 'react';

// Images
const linkedinLogo = require('../../assets/images/linkedin_logos/White/Logo-White-28px-R.png');
const githubLogo = require('../../assets/images/github_logos/PNG/GitHub-Mark-Light-32px.png');
const twitterLogo = require('../../assets/images/twitter_logos/Twitter_Logo_WhiteOnImage/Twitter_Logo_WhiteOnImage.png');

const Footer = (props) => {
  let urlIsRoot = props.match.isExact ? {display: 'none'} : {};

  return (
    <footer style={urlIsRoot}>
      <nav>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ryanpaixao/">
              <img
                src={linkedinLogo}
                alt="LinkedIn logo"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/ryanpaixao">
              <img
                src={githubLogo}
                alt="Github logo"
              />
            </a>
          </li>
          <li style={{width: "44px"}}>
            <a href="https://twitter.com/thecounthimself">
              <img
                src={twitterLogo} 
                alt="Twitter logo" 
                style={{height: "100%", width: "100%"}}
              />
            </a>
          </li>          
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
