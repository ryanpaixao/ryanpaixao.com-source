import React, { Component } from 'react';

// components
import Menu from '../reusableComponents/menu/ToggledMenu';

// syntax highlighters
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import highlighterStyle from 'react-syntax-highlighter/styles/prism/xonokai';

registerLanguage('jsx', jsx);

const ViewCodeButton = ({handleMouseDown}) => {
  return (
    <button 
      className='view-code-button'
      aria-label='show page react code'
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
          <SyntaxHighlighter 
            language='jsx' 
            style={highlighterStyle}
          >
            {this.props.rawCodeExample}
          </SyntaxHighlighter>
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
