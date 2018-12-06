import React from 'react'
import { Step } from 'semantic-ui-react'



class TwoSteps extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {mode: 'fillDemand'};
  }

  step = false;
  //formPage = () => this.setState({next: false});
  //submitPage = () => this.setState({next: true});

 

  render(){

    const fillDemand = this.state.mode === 'fillDemand';

    return(

      <Step.Group items={[
        {
          key: 'Demanda',
          icon: 'file alternate outline',
          disabled: !fillDemand, 
          title: 'Cadastro da demanda',
          // description: 'Preencher',
        },
        { 
          key: 'confirm', 
          disabled: fillDemand, 
          icon: 'check', 
          title: 'Confirmar pedido' },
      ]} />
    )
  }
}

export default TwoSteps