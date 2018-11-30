import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Image, Container, Grid, Menu } from 'semantic-ui-react'

import Header from './header'

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'working contract platform' },
            { name: 'keywords', content: 'contract, find workers, do project' },
          ]}
        />

       {/* <Header siteTitle={data.site.siteMetadata.title} />*/}
       <Header siteTitle={"TOKO"} />
       
        <Container fluid>
          <Container fluid style={{padding: "0px 0px"}}>
            <Grid fluid stackable>
              <Grid.Row mobile={4} tablet={4} computer={4}>
                <Menu horizontal fluid style={{padding: "0px 15px"}}>
                  <LinkedItem to="/">
                    Home
                  </LinkedItem>
                  <LinkedItem to="/publish-demand" >Publicar demanda</LinkedItem>
                  <LinkedItem to="/submit-proposal">Submeter proposta</LinkedItem>
                  <LinkedItem to="/analyse-proposal">
                    Analisar proposta
                  </LinkedItem>
                </Menu>
              </Grid.Row>
            </Grid>
          </Container>
    
        </Container>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
