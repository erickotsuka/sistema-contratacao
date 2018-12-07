import React, { Component } from 'react';
import Layout from '../components/layout';
import {
  Container,
  Button,
  Divider,
  Header,
  List,
  Image,
  Message
} from 'semantic-ui-react';
import ButtonExampleCircularSocial from '../components/social_media'
import { Link } from 'gatsby'


// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
// var Entregas = {
//   dataSource: ds.cloneWithRows(['Entrega nº 1', 'Entrega nº 2']),
// };

class IntegranteEquipe {
  constructor(nome, funcao, avatar) {
    this.nome = nome;
    this.funcao = funcao;
    this.avatar = avatar;
  }
}

let servico = {
  nome: 'Serviço nº1',
  descricao: 'Descrição do serviço',
  entregas: ['Fazer as telas', 'Fazer o tema', 'Estudar React'],
  prazo: { inicio: new Date('01/01/2019'), fim: new Date('04/01/2019') },
  equipe: [new IntegranteEquipe('Erick', 'desenvolvedor', 'https://react.semantic-ui.com/images/avatar/small/matthew.png'),
  new IntegranteEquipe('João', 'desenvolvedor', 'https://react.semantic-ui.com/images/avatar/small/matthew.png'),
  new IntegranteEquipe('Lucas', 'desenvolvedor', 'https://react.semantic-ui.com/images/avatar/small/matthew.png')],
  aceito: false
}

class AnalyseProposalPage extends Component {

  constructor() {
    super();
    this.state = {
      screen: 'show-proposal'
    }
  }

  changePage(page) {
    this.setState({ screen: page })
  }

  refuseProposal = () => this.setState({screen: 'proposal-refused'})
  acceptProposal = () => this.setState({screen: 'proposal-accepted'})

  render() {
    return (
      <Layout>
        {
        this.state.screen === 'show-proposal'?
          <Container textAlign='justified'>
            <div>
              <Header as='h1'>{servico.nome}</Header>
              <Message textAlign='' >{servico.descricao}</Message>
            </div>
            
            <Divider section></Divider>
            <div>
              {<Header as='h2'>Entregas</Header>}
              <List relaxed>
                {
                  servico.entregas.map(function (descricaoEntrega, index) {
                    return (
                      <List.Item>
                        <List.Content>Entrega nº {index + 1} : {descricaoEntrega}</List.Content>
                      </List.Item>
                    );
                  })}
              </List>
            </div>
            <Divider section></Divider>
            <div>
              <Header as='h2'>Prazo</Header>
              <p>Início: {servico.prazo.inicio.toLocaleDateString()}</p>
              <p>Fim: {servico.prazo.fim.toLocaleDateString()}</p>
            </div>
            <Divider section></Divider>
            <div>
              <Header as='h2'>Equipe</Header>
              <List>
                {
                  servico.equipe.map(function (integrante) {
                    return (
                      <List.Item>
                        <Image avatar src={integrante.avatar} />
                        <List.Content>
                          <List.Header as='a'>{integrante.nome}</List.Header>
                          <List.Content>{integrante.funcao}</List.Content>
                        </List.Content>
                      </List.Item>
                    );
                  })
                }
              </List>
            </div>
            <br />
            <br />
            <div style={{ paddingBottom: 60}}>
              <Button 
                floated='left' 
                content='Recusar'
                onClick={this.refuseProposal}/>
              <Button 
                floated='right' 
                content='Aceitar'
                color='orange'
                onClick={this.acceptProposal}/>
            </div>
          </Container>
        : this.state.screen === 'proposal-accepted'?
          <Container>
            <Container textAlign='center' style={{ paddingBottom: 200 , paddingTop: 200}}>
              <h1 style={{color: 'orange'}}>Você aceitou a proposta!</h1>
              <h1 style={{color: 'orange', paddingBottom: 60}}>:D</h1>
              
              <h3 style={{paddingBottom: 60}}>Para visualizar o andamento dela acesse "Meus serviços"</h3>
              
            </Container>
            <Link style={{ color: 'white'}} to="/">
              <Button 
                id="analyse-proposal-refused-view"
                content='Retornar ao inicio' 
                icon='home'
                color='orange'
                labelPosition='right' 
                floated='right'/>
              <ButtonExampleCircularSocial floated='left'/>  
            </Link>
          </Container>

          
        : this.state.screen === 'proposal-refused'?
          <Container>
            <Container textAlign='center' style={{ paddingBottom: 200 , paddingTop: 200}}>
              <h1 style={{color: 'orange'}}>Você recusou a proposta</h1>
              <h1 style={{color: 'orange', paddingBottom: 60}}>:(</h1>
              <h3>Mas não se preocupe, em breve terão outras para você poder escolher e aceitar!</h3>
              
            </Container>
            <Link style={{ color: 'white'}} to="/">
              <Button 
                id="analyse-proposal-refused-view"
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
      </Layout>
    )
  }
}

export default AnalyseProposalPage