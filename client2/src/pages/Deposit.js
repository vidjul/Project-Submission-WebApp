import React, { Component } from 'react';
import Navs from '../components/nav/Navs.js';
import FilesInputs from '../components/Deposit/FormComponents/FilesInputs';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system'
import KeyWords from '../components/Deposit/FormComponents/KeyWords';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
/**
 * Deposit a project
 */
class Deposit extends Component {


  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      title: "",
      study_year: [],
      majors_concerned: [],
      description: "",
      keyWords: [],
      files: [],
      urls: [],
      email: "",
      company: "",
      first_name: "",
      last_name: "",
      submited: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyWords = this.handleKeyWords.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.majors = [{ name: "Informatique, BigData et objets connectes", key: "IBO" },
    { name: "Nouvelle energie", key: "NE" },
    { name: "Ingenieurie financiaire", key: "IF" },
    { name: "Mecanique", key: "MNM" }]
  }
  //STEP
  handleNext = () => {
    const { stepIndex } = this.state;
    console.log(this.state.title)
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleSpe(e, index, values) {
<<<<<<< HEAD
    console.log(values)
    this.setState({ majors_concerned: values })
=======
    this.setState({ specialization: values }, () => {console.log(this.state.specialization)})
>>>>>>> f77fca3b1bb572cbd66142159de8ff19ab869213
  }

  handleBlur(event) {
    console.log(this.state)
    fetch("/api/partners/" + this.state.email)
      .then((res) => res.json())
      .then((partner) => {
        try {
          this.setState({ first_name: partner.first_name, last_name: partner.last_name, company: partner.company })
        } catch (e) {
          console.log("Email not found");
        }
      })
      .catch((err)=>{console.log("Email not found")})
    console.log("passed")

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
      this.state.files.splice(this.state.files.findIndex((file) => {
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
      keys.push(element)
    });
    console.log(keys)
    this.setState({ keyWords: keys });
    console.log(this.state.keyWords)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("Passed")
    this.FilesUpload()
      .then(() => {
        const form = {
          title: this.state.title,
          study_year: this.state.study_year,
          majors_concerned: this.state.majors_concerned,
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
              this.setState({ submited: true })
              console.log(res)
            })
            .catch((error) => {
              console.log(error)
            })
        }
        catch (error) {
          return console.log(error);
        }
      })
      .catch((err) => { console.log("ERROR UPLOAD FILE") })
    this.handleNext();
  }

  handleChange(e, index, values) {
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
        console.log(this.state.study_year)
        this.state.study_year = temp;
        break;

      default:
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state.email)
        console.log(this.state.title)
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      //Informations about the partner
      case 0:
        return <div>
          <h2 style={{ textAlign: 'center' }}>Tell us about yourself </h2>
          <Container>
            <Row>
              <Col md={6} offset={{ md: 3 }}>
                <TextField
                  floatingLabelText="Your email address"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  name="email"
                  value = {this.state.email}
                  fullWidth={true} />
              </Col>
            </Row>

            <Row>
              <Col md={6} offset={{ md: 3 }}>
                <TextField
                  floatingLabelText="Your company"
                  onChange={this.handleChange}
                  name="company" value={this.state.company}
                  fullWidth={true} />
              </Col>
            </Row>

            <Row>
              <Col md={6} offset={{ md: 3 }}>
                <TextField
                  floatingLabelText="Your first name"
                  onChange={this.handleChange} fullWidth={true}
                  name="first_name" value={this.state.first_name} />
              </Col>
            </Row>
            <Row>
              <Col md={6} offset={{ md: 3 }}>
                <TextField
                  floatingLabelText="Your last name"
                  onChange={this.handleChange} fullWidth={true}
                  name="last_name" value={this.state.last_name} />
              </Col>
            </Row>

          </Container>
        </div>

      /**
       * Information about the project
       */
      case 1:
        return <div>
          <h2 style={{ textAlign: 'center' }}>Présentez votre projet</h2>
          <Container>
            <Row>
              <Col md={6} offset={{ md: 3 }}>
                <TextField
                  floatingLabelText="Intitulé de votre projet"
                  onChange={this.handleChange} fullWidth={true}
                  name="title" value ={this.state.title}/>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={3} offset={{ md: 3 }}>
                <Checkbox
                  label="Année 4"
                  name="year"
                  value="A4"
                  onCheck={this.handleChange} />
              </Col>
              <Col md={3}>
                <Checkbox
                  label="Année 5"
                  name="year"
                  value="A5"
                  onCheck={this.handleChange} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6} offset={{ md: 3 }}>
                <SelectField
                  multiple={true} hintText="Majeur(s) ciblée(s)"
                  value={this.state.majors_concerned}
                  onChange={this.handleSpe.bind(this)} fullWidth={true}
                  name="majors_concerned"
                  floatingLabelText="Majeur(s)">
                  {this.majors.map((major) => <MenuItem
                    key={major.key}
                    insetChildren={true}
                    checked={this.state.majors_concerned.indexOf(major.key) > -1}
                    value={major.key}
                    primaryText={major.name}
                  />)}
                </SelectField>
              </Col>
            </Row>
            <Row>
              <Col md={8} offset={{ md: 2 }}>
                <TextField
                  hintText="Description complete de votre projet"
                  floatingLabelText="Description"
                  multiLine={true}
                  rows={10}
                  name="description"
                  onChange={this.handleChange}
                  fullWidth={true} />
              </Col>
            </Row>
            <Row>
              <Col md={8} offset={{ md: 2 }}>
                <KeyWords change={this.handleKeyWords} />
              </Col>
            </Row>
            <Row>
              <Col md={8} offset={{ md: 2 }}>
                <FilesInputs change={this.handleFiles} />
              </Col>
            </Row>
          </Container>
        </div>;
      case 2:
        if (!this.state.submited) {
          return <CircularProgress />
        }
        else {
          <Container>
            <Row>
              <Col md={8} offset={{ md: 2 }}>
                <div>  Merci, votre projet est maintenant en attente de validation par l'administration de l'école concerné. Un email vous a été envoyé avec un lien pour modifier votre projet. </div>
              </Col>
            </Row>
          </Container>
        }
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    return (
      <div id="deposit-body">
        <Navs />
        <form onSubmit={this.handleSubmit}>
          <Paper zDepth={1} style={{ width: '100%', maxWidth: 1000, margin: 'auto', marginTop: 10 }}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Partner information</StepLabel>
              </Step>
              <Step>
                <StepLabel>Project Information</StepLabel>
              </Step>
              <Step>
                <StepLabel>Submit your project</StepLabel>
              </Step>
            </Stepper>

            <div>
              {finished ? (

                <Container>
                  <Row>
                    <Col md={8} offset={{ md: 2 }}>
                      {this.state.submited ? (<div><div>  Merci, votre projet est maintenant en attente de validation par l'administration de l'école concerné. Un email vous a été envoyé avec un lien pour modifier votre projet. </div>
                        <br/>
                          <a
                            href="#"
                            onClick={(event) => {
                              event.preventDefault();
                              this.setState({ stepIndex: 0, finished: false });
                            }}
                          >
                            Click here
                    </a> to reset the example.
                  </div>) : (
                      <div style = {{textAlign : 'center'}}><CircularProgress /></div>)}
                    </Col>
                  </Row>
                </Container>
              ) : (
                  <div>
                    {this.getStepContent(stepIndex)}
                    <div style={{ marginTop: 12, paddingBottom: 30, textAlign: 'center' }}>
                      <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        onClick={this.handlePrev}
                        style={{ marginRight: 12 }}
                      />
                      <RaisedButton
                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                        primary={true}
                        onClick={stepIndex === 1 ? this.handleSubmit : this.handleNext}
                      />
                    </div>
                  </div>
                )}
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}

export default Deposit;
