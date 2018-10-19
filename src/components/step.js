import React from 'react'
import { Step } from 'semantic-ui-react'



class TwoSteps extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      next: 'true',
    };
  }

  formPage = () => this.setState({next: false});
  submitPage = () => this.setState({next: true});

  render(){
    //{
    //this.state.next == false?
    //this.formPage()
    //:this.submitPage()
    //}

    return(
      
      <Step.Group items={[
        {
          key: 'Demanda',
          icon: 'file alternate outline',
          disabled: this.state.next, 
          title: 'Cadastro da demanda',
          // description: 'Preencher',
        },
        { 
          key: 'confirm', 
          disabled: !this.state.next, 
          icon: 'check', 
          title: 'Confirmar pedido' },
      ]} />
    )
  }
}

export default TwoSteps