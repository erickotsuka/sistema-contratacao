import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class PersonCard extends Component {
  constructor(props) {
    super(props)

    props = {
      image: '',
      name: '',
      job: '',
      description: '',
      link: '#',
    }
  }

  render() {
    return (
      <Card
        image={this.props.image}
        header={this.props.name}
        meta={this.props.job}
        description={this.props.description}
        href={this.props.link}
      />
    )
  }
}

export default PersonCard
