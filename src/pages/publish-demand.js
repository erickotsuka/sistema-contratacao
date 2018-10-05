import React, {Component} from 'react'
import Layout from '../components/layout'
import TwoSteps from '../components/step'
import DateTimeForm from '../components/date_input'
import { Container, Divider, Segment, Form, Input, TextArea, Button, Dropdown } from 'semantic-ui-react'

class PublishDemandPage extends Component {
  state = { showDemand: false }
  submitPage = () => this.setState({ showDemand: true })
  formPage = () => this.setState({showDemand: false})

  render() {
    const { showDemand } = this.state;

    return (
      <Layout>
        <Container textAlign="center">
          <div style={{ paddingTop: 50}}>
            <h1>Nova Demanda</h1>
          </div>

          <div style={{ paddingBottom: 40 , paddingTop: 40}}>
            <TwoSteps />
          </div>
          
        </Container>
        <Container>
          <div>
            <Form>
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

              <Container textAlign="right">
                <Form.Field 
                  id="publish-demand-form-button-control-next"
                  control={Button}
                  content="Próximo"
                  label=""
                />
              </Container>
              
            </Form>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default PublishDemandPage