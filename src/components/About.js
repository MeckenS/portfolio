import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import profile from './images/profileimage.jpeg';
import udacity from './images/udacity.svg';

class About extends Component {
  render() {

    const codeIcon = {color: '#AB7C94', fontSize: '2.5rem', margin: '20px 20px 0px 20px'};

    return(
      <div id="about" className="profile-container">
        <Jumbotron style={{paddingBottom: '32px'}}>
          <img
            className="profile-image"
            src={profile}
            alt="Mecken"
          />
          <h1 style={{fontSize: '2rem', marginBottom: '30px'}}>Hey, It's Mecken!</h1>
          <div className="about-message">
            <p>
            A front end web developer with a nano degree from Udacity, a program co-created with Google, GitHub, and At&t to insure students are taught the latest technologies, best practices, and are job ready when finished.
            </p>
            <p>
            I’m well versed in HTML, CSS, and JavaScript. I’ve developed multiple applications using React, in fact, this very portfolio site was built using React. Additionally, I’m quite familiar with ES6, responsive design, version control, and accessibility. When the occasion arises as it always does, I can navigate effectively through dev tools, developer documentation, forums such as stackoverflow and good old Google.
            </p>
            <p>
            As a side note I’ve built websites using WordPress with and without Woocommerce. I am also familiar with SEO best practices such as content structure and keyword research, technical seo such as site optimization, structured data, and crawlability. With experience in social media marketing, I managed a Facebook page that has received over 4,000 page likes.
            </p>
          </div>
          <p style={{marginBottom: '0px'}}>
            <a href="https://github.com/MeckenS">
              <FontAwesomeIcon
                style={codeIcon}
                icon={faGithub}
              />
            </a>
            <a href="https://www.freecodecamp.org/fcc3af5f946-5882-4572-9366-5020662d1732">
              <FontAwesomeIcon
                style={codeIcon}
                icon={faFreeCodeCamp}
              />
            </a>
            <a href="https://confirm.udacity.com/4PNLUYA2">
              <img
                className="udacity-logo"
                src={udacity}
                alt="udacity logo"
              />
            </a>
          </p>
        </Jumbotron>
      </div>
    );
  }
};

export default About;
