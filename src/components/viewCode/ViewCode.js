import React, { Component } from 'react';

// syntax highlighters
import SyntaxHighlighter from 'react-syntax-highlighter';
import hljsStyle from 'react-syntax-highlighter/styles/hljs/rainbow';

// components
import Menu from '../reusableComponents/menu/ToggledMenu';

const ViewCodeButton = ({handleMouseDown}) => {
  return (
    <button 
      className='view-code-button'
      onMouseDown={handleMouseDown}
    >
      <div>
        <i className='right' />
      </div>
    </button>
  );
};

export default class ViewCode extends Component {
  render() {
    const RawCode = ({menuVisibility, handleMouseDown}) => {
      let visibility = menuVisibility ? 'show' : 'hide';

      return (
        <div onClick={handleMouseDown} className={'view-code-container ' + visibility}>
          <h1>ryanpaixao.com{this.props.location.pathname}</h1>
          <div style={{fontSize: '16px'}}>
            <SyntaxHighlighter 
              language='javascript' 
              style={hljsStyle}
              useInlineStyles={true}
              showLineNumbers={true}
            >
              {this.props.rawCodeExample}
            </SyntaxHighlighter>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Menu 
          MenuContent={RawCode} 
          MenuButton={ViewCodeButton} 
          classname={''} 
        />
      </div>
    );
  }
}
