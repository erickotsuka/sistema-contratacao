import React, {Component} from 'react'
import Layout from '../components/layout'
import TwoSteps from '../components/step'
import DateTimeForm from '../components/date_input'
import { Container, Form, Input, TextArea, Button, Dropdown } from 'semantic-ui-react'

class PublishDemandPage extends Component {
  state = { showDemand: false }
  formPage = () => this.setState({showDemand: false})
  submitPage = () => this.setState({showDemand: true})
  

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
          this.state.showDemand === false? 
            <Form>
              <Container textAlign='center'>
                <div style={{ paddingBottom: 40 , paddingTop: 40}}>
                  <TwoSteps showDemand={this.state.showDemand} ></TwoSteps>
                </div>
              </Container>
              <div style={{ paddingBottom: 20 }}>
                <Form.Field 
                  style={{ paddingBottom: 10 }}
                  id="form-input-control-title"
                  control={Input}
                  label="Título"
                  placeholder="Escreva um título que melhor identifique sua demanda"
                />
              </div>

              <div style={{ paddingBottom: 20 }}>
                <Form.Field label="Tipo de serviço"/>
                <Dropdown
                    placeholder="Selecione um serviço"
                    fluid
                    selection
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
                  control={TextArea}
                  label="Descrição"
                  placeholder="Descreva sua demanda aqui"
                />
              </div>
                
              <div style={{ paddingBottom: 20 , paddingTop: 0}}>
                <DateTimeForm />
              </div>
            </Form>
          :null
        }
          
        {
          this.state.showDemand === false?
          <Button 
            id="publish-demand-form-button-control-next"
            /*disabled={estado de campos obrigatorios form preenchidos}*/
            positive 
            content='Próximo' 
            icon='right arrow' 
            labelPosition='right' 
            floated='right'
            onClick={this.submitPage}/>
          :null
        }

        {
          this.state.showDemand === true?
          <div>
            <Container textAlign='center'>
                <div style={{ paddingBottom: 40 , paddingTop: 40}}>
                  <TwoSteps showDemand={this.state.showDemand} ></TwoSteps>
                </div>
            </Container>
            <Button 
              id="publish-demand-form-button-control-back"
              isHidden={this.state.showDemand}
              content='Voltar' 
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
              //onClick={}
              />
            </div>
          :null
        }
      </Container>
    </Layout>
  )
  }
}

export default PublishDemandPage