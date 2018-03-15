import React, { Component } from 'react';
import Navs from '../components/nav/Navs.js';
import FilesInputs from '../components/Deposit/FormComponents/FilesInputs';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import KeyWords from '../components/Deposit/FormComponents/KeyWords';
import '../styles/Deposit/style.css'
/**
 * Deposit a project
 */
class Deposit extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: "",
      study_year: [],
      specialization: [],
      description: "",
      keyWords: [],
      files: [],
      urls: [],
      email: "",
      company: "",
      email2: "",
      first_name: "",
      last_name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyWords = this.handleKeyWords.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
      const encodedValue = encodeURIComponent(this.state.email);
      fetch("/api/partners/"+this.state.email)
      .then((res)=> res.json())
      .then((partner)=>{
        try{
        this.setState({first_name : partner.first_name, last_name : partner.last_name, company : partner.company})
        }catch(e){
          console.log("Email not found");
        }
      });

  }

  FilesUpload() {
    return new Promise((resolve, reject) => {
      var formData = new FormData()
      /*Object.keys(this.state.files).forEach((key)=>{  //On parcourt la liste des fichiers
          const file = this.state.files[key]
          formData.append(key, new Blob([file], {type : file.type}), file.name || 'file') //On ajoute dans le formData le fichier
      })*/

      this.state.files.forEach((file) => {
        formData.append(file.name, new Blob([file], { type: file.type }), file.name || 'file')
      })

      fetch('/api/addFile', {
        method: 'POST',
        body: formData
      })
        .then((resp) => {
          resp.json().then((urls) => {
            console.log(urls)
            this.setState({ urls: urls })
            return resolve()
          });
        })
        .catch((err) => { return reject(err) })
    })

  }

  addViewFile() {

    var Delete = (e) => {
      const fileIdToRemove = e.target.getAttribute('data-key')
      var newState = this.state.files.splice(this.state.files.findIndex((file) => {
        return file.id == fileIdToRemove;
      }), 1);
      this.addViewFile();
    }

    const html = (
      this.state.files.map((file, index) => {
        return (
          <a key={index} class="justify-content-between file-add list-group-item list-group-item-action">
            <div>
              <p>{file.name}</p>
              <p data-key={file.id} className="text-right" onClick={Delete}> Delete</p>
            </div>
          </a>)
      })
    )
    ReactDOM.render(html, document.getElementById("addedFiles"))
  }

  handleFiles(event) {
    console.log(event);
    this.setState({ files: event }, () => {
      console.log(this.state.files);
      this.addViewFile()
    });
  }

  handleKeyWords(key) {

    var keys = [];
    key.forEach(element => {
      keys.push(element.text)
    });
    console.log(keys)
    this.setState({ keyWords: keys });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.FilesUpload()
      .then(() => {
        const form = {
          title: this.state.title,
          study_year: this.state.study_year,
          specialization: this.state.specialization,
          description: this.state.description,
          keywords: this.state.keyWords,
          email: this.state.email,
          company: this.state.company,
          urls: this.state.urls,
          first_name: this.state.first_name,
          last_name: this.state.last_name
        }

        console.log(form);
        try {
          fetch('/api/projects', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
          })
            .then((res) => {
              console.log(res)
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            })
        }
        catch (error) {
          console.error(error);
        }
      })

  }


  handleChange(e) {
    switch (e.target.name) {
      case "year":
        var temp = this.state.study_year;
        if (e.target.checked) {
          temp.push(e.target.value);
        }
        else {
          var index = temp.indexOf(e.target.value)
          if (index > -1) {
            temp.splice(index, 1);
          }
        }
        this.state.study_year = temp;
        break;

      case "specialization":
        var values = []
        for (var i = 0; i < e.target.options.length; i++) {
          if (e.target.options[i].selected) {
            values.push(e.target.options[i].value);
          }
        }
        this.setState({ specialization: values })
        break;

      default:
        this.setState({
          [e.target.name]: e.target.value
        })
    }
  }

  render() {
    return (
      <div id="deposit-body">
        <Navs />
        <Container fluid className="mt-3">
          <Form onSubmit={this.handleSubmit}>
            <h1>Déposer un projet</h1>
            <hr className="hr-text" data-content="Déposer un projet" />
            <h2>Parlez nous de vous </h2>
            <hr />
            <FormGroup>
              <Label for="Email"><h3>Votre email</h3></Label>
              <Input
                onChange={this.handleChange}
                type="email" name="email" value = {this.state.email}
                placeholder="Votre email"
                onBlur = {this.handleBlur}/>
            </FormGroup>
            <FormGroup>
              <Label for="Company"><h3>Votre entreprise</h3></Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="company"
                id="company"
                placeholder="Votre entreprise"
                value = {this.state.company} />
            </FormGroup>
            <FormGroup>
              <Label for="first_name"><h3>Votre Prénom</h3></Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Votre prénom" 
                value = {this.state.first_name}/>
            </FormGroup>
            <FormGroup>
              <Label for="last_name"><h3>Votre Nom</h3></Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Votre Nom"
                value = {this.state.last_name}/>
            </FormGroup>
            <hr />
            <h2>Présentez votre projet</h2>
            <hr />
            <FormGroup>
              <Label for="title"><h3>Intitulé de votre projet</h3></Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="title"
                placeholder="Intituté du projet" />
            </FormGroup>
            <FormGroup row>
              <Label for="year" check><h3>Année</h3></Label>
              <Col sm={{ size: 10 }}>
                <FormGroup check inline>
                  <Input
                    onChange={this.handleChange}
                    value="A4"
                    type="checkbox"
                    name="year" /> {' '}
                  A4
                    </FormGroup>
                <FormGroup check inline>
                  <Input
                    onChange={this.handleChange}
                    value="A5"
                    type="checkbox"
                    name="year" /> {' '}
                  A5
                    </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="specialization">Majeure(s) ciblée(s)</Label>
              <Input onChange={this.handleChange} type="select" name="specialization" multiple>
                <option value="IBO">Informatique, BigData et objets connectes</option>
                <option value="NE">Nouvelle energie</option>
                <option value="IF">Ingenieurie financiaire</option>
                <option value="MCM">Mecanique</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="description">Description de votre projet</Label>
              <Input onChange={this.handleChange} type="textarea" name="description" />
            </FormGroup>
            <KeyWords change={this.handleKeyWords} />
            <FilesInputs change={this.handleFiles} />
            <FormGroup>
              <Button>Envoyer le projet</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Deposit;
