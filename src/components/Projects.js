import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import techreup from './images/techreup.jpg';
import memoryGame from './images/memorygame.jpg';
import myReads from './images/myreads.jpg';
import pizzaPlaces from './images/pizzaplaces.jpg';
import arcadeGame from './images/arcadegame.jpg';
import ebayLabel from './images/ebaylabel.jpg';
import jasmineTester from './images/jasminetester.jpg';
import outOfStock from './images/outofstock.jpg';

class Projects extends Component {
  render() {

  const projects = [
    {
      image: techreup,
      title: 'WordPress Site',
      description: 'An ecommerce site built with WordPress and Woocommerce',
      buttonText: 'Visit Site',
      linkTo: 'https://techreup.com/'
    },
    {
      image: memoryGame,
      title: 'Memory Game',
      description: 'A memory game built with Vanilla JavaScript, HTML, & CSS',
      buttonText: 'View on GitHub',
      linkTo: 'https://github.com/MeckenS/fend-project-memory-game'
    },
    {
      image: myReads,
      title: 'Book Tracking App',
      description: 'This is a book tracking app built with React.',
      buttonText: 'View on GitHub',
      linkTo: 'https://github.com/MeckenS/reactnd-project-myreads-starter'
    },
    {
      image: pizzaPlaces,
      title: 'The Neighborhood Map',
      description: 'Built with React using the Google Maps, & FourSquare APIs',
      buttonText: 'View on GitHub',
      linkTo: 'https://github.com/MeckenS/map'
    },
    {
      image: arcadeGame,
      title: 'Frogger Copy',
      description: 'A frogger clone built with JavaScript & Canvas',
      buttonText: 'View on GitHub',
      linkTo: 'https://github.com/MeckenS/frontend-nanodegree-arcade-game'
    },
    {
      image: ebayLabel,
      title: 'eBay Item QR Code Label',
      description: 'A chrome extension built with the dymo label JavaScript framework',
      buttonText: 'Coming Soon',
      linkTo: 'https://github.com/MeckenS/fend-project-memory-game'
    },
    {
      image: jasmineTester,
      title: 'JavaScript Jasmine Tester',
      description: 'A simple Jasmine testing suite was built to test JavaScript code',
      buttonText: 'View on GitHub',
      linkTo: 'https://github.com/MeckenS/frontend-nanodegree-feedreader'
    },
    {
      image: outOfStock,
      title: 'Out of Stock Plug In',
      description: 'Co-created a WordPress plug-in that searches the eBay API',
      buttonText: 'See Example',
      linkTo: 'https://techreup.com/product/oem-apple-iphone-6s-plus-volume-lock-assembly-rose-gold-821-00151-a/'
    }
  ];

  const cards = projects.map((i, index) =>
    <Card key={index} className="project-card">
      <Card.Img style={{height: '180px'}}variant="top" src={i.image} />
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>
          {i.description}
        </Card.Text>
        <a href={i.linkTo}>
          <Button className="purple-button"variant="primary">{i.buttonText}</Button>
        </a>
      </Card.Body>
    </Card>
  );

    return(
      <section id="projects" className="projects-container">
        {cards}
      </section>
    );
  }
};


export default Projects;
