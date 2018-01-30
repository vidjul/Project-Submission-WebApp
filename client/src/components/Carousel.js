import React, { Component } from 'react';
import './Carousel.css';
import {Link} from 'react-router-dom';


console.log("Passed");
class Carousel extends Component {

	item = []

	render() {
        return (

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  
  <div class="carousel-inner">
    <div class="item active">
      <img src={require('../pictures/projet1.jpg')} alt="Projet 1"/>
      <div class="carousel-caption">
        <h3>CONCEPTION ET DIMENSIONNEMENT D’UN BERCEAU MOTEUR EN MATÉRIAUX COMPOSITES</h3>
        <p>PROJET DE FIN D’ÉTUDES EN 5E ANNÉE, MAJEURE “MÉCANIQUE NUMÉRIQUE ET MODÉLISATION”, ANNÉE 2013-2014</p>
      </div>
    </div>

    <div class="item">
      <img src={require('../pictures/projet2.jpg')} alt="Projet 2"/>
      <div class="carousel-caption">
        <h3>OBJETS CONNECTÉS : SURVEILLANCE DES PERSONNES VULNÉRABLES</h3>
        <p>PROJET D’INNOVATION INDUSTRIELLE DE 5ÈME ANNÉE, MAJEURE INFORMATIQUE, BIG DATA ET OBJETS CONNECTÉS 2014-2015</p>
      </div>
    </div>

    <div class="item">
      <img src={require('../pictures/projet3.jpg')} alt="Projet 3"/>
      <div class="carousel-caption">
        <h3>ÉTUDES DE DONNÉES AMF</h3>
        <p>PROJET 2015-2016 DE 5E ANNÉE DU CURSUS D’ÉLÈVE INGÉNIEUR DE L’ESILV, PROMO 2016, DANS LE CADRE D’UN PROJET DE PARTENARIAT</p>
      </div>
    </div>
  </div>

  
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    );
}
}
export default Carousel;