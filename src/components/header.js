import React from 'react'
import { Link } from 'gatsby'
import { Image, Grid } from 'semantic-ui-react'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#FC8755' }}>
    <Grid columns={2} verticalAlign='middle'>
        <Grid.Column textAlign='left' verticalAlign='middle'>
          <h1 style={{ padding: '0px 50px' }}>
            <Link style={{ color: 'white' }} to="/">{siteTitle}</Link>
          </h1>
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
            <Image src='https://www.ringtonez.app/amp/ensof/pr.png' size='tiny' floated='right'/>
        </Grid.Column>
    </Grid>
  </div>
)

export default Header
