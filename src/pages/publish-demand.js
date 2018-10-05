import React from 'react'
import Layout from '../components/layout'
import TwoSteps from '../components/step'
import DateTimeFormInline from '../components/date_input'
import { Container, Divider } from 'semantic-ui-react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import {
  DateInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';


export default () => (
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
              className
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
            <Form.Field style={{ paddingBottom: 0 }}
              id="form-textarea-control-description"
              control={TextArea}
              label="Descrição"
              placeholder="Descreva sua demanda aqui"
            />
          </div>
          

          <div style={{ paddingBottom: 40 , paddingTop: 40}}>
            <DateTimeFormInline />
          </div>


          <Container textAlign="right">
            <Form.Field 
              id="form-button-control-public"
              control={Button}
              content="Enviar"
              label=""
            />
          </Container>
        </Form>
      </div>
    </Container>
  </Layout>
)
