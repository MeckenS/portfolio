import React, { Component } from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faCss3Alt, faReact, faHtml5, faWordpress } from '@fortawesome/free-brands-svg-icons';

class Skills extends Component {
  render() {

    const codeIcon = {color: '#2c3e50', fontSize: '4rem', margin: '30px'};

    return(
      <div className="skills-container">
        <h3>Some of My Skills</h3>
        <div className="skills-icon-container">
          <FontAwesomeIcon
            style={codeIcon}
            icon={faJsSquare} />
          <FontAwesomeIcon
            style={codeIcon}
            icon={faCss3Alt} />
          <FontAwesomeIcon
            style={codeIcon}
            icon={faReact} />
          <FontAwesomeIcon
            style={codeIcon}
            icon={faHtml5} />
          <FontAwesomeIcon
            style={codeIcon}
            icon={faWordpress} />
        </div>
      </div>
    );
  }
};

export default Skills;
