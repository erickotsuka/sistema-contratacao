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
  Image,
} from 'semantic-ui-react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'
import ButtonExampleCircularSocial from '../components/social_media'
import { Link } from 'gatsby'

class SubmitProposalPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false,
      mode: 'fillForm',
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
  }

  successPage= () => this.setState({mode: 'submissionSuccess'})
  formPage = () => this.setState({showDemand: false, mode: 'fillForm'})

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
        {
          this.state.mode === 'fillForm' | this.state.mode === 'showDemand'?
          <Container textAlign="center">
            <div style={{ paddingTop: 50}}>
              <h1>Submeter proposta</h1>
            </div>
          </Container>
          :null
        }
        <Container>
          {
            this.state.mode === 'fillForm'?
            <Container>
              <Form>
                <div style={{ paddingBottom: 5 }}>
                  <h3>Prazo</h3>
                </div>
                <DatesRangeInput
                  style={{ paddingBottom: 10 }}
                  name="datesRange"
                  placeholder="De - Até"
                  iconPosition="left"
                  value={this.state.datesRange}
                  onChange={this.handleChange}
                />
                <div style={{ paddingBottom: 5 }}>
                  <h3>Orçamento</h3>
                </div>
                <Form.Field
                  style={{ paddingBottom: 10 }}>
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
                <Form.Field
                style={{ paddingBottom: 10 }}>
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
                <Button 
                  positive 
                  floated="right" 
                  type="submit"
                  onClick={this.successPage}>
                  Submeter
                </Button>
              </Form>
              

              <Modal open={modalOpen} onClose={this.close}>
              <Modal.Header>Escolha um membro para a equipe</Modal.Header>
              <Modal.Content>
                <Card.Group itemsPerRow={4}>
                  {this.createCardsList()}
                </Card.Group>
              </Modal.Content>
              </Modal>
            </Container>
            
            :null
          }

          {
            this.state.mode === 'submissionSuccess'?
            <Container>
              <Container textAlign='center' style={{ paddingBottom: 200 , paddingTop: 200}}>
                <h1 style={{color: 'orange'}}>Sua proposta foi submetida com</h1>
                <h1 style={{color: 'orange'}}>SUCESSO!</h1>
                <h3>Aguarde que em breve o cliente entrará em contato com você</h3>
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
            </Container>
            :null
          }
          </Container>
      </Layout>
    )
  }
}

export default SubmitProposalPage
