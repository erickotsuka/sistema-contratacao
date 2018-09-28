import React from 'react'
import Layout from '../components/layout'
import TwoSteps from '../components/step'
import { Container, Divider } from 'semantic-ui-react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

export default () => (
  <Layout>
    <Container textAlign="center">
      <div>
        <h1>Nova Demanda</h1>
      </div>

      <TwoSteps />
    </Container>
    <Container>
      <div>
        <Form>
          <Form.Field
            className
            id="form-input-control-title"
            control={Input}
            label="Título"
            placeholder="Escreva um título que melhor identifique sua demanda"
          />

          <Form.Field label="Tipo de serviço"/>
          <Dropdown
              
              placeholder="Selecione um serviço"
              fluid
              selection
              options={[
                {
                  text: 'Arquitetônico',
                  text: 'Análise de Negócio',
                  text: 'Programação',
                  text: 'Tradutor',
                },
              ]}
            />

          <Form.Field
            id="form-textarea-control-description"
            control={TextArea}
            label="Descrição"
            placeholder="Descreva sua demanda aqui"
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Enviar"
            label=""
          />
        </Form>
      </div>
    </Container>
  </Layout>
)
