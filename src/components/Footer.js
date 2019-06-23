import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
  render() {

    const footerIcon = {color: '#FFFFFF', fontSize: '1.5rem', margin: '10px'};
    const heartIcon = {color: '#AB7C94', fontSize: '1.2rem', marginRight: '5px', marginLeft: '5px'};

    return(
      <div className="footer">
        <div className="fotter-icons">
          <a href="https://github.com/MeckenS">
            <FontAwesomeIcon
              style={footerIcon}
              icon={faGithub}
            />
          </a>
          <a href="https://www.linkedin.com/in/mecken-swyter-a6558b187/">
            <FontAwesomeIcon
              style={footerIcon}
              icon={faLinkedin}
            />
          </a>
          <p> Made with
            <FontAwesomeIcon
              style={heartIcon}
              icon={faHeart} />
            and
            <FontAwesomeIcon
              style={heartIcon}
              icon={faReact} />
            in the Mountains of Western Maryland
          </p>
        </div>
      </div>
    );
  }
};

export default Footer;
