import React, { Component } from 'react'
import { Grid, Container, Image} from 'semantic-ui-react'
import Layout from '../components/layout'
//import {Image, Container} from 'semantic-ui-react'

class IndexPage extends Component{
  render() {
    return(
    /*Site name on: src/components/layout->header*/

    <Layout>
      <Grid columns={2}>
          <Grid.Row>
            <Grid.Column textAlign='left'>
              <p> Que tal contratar pessoas para realizarem serviços para você?</p>
            </Grid.Column>
            <Grid.Column textAlign='left'>
              <Image src='https://www.ringtonez.app/amp/ensof/pr.png' size='massive'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Layout>
    )
  }
}

export default IndexPage
