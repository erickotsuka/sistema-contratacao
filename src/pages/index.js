import React, { Component } from 'react'
import { Grid, Container, Image} from 'semantic-ui-react'
import Layout from '../components/layout'
//import {Image, Container} from 'semantic-ui-react'

class IndexPage extends Component{
  render() {
    return(
    /*Site name on: src/components/layout->header*/
    <div style={{ background: '#FFFFFF', padding: "0px 0px"}}>
      <Layout>
        <Grid columns={2}>
            <Grid.Row>
              <Grid.Column textAlign='left'>
              <Image src='https://www.ringtonez.app/amp/ensof/home.png' size='big'/>
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <Image src='https://www.ringtonez.app/amp/ensof/pr.png' size='big'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Layout>
      <div style={{ background: '#444444' }}>
        <Container textAlign='left'>
          <Image src='https://www.ringtonez.app/amp/ensof/pr.png' size='large' centered/>
        </Container>
      </div>
    </div>

    
    )
  }
}

export default IndexPage
