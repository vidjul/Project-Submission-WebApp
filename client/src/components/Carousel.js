import React, { Component } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: './pictures/project1.jpg' ,
    altText: 'project1',
    captionHeader: 'BermudZer : pricing d’options bermudéennes',
    caption: 'Projet d’Innovation Industrielle de 5ème année, Majeure Ingénierie Financière 2014-2015'
  },
  {
    src: './pictures/project2.jpg',
    altText: 'project2',
    captionHeader:'Application mobile temps réel pour améliorer la qualité de service de transports en commun',
    caption: 'Projet d’Innovation Industrielle de 5ème année, Majeure Informatique, Big Data et Objets connectés 2014-2015'
  },
  {
    src: './pictures/project3.jpg',
    altText: 'Project3',
    captionHeader:'ID-cam : accessibilité numérique pour les non-voyants et mal-voyants',
    caption: 'Projet 2017-2018 de 5e année du cursus d’élève ingénieur de l’ESILV, promo 2018'
  }
];


console.log("Passed");
class Caroussel extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem className="container"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
         
          <div className="middle">
             <CarouselCaption className="text" captionText={item.caption} captionHeader={item.captionHeader} />
         </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
    } 

  }

  export default Caroussel;
