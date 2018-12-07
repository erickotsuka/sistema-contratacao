import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Grid, Container, Button, Image} from 'semantic-ui-react'
import Layout from '../components/layout'


class IndexPage extends Component{
  render() {
    return(
    /*Site name on: src/components/layout->header*/
    <div style={{ background: '#FFFFFF', padding: "0px 0px"}}>
      <Layout/>
      
      <Container fluid style={{ background: '#444444'}}>
        <Image src='https://www.ringtonez.app/amp/ensof/home5.png' fluid centered/>
      </Container>
      
      <Container fluid style={{ background: 'white'}}>
        <Image src='https://www.ringtonez.app/amp/ensof/divider1.png' fluid centered/>
      </Container>

      <Container fluid style={{ background: '#444444' }}>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column textAlign='left' verticalAlign='middle' style={{ color: 'white', padding: '80px 10px'}}>
            <h1 style={{ padding: '10px 50px' }}>
              <Container style={{ padding: '10px 10px'}} textAlign='left'>O maior site de recrutamento de talentos para realização de serviços.</Container> 
              <Container style={{ padding: '10px 10px'}} textAlign='left'>São mais de 10.000 profissionais capacitados para trabalhar já!</Container>

              <Container textAlign='center' style={{ color: 'white', padding: '40px 10px'}}>
                <Link style={{ color: 'white'}} to="/publish-demand">
                    <Button color='orange' size='large'>
                      <div style={{ color: 'white' }}>Começar agora</div>
                    </Button>
                  </Link>
              </Container>
            </h1>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Image src='https://www.ringtonez.app/amp/ensof/home6.png' size='medium' centered/>
          </Grid.Column>
        </Grid>
      </Container>

      <Container textAlign='right' fluid style={{ background: '#333333', padding: '30px 50px'}}>
        <p textAlign='right' style={{color: 'white'}}>Copyright © 2018 by Tokosono</p>
      </Container>
    </div>
    )
  }
}

export default IndexPage
