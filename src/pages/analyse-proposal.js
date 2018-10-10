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
  descricao: 'Descrição Lorem Ipsum. Non ut amet irure ipsum ut excepteur eu sit. Deserunt ea pariatur amet fugiat non. In incididunt nostrud aliquip consequat tempor minim in duis excepteur Lorem et in amet sit. Amet aliquip elit ullamco eu. Mollit esse ex anim reprehenderit aute ut cillum elit aliquip. Duis velit incididunt sunt laborum sit nulla cupidatat qui. Eu officia dolor sint Lorem pariatur adipisicing tempor adipisicing in.',
  entregas: ['Fazer as telas', 'Fazer o tema', 'foo bar'],
  prazo: { inicio: new Date('01/01/2018'), fim: new Date('01/01/2019') },
  equipe: [ new IntegranteEquipe('Erick', 'desenvolvedor', 'https://react.semantic-ui.com/images/avatar/small/matthew.png'),
            new IntegranteEquipe('João', 'desenvolvedor', 'https://react.semantic-ui.com/images/avatar/small/matthew.png'),
            new IntegranteEquipe('Lucas', 'desenvolvedor', 'https://react.semantic-ui.com/images/avatar/small/matthew.png')],
  aceito: false
}

export default class AnalyseProposalPage extends Component {
  render() {
    return (
      <Layout>
        {
          <Container textAlign='justified'>
            <div>
              <Header as='h1'>{servico.nome}</Header>
              <Message textAlign='' >{servico.descricao}</Message>
            </div>
            <Divider section></Divider>
            <div>
              <Header as='h2'>Entregas</Header>
              <List relaxed>
                { 
                  servico.entregas.map(function(descricaoEntrega, index) {
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
              <p>Início: {servico.prazo.inicio.toLocaleDateString()} Fim: {servico.prazo.fim.toLocaleDateString()}</p>
            </div>
            <Divider section></Divider>
            <div>
              <Header as='h2'>Equipe</Header>
              <List>
                {
                  servico.equipe.map(function(integrante){
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
            <div>
              <Button floated='left'  >Não aceitar</Button>
              <Button positive floated='right' >Aceitar e Contratar</Button>
            </div>
          </Container>
        }
      </Layout>
    )
  }
}