import React, { Component } from 'react'
import Layout from '../components/layout'
import {
  Container,
  Button,
  Form,
  Input,
  Label,
  TextArea,
  Modal,
  Grid,
  Image,
} from 'semantic-ui-react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'
import PersonCard from '../components/person-card'

class SubmitProposalPage extends Component {
  state = { modalOpen: false, datesRange: '' }
  show = () => this.setState({ modalOpen: true })
  close = () => this.setState({ modalOpen: false })

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value })
    }
  }

  render() {
    const modalOpen = this.state.modalOpen

    return (
      <Layout>
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
              <DatesRangeInput
                name="datesRange"
                placeholder="De - Até"
                iconPosition="left"
                value={this.state.datesRange}
                onChange={this.handleChange}
              />
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
                <Button
                  circular
                  icon="plus"
                  size="massive"
                  onClick={this.show}
                />
              </Form.Field>
              <div style={{ paddingBottom: 5 }}>
                <h3>Descrição detalhada</h3>
              </div>
              <Form.Field
                control={TextArea}
                placeholder="Escreva a descrição detalhada da proposta."
              />
              <Button positive floated="right" type="submit">
                Submeter
              </Button>
            </Form>
          </div>
        </Container>
        <Modal open={modalOpen} onClose={this.close}>
          <Modal.Header>Escolha um membro para a equipe</Modal.Header>
          <Modal.Content>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <PersonCard
                    image="http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png"
                    name="Fulano de Tal"
                    job="Tester"
                    description="Fulano de Tal é legal."
                    link="#"
                  />
                </Grid.Column>
                <Grid.Column>
                  <PersonCard
                    image="http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png"
                    name="Fulano de Tal"
                    job="Tester"
                    description="Fulano de Tal é legal."
                    link="#"
                  />
                </Grid.Column>
                <Grid.Column>
                  <PersonCard
                    image="http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png"
                    name="Fulano de Tal"
                    job="Tester"
                    description="Fulano de Tal é legal."
                    link="#"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <PersonCard
                    image="http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png"
                    name="Fulano de Tal"
                    job="Tester"
                    description="Fulano de Tal é legal."
                    link="#"
                  />
                </Grid.Column>
                <Grid.Column>
                  <PersonCard
                    image="http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png"
                    name="Fulano de Tal"
                    job="Tester"
                    description="Fulano de Tal é legal."
                    link="#"
                  />
                </Grid.Column>
                <Grid.Column>
                  <PersonCard
                    image="http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png"
                    name="Fulano de Tal"
                    job="Tester"
                    description="Fulano de Tal é legal."
                    link="#"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
      </Layout>
    )
  }
}

export default SubmitProposalPage
