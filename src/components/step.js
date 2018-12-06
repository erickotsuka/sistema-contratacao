import React from 'react'
import { Step } from 'semantic-ui-react'



class TwoSteps extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {mode: 'fillDemand'};
  }

  step = false;
  //fillForm = () => this.setState({mode: 'fillDemand'});
  //viewForm = () => this.setState({mode: 'viewDemand'});

  render(){

    const fillDemand = this.state.mode === 'fillDemand';

    return(

      <Step.Group items={[
        {
          key: 'Demanda',
          icon: 'file alternate outline',
          //disabled: !fillDemand, 
          disabled: this.props.showDemand, 
          title: 'Cadastro da demanda',
          // description: 'Preencher',
        },
        { 
          key: 'confirm', 
          //disabled: !fillDemand, 
          disabled: !this.props.showDemand,
          icon: 'check', 
          title: 'Confirmar pedido' },
      ]} />
    )
  }
}

export default TwoSteps