import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Grid, Container, Image} from 'semantic-ui-react'
import Layout from '../components/layout'


class IndexPage extends Component{
  render() {
    return(
    /*Site name on: src/components/layout->header*/
    <div style={{ background: '#FFFFFF', padding: "0px 0px"}}>
      <Layout/>
      
      <div style={{ background: '#444444' }}>
        <Image src='https://www.ringtonez.app/amp/ensof/home5.png' fluid centered/>
      </div>
      <div style={{ background: '#444444' }}>
        <Grid columns={2} verticalAlign='middle'>
          <Grid.Column textAlign='left' verticalAlign='middle'>
            <h1 style={{ padding: '0px 50px' }}>
              <Link style={{ color: 'white' }} to="/">{"Oi Kaique"}</Link>
            </h1>
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Image src='https://www.ringtonez.app/amp/ensof/pr.png' size='large' centered/>
          </Grid.Column>
        </Grid>
      </div>
    </div>

    
    )
  }
}

export default IndexPage
