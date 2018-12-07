import React, {Component} from 'react'
import Layout from '../components/layout'
import TwoSteps from '../components/step'
import ButtonExampleCircularSocial from '../components/social_media'
import DateTimeForm from '../components/date_input'
import { Container, Form, Input, TextArea, Button, Dropdown } from 'semantic-ui-react'

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
  successPage= () => this.setState({mode: 'submissionSuccess'})
  
  handleChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    /*{const { showDemand } = this.state;}*/
    return (
    <Layout>
        <Container textAlign="center">
          <div style={{ paddingTop: 50}}>
            <h1>Nova Demanda</h1>
          </div>

          
        </Container>
        <Container>
        { 
          this.state.mode === 'fillForm'?
            <Form>
              <Container textAlign='center'>
                <div style={{ paddingBottom: 40 , paddingTop: 40}}>
                  <TwoSteps showDemand={this.state.showDemand} ></TwoSteps>
                </div>
              </Container>
              <div style={{ paddingBottom: 20 }}>
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

              <div style={{ paddingBottom: 20 }}>
                <Form.Field label="Tipo de serviço"
                  required/>
                <Dropdown
                    placeholder={this.state.service_type}
                    fluid
                    selection
                    name='service'
                    onChange={event => this.handleChange(event)}
                    options={[
                      { text: 'Arquitetônico', value: 'Arquitetônico'},
                      { text: 'Análise de Negócio', value: 'Análise de Negócio'},
                      { text: 'Programação', value: 'Programação'},
                      { text: 'Tradutor', value: 'Tradutor'}
                    ]}
                  />
              </div>
                      
              <div style={{ paddingBottom: 20 }}>
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
                
              <div style={{ paddingBottom: 40 , paddingTop: 0}}>
                <DateTimeForm 
                  label="Data limite (opcional)"
                  name='limit_date'
                  placeholder={this.state.limit_date}
                  onChange={event => this.handleChange(event)}
                  required
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
                <div style={{ paddingBottom: 40 , paddingTop: 40}}>
                  <TwoSteps showDemand={this.state.showDemand} ></TwoSteps>
                </div>
            </Container>

            <Form >
                <Form.Field 
                  style={{ paddingBottom: 20 }}
                  id="form-input-control-title-read-only"
                  inline
                  control={Input}
                  label="Título"
                  placeholder={this.state.title}
                  readOnly
                />
                <Form.Field 
                  style={{ paddingBottom: 20 }}
                  id="form-input-control-service-read-only"
                  inline
                  control={Input}
                  label="Tipo de serviço"
                  placeholder={this.state.service_type}
                  readOnly
                />
                <Form.Field 
                  style={{ paddingBottom: 20 }}
                  id="form-input-control-service-read-only"
                  inline
                  control={TextArea}
                  label="Descrição"
                  placeholder={this.state.description}
                  readOnly
                />
                <Form.Field 
                  style={{ paddingBottom: 20 }}
                  id="form-input-control-service-read-only"
                  inline
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
              onClick={this.successPage}/>
            </div>
          :null
        }
         {
          this.state.mode === 'submissionSuccess'?
          <div>
            <Container textAlign='center' style={{ paddingBottom: 150 , paddingTop: 150}}>
              <h1 style={{color: 'orange'}}>Sua demanda foi submetida com</h1>
              <h1 style={{color: 'orange'}}>SUCESSO!</h1>
              <h2>Aguarde que em breve um profissional irá entrar em contato com você</h2>
              <h2>:)</h2>
            </Container>
            <Button 
              id="publish-demand-form-button-control-submit"
              content='Retornar ao inicio' 
              positive
              icon='check'
              labelPosition='right' 
              floated='right'
              onClick={this.successPage}/>
            <ButtonExampleCircularSocial floated='left'/>  
          </div>
          :null
        }
      </Container>
    </Layout>
  )
  }
}

export default PublishDemandPage