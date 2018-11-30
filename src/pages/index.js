import React, { Component } from 'react'
import { Container, Image} from 'semantic-ui-react'
import Layout from '../components/layout'
//import {Image, Container} from 'semantic-ui-react'

class IndexPage extends Component{
  render() {
    return(
    
    <Layout>
        <Container textAlign="center">
          
          <Container textAlign='right'>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular/>
          </Container>
        </Container>
    </Layout>
    )
  }
}

export default IndexPage
