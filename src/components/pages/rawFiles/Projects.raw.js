exports.rawCodeExample = `import React from 'react';

// images
import grafana_1 from '../../assets/images/pages/projects/grafana_1.png';
import belugacdn_product from '../../assets/images/pages/projects/belugacdn_product.png';
import iphoto_to_flat from '../../assets/images/pages/projects/iphoto-dirtree-to-flat-tree.png';

const Projects = (props) => {
  return (
    <div className='projects-content'>

      <div className='individual-project'>
        <a href='https://www.belugacdn.com/' target='_blank' rel='noopener noreferrer'>
          <h2>BelugaCDN Product Page and Client UI</h2>
        </a>
        <a href='https://www.belugacdn.com/' target='_blank' rel='noopener noreferrer'>
          <div className='project-img'>
            <img src={belugacdn_product} alt='BelugaCDN product page' />
          </div>
        </a>
        <p>
          I worked 2 years for BelugaCDN. 
          I was responsible for adding new features to the site. 
          As well as troubleshooting any bugs, or errors that might arise. 
          All the while, making sure to keep the site responsive, and cross-browser accessible.
          I worked on both the product site, and the client UI. 
          <br /><br />
          For the product site I created widgets/animations such as the typing text animation, 
          the with/without cdn toggled map, 
          the “Compare” price slider, 
          and the “Plans & Pricing” modal popup. 
          For the client UI I would connect existing backend API requests/rules, 
          and add them to the UI. 
          Giving users an intuitive, easy to use graphical interface. 
        </p>
      </div>

      <div className='individual-project'>
        <a href='https://github.com/belugacdn/grafana-belugacdn-app' target='_blank' rel='noopener noreferrer'>
          <h2>Grafana-belugaCDN plugin</h2>
        </a>
        <a href='https://github.com/belugacdn/grafana-belugacdn-app' target='_blank' rel='noopener noreferrer'>
          <div className='project-img'>
            <img src={grafana_1} alt='grafana dashboard' />
          </div>
        </a>
        <p>
          <a href='https://grafana.com/' target='_blank' rel='noopener noreferrer'>Grafana</a> is an open-source tool, 
          that helps users easily create, and edit dashboards. 
          Dashboards that display charts based on specific metrics. 
          <br /><br />
          I created a Grafana plugin for BelugaCDN clients to use. 
          The plugin allows the clients to use their own metrics data from their individual accounts, 
          and display it in a Grafana dashboard.
        </p>
      </div>

      <div className='individual-project'>
        <a href='https://github.com/ryanpaixao/iphoto-dirtree-to-flat-tree' target='_blank' rel='noopener noreferrer'>
          <h2>Iphoto Directory Structure to Flat Tree</h2>
        </a>
        <a href='https://github.com/ryanpaixao/iphoto-dirtree-to-flat-tree' target='_blank' rel='noopener noreferrer'>
          <div className='project-img'>
            <img src={iphoto_to_flat} alt='iphoto to flat tree bash script output' />
          </div>
        </a>
        <p>
          I created a bash script to convert the directory tree structure, 
          and image files created by iphoto in to a single, flat directory structure. 
          <br /> <br />
          This is useful for people who no longer use iphoto, 
          and want to more easily view their old photos on a Linux computer. 
          It copies the old files in to a flattened version of the directory tree structure created by iphotos. 
          It gives each file a unique name based on it's location in the original directory structure.
        </p>
        <br /><br />
        <p style={{color: '#7AFFFD'}}>For example: <br /> <br /></p>
        <p className='note'>
          "/home/guest/Masters/2017/04/23/20170423-123456/photo_5.jpg" 
          <br /><br />
          Becomes -> 
          <br /><br />
          "/home/guest/Pictures/2017-04-23-20170423-123456-photo_5.jpg"
        </p>
      </div>

    </div>
  )
}

export default Projects;
`;