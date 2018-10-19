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
  Card,
  Grid,
  Image,
} from 'semantic-ui-react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'

class SubmitProposalPage extends Component {
  state = {
    modalOpen: false,
    datesRange: '',
    selectedTalents: [],
    talentsList: [
      {
        id: 0,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 1,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 2,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 3,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 4,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 5,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 6,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 7,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 8,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 9,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 10,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
      {
        id: 11,
        photo: "http://www.pluspixel.com.br/wp-content/uploads/avatar-1.png",
        name: "Fulano de Tal",
        job: "Tester",
        description: "Fulano de Tal é legal",
      },
    ],
  }

  handleCardClick = (event, { image, header, meta }) => {
    this.state.selectedTalents.push(
      {
        'photo': image,
        'name': header,
        'job': meta,
      })

    this.close()
  }

  createCardsList = () => {
    let list = []

    for (let i = 0; i < this.state.talentsList.length; i++) {
      list.push(
        <Card
          image={this.state.talentsList[i].photo}
          header={this.state.talentsList[i].name}
          meta={this.state.talentsList[i].job}
          description={this.state.talentsList[i].description}
          href='#'
          onClick={this.handleCardClick}
        />
      )
    }

    return list
  }

  showSelectedTalents = () => {

    let list = []

    for (let i = 0; i < this.state.selectedTalents.length; i++) {
      list.push(
        <Card>
          <Image src={this.state.selectedTalents[i].photo} fluid circular centered />
          <Card.Content>
            <Card.Header>{this.state.selectedTalents[i].name}</Card.Header>
            <Card.Meta>{this.state.selectedTalents[i].job}</Card.Meta>
          </Card.Content>
        </Card>
      )
    }

    return list
  }

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
              <div style={{ paddingBottom: 20 }}>
                <h3>Equipe</h3>
                <Card.Group itemsPerRow={4}>
                  {this.showSelectedTalents()}
                </Card.Group>
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
            <Card.Group itemsPerRow={4}>
              {this.createCardsList()}
            </Card.Group>
          </Modal.Content>
        </Modal>
      </Layout>
    )
  }
}

export default SubmitProposalPage
