import React from 'react'
import Layout from '../components/layout'
import {
  Container,
  Button,
  Form,
  Input,
  Label,
  TextArea,
} from 'semantic-ui-react'

const SubmitProposalPage = () => (
  <Layout>
    {/* <form class="ui form">
      <div class="field">
        <label>Prazo</label>
        <div class="fields">
          <div class="field">
              <label>De</label>
              <input type="text" name="final-date" placeholder="Data final" />
          </div>
          <div class="field">
            <label>Até</label>
            <input type="text" name="final-date" placeholder="Data final" />
          </div>
        </div>
      </div>
      <div class="field">
        <label>Orçamento</label>
        <div class="ui right labeled input">
          <label for="amount" class="ui label">
            R$
          </label>
          <input type="text" placeholder="Quantia" id="amount" />
          <div class="ui basic label">.00</div>
        </div>
      </div>
      <div class="field">
        <label>Equipe</label>
        <button class="circular ui icon button">
          <i class="icon plus" />
        </button>
        Adicionar talento
      </div>
      <div class="field">
        <label>Descrição detalhada</label>
        <textarea></textarea>
      </div>
      <button class="ui button" type="submit">
        Submeter
      </button>
    </form> */}
    <Container textAlign="center">
      <div>
        <h1>Submeter proposta</h1>
      </div>
    </Container>
    <Container>
      <div>
        <Form>
          <div style={{ paddingBottom: 5 }}>
            <h3>Prazo</h3>
          </div>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="De"
              placeholder="Data de início"
            />
            <Form.Field control={Input} label="Até" placeholder="Data final" />
          </Form.Group>
          <div style={{ paddingBottom: 5 }}>
            <h3>Orçamento</h3>
          </div>
          <Form.Field>
            <Input labelPosition="right" type="text" placeholder="Quantia">
              <Label basic>$</Label>
              <input />
              <Label>.00</Label>
            </Input>
          </Form.Field>
          <div style={{ paddingBottom: 5 }}>
            <h3>Equipe</h3>
          </div>
          <Form.Field>
            <Button circular icon="plus" size="massive" />
          </Form.Field>
          <div style={{ paddingBottom: 5 }}>
            <h3>Descrição detalhada</h3>
          </div>
          <Form.Field
            control={TextArea}
            placeholder="Escreva a descrição detalhada da proposta."
          />
          <Button type='submit'>Submeter</Button>
        </Form>
      </div>
    </Container>
  </Layout>
)

export default SubmitProposalPage
