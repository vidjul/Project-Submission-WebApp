import React from 'react';
import { Link } from 'react-router-dom';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

const items = [
  {
    src: './pictures/project1.jpg',
    altText: 'project1',
    captionHeader: 'BermudZer : pricing d’options bermudéennes',
    caption: 'Projet d’Innovation Industrielle de 5ème année, Majeure Ingénierie Financière 2014-2015'
  },
  {
    src: './pictures/project2.jpg',
    altText: 'project2',
    captionHeader: 'Application mobile temps réel pour améliorer la qualité de service de transports en commun',
    caption: 'Projet d’Innovation Industrielle de 5ème année, Majeure Informatique, Big Data et Objets connectés 2014-2015'
  },
  {
    src: './pictures/project3.jpg',
    altText: 'Project3',
    captionHeader: 'ID-cam : accessibilité numérique pour les non-voyants et mal-voyants',
    caption: 'Projet 2017-2018 de 5e année du cursus d’élève ingénieur de l’ESILV, promo 2018'
  }
];

const styles = {
  carousel: {
    position: "relative",
  }
}

console.log("Passed");
export default class Caroussel extends React.Component {


  render() {

    const slides = items.map((item) => {
      return (
        <Link to = "#">
          <Slide
            media={<img src={item.src} />}
            title={item.captionHeader}
            subtitle={item.caption}
            key={item.src} />
        </Link>
      );
    });

    return (
      <div>
        <AutoRotatingCarousel mobile={true} style={styles.carousel} open>
          {slides}
        </AutoRotatingCarousel>
      </div>
    )
  }

}
