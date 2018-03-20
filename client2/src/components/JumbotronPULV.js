import React from 'react';
import {Jumbotron, Button,Row,Col, Container} from 'reactstrap';
import ContainerPULV from './ContainerPULV';
import Paper from 'material-ui/Paper'

console.log("Passed");
class JumbotronPULV extends React.Component {
	render() {
		return (
            <div style = {{marginTop : 50+"px"}}>
                <Paper className="text-center"
                zDepth = {2}>
                    <h1 className="display-3">Bienvenue au Pôle Léonard de Vinci</h1><br/>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <ContainerPULV />
                    <p className="lead">
                    </p>
                </Paper>
            </div>
		);
	}
}
export default JumbotronPULV;