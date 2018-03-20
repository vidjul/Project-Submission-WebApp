import React from 'react';
import {Container,Row,Col} from 'react-grid-system'
import FlatButton from 'material-ui/FlatButton';
console.log("Passed");
class ContainerPULV extends React.Component {
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <h2><b>Hybridation et transversalité</b></h2><br/>
                        <h3><b>Une approche transversale unique</b></h3><br/>
                        <p>Les écoles du Pôle Léonard de Vinci ont développé une transversalité pédagogique qui encourage le décloisonnement des enseignements et permet aux étudiants de travailler en équipes pluridisciplinaires tout en progressant dans leur formation et leurs savoirs numériques.</p>
                        <FlatButton onClick={() => window.location.href="https://www.devinci.fr/le-pole/la-transversalite/"} secondary = {true} size="lg" label = "La transversalité"/>{' '}
                        <FlatButton onClick={() => window.location.href="https://www.devinci.fr/le-pole/chiffres-cles/"} secondary = {true} size="lg" label = 'Les chiffres-clés'/>{' '}
                        <FlatButton onClick={() => window.location.href="https://www.devinci.fr/le-pole/le-projet-leonard-de-vinci/"} secondary = {true} size="lg" label='Le projet'/>{' '}
                        <FlatButton onClick={() => window.location.href="https://www.devinci.fr/programmes/"} secondary = {true} size="lg" label ='Les programmes'/>{' '}
                    </Col>
                    <Col>
                        <h2><b>Les écoles</b></h2><br/>
                        <h3><b>Un campus, quatre écoles</b></h3><br/>
                        <p>Le Pôle Léonard de Vinci, c’est trois écoles à Paris-La Défense : une école d’ingénieurs, une école de management, une école multimédia. En complément, un Institut propose de la formation continue.</p>
                        <FlatButton onClick={() => window.location.href="https://www.iim.fr/"} secondary = {true} size="lg" label = 'IIM'/>{' '}
                        <FlatButton onClick={() => window.location.href="https://www.esilv.fr/"} secondary = {true} size="lg"label = 'ESILV'/>{' '}
                        <FlatButton onClick={() => window.location.href="https://www.emlv.fr/"} secondary = {true} size="lg" label = 'EMLV'/>{' '}
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default ContainerPULV;
