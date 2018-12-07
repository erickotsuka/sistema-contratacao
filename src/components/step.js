import React from 'react'
import { Step } from 'semantic-ui-react'



class TwoSteps extends React.Component {
  
  //constructor(props) {
  //  super(props);
    //this.state = {mode: 'fillDemand'};
  //}

  //fillForm = () => this.setState({mode: 'fillDemand'});
  //viewForm = () => this.setState({mode: 'viewDemand'});

  render(){

    return(

      <Step.Group items={[
        {
          key: 'Demanda',
          icon: 'file alternate outline',
          disabled: this.props.showDemand, 
          title: 'Cadastro da demanda',
          // description: 'Preencher',
        },
        { 
          key: 'confirm', 
          disabled: !this.props.showDemand,
          icon: 'check', 
          title: 'Confirmar pedido' },
      ]} />
    )
  }
}

export default TwoSteps