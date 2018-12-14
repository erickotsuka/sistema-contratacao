import React, {Component} from 'react'
import Layout from '../components/layout'
import TwoSteps from '../components/step'
import { Container, Form, Input, TextArea, Button, Dropdown } from 'semantic-ui-react'
import ButtonExampleCircularSocial from '../components/social_media'
import { Link } from 'gatsby'
import {DateInput} from 'semantic-ui-calendar-react'

class PublishDemandPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      mode: 'fillForm',
      showDemand: false,
      title: 'Escreva um título que melhor identifique sua demanda',
      service_type: 'Selecione um serviço',
      description: 'Descreva aqui sua demanda',
      limit_date: 'Indefinida'
    }
  }

  formPage = () => this.setState({showDemand: false, mode: 'fillForm'})
  submitPage = () => this.setState({showDemand: true, mode: 'showDemand'})
  successPage = () => this.setState({mode: 'submissionSuccess'})

  handleChange (event) {
    console.log(event.target.name + ': ' + event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  handleDropdownChange(event) {
    this.setState({service_type: event.target.textContent})
  }

  handleConfirm() {
    this.saveDemandToDatabase();
    this.successPage();
  }

  saveDemandToDatabase() {
    var url = 'http://127.0.0.1:5000/demanda';

    console.log(this.state.limit_date)

    var demand = {
      id_cliente: 1,
      titulo: this.state.title,
      tipo_servico: this.state.service_type,
      data_limite: this.state.limit_date,
      descricao: this.state.description,
    };

    if (demand.data_limite == 'Indefinida') demand.data_limite = null;

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(demand),
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  handleChangeDate = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  render() {
    return (
    <Layout>
       {
        this.state.mode === 'fillForm' | this.state.mode === 'showDemand'?
        <Container textAlign="center">
          <div style={{ paddingTop: 50}}>
            <h1>Nova Demanda</h1>
          </div>
        </Container>
        :null
        }

        <Container>
        {
          this.state.mode === 'fillForm'?
            <Form>
              <Container textAlign='center'>
                <div style={{ paddingBottom: 30 , paddingTop: 20}}>
                  <TwoSteps showDemand={this.state.showDemand} ></TwoSteps>
                </div>
              </Container>
              <div style={{ paddingBottom: 10 }}>
                <Form.Field
                  style={{ paddingBottom: 10 }}
                  name='title'
                  id="form-input-control-title"
                  control={Input}
                  label="Título"
                  onChange={event => this.handleChange(event)}
                  placeholder={this.state.title}
                  required
                />
              </div>

              <div style={{ paddingBottom: 10 }}>
                <Form.Field label="Tipo de serviço"
                  required/>
                <Dropdown
                    placeholder={this.state.service_type}
                    fluid
                    selection
                    name='service_type'
                    onChange={event => this.handleDropdownChange(event)}
                    options={[
                      { text: 'Arquitetônico', value: 'Arquitetônico'},
                      { text: 'Análise de Negócio', value: 'Análise de Negócio'},
                      { text: 'Programação', value: 'Programação'},
                      { text: 'Tradutor', value: 'Tradutor'}
                    ]}
                  />
              </div>

              <div style={{ paddingBottom: 10 }}>
                <Form.Field style={{ paddingBottom: 70, paddingTop: 10}}
                  id="form-textarea-control-description"
                  name='description'
                  onChange={event => this.handleChange(event)}
                  control={TextArea}
                  label="Descrição"
                  placeholder={this.state.description}
                  required
                />
              </div>

              <div style={{ paddingBottom: 30 , paddingTop: 0}}>
                <DateInput
                  label={this.props.label}
                  name="limit_date"
                  placeholder="DD-MM-YYYY"
                  value={this.state.limit_date}
                  iconPosition="left"
                  onChange={this.handleChangeDate} 
                  />
              </div>
              <Button
                id="publish-demand-form-button-control-next"
                /*disabled={estado de campos obrigatorios form preenchidos}*/
                positive
                content='Próximo'
                icon='right arrow'
                labelPosition='right'
                floated='right'
                onClick={this.submitPage}/>
            </Form>
          :null
        }

        {
          this.state.mode === 'showDemand'?
          <div>
            <Container textAlign='center'>
                <div style={{ paddingBottom: 30 , paddingTop: 20}}>
                  <TwoSteps showDemand={this.state.showDemand} ></TwoSteps>
                </div>
            </Container>


            <Form>
                <Form.Field
                  style={{ paddingBottom: 10 }}
                  id="form-input-control-title-read-only"
                  control={Input}
                  label="Título"
                  placeholder={this.state.title}
                  readOnly
                />
                <Form.Field
                  style={{ paddingBottom: 10 }}
                  id="form-input-control-service-read-only"
                  control={Input}
                  label="Tipo de serviço"
                  placeholder={this.state.service_type}
                  readOnly
                />
                <Form.Field
                  style={{ paddingBottom: 10 }}
                  id="form-input-control-service-read-only"
                  control={TextArea}
                  label="Descrição"
                  placeholder={this.state.description}
                  readOnly
                />
                <Form.Field
                  style={{ paddingBottom: 10 }}
                  id="form-input-control-service-read-only"
                  control={Input}
                  label="Data limite (opcional)"
                  placeholder={this.state.limit_date}
                  readOnly
                />
            </Form>

            <Button
              id="publish-demand-form-button-control-back"
              isHidden={this.state.showDemand}
              content='Editar'
              icon='left arrow'
              labelPosition='left'
              floated='left'
              onClick={this.formPage}/>

            <Button
              id="publish-demand-form-button-control-submit"
              positive
              content='Confirmar demanda'
              icon='check'
              labelPosition='right'
              floated='right'
              onClick={this.handleConfirm}/>
            </div>
          :null
        }
         {
          this.state.mode === 'submissionSuccess'?
          <div>
            <Container textAlign='center' style={{ paddingBottom: 200 , paddingTop: 200}}>
              <h1 style={{color: 'orange'}}>Sua demanda foi publicada com</h1>
              <h1 style={{color: 'orange'}}>SUCESSO!</h1>
              <h3>Aguarde que em breve um profissional irá entrar em contato com você</h3>
              <h2>:)</h2>
            </Container>
            <Link style={{ color: 'white'}} to="/">
              <Button
                id="publish-demand-form-button-control-submit"
                content='Retornar ao inicio'
                icon='home'
                color='orange'
                labelPosition='right'
                floated='right'/>
              <ButtonExampleCircularSocial floated='left'/>
            </Link>
          </div>
          :null
        }
      </Container>
    </Layout>
  )
  }
}

export default PublishDemandPage
