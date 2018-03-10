import React from 'react';
import {Button,Row,Col, Container} from 'reactstrap';

console.log("Passed");
class ContainerPULV extends React.Component {
	render() {
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <h2><b>Hybridation et transversalité</b></h2><br/>
                        <h3><b>Une approche transversale unique</b></h3><br/>
                        <p>Les écoles du Pôle Léonard de Vinci ont développé une transversalité pédagogique qui encourage le décloisonnement des enseignements et permet aux étudiants de travailler en équipes pluridisciplinaires tout en progressant dans leur formation et leurs savoirs numériques.</p>
                        <Button color="primary">La transversalité</Button>{' '}
                        <Button color="primary">Les chiffres-clés</Button>{' '}
                        <Button color="primary">Le projet</Button>{' '}
                        <Button color="primary">Les programmes</Button>{' '}
                    </Col>
                    <Col sm="6">
                        <h2><b>Les écoles</b></h2><br/>
                        <h3><b>Un campus, quatre écoles</b></h3><br/>
                        <p>Le Pôle Léonard de Vinci, c’est trois écoles à Paris-La Défense : une école d’ingénieurs, une école de management, une école multimédia. En complément, un Institut propose de la formation continue.</p>
                        <Button color="primary">IIM</Button>{' '}
                        <Button color="primary">ESILV</Button>{' '}
                        <Button color="primary">EMLV</Button>{' '}
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default ContainerPULV;
