import React, { Component } from 'react';
import './components/components.css';
import * as emailjs from 'emailjs-com';

import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import ContactHero from './components/ContactHero';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';



class App extends Component {

  state = {
    show: false,
    senderName: '',
    senderEmail: '',
    senderMessage: ''
  };

  //methods for opening and closing contact modal
  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({
      show: false,
      senderName: '',
      senderEmail: '',
      senderMessage: ''
    });
  };


  //methods to change state for contact form and submit info
  nameChange = (event) => {
    this.setState({ senderName: event.target.value })
  }

  emailChange = (event) => {
    this.setState({ senderEmail: event.target.value })
  }

  messageChange = (event) => {
    this.setState({ senderMessage: event.target.value })
  }

  submitMessage = (e) => {
    e.preventDefault();
    emailjs.send('mailgun', 'portfolio_contact_form', {senderName: this.state.senderName, senderEmail: this.state.senderEmail, message: this.state.senderMessage}, 'user_M67tOuYYNJK27bGijHVcY')
      .then((response) => {
         this.setState({
           show: false,
           senderName: '',
           senderEmail: '',
           senderMessage: ''
         })
      }, (err) => {
         console.log('FAILED...', err);
      });
  };


  render() {
    return (
      <div>
        <Navigation
          handleShow={this.handleShow}
        />
        <Projects />
        <Skills />
        <About />
        <ContactHero
          handleShow={this.handleShow}
        />
        <ContactModal
          show={this.state.show}
          handleShow={this.handleShow}
          handleHide={this.handleHide}
          nameChange={this.nameChange}
          emailChange={this.emailChange}
          messageChange={this.messageChange}
          submitMessage={this.submitMessage}
        />
        <Footer />
      </div>
    );
  }
};

export default App;
