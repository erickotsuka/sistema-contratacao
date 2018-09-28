import React from 'react'
import { Step } from 'semantic-ui-react'

const steps = [
  {
    key: 'Demanda',
    icon: 'file alternate outline',
    disabled: false, 
    title: 'Cadastro da demanda',
    // description: 'Preencher',
  },
  { 
    key: 'confirm', 
    disabled: true, 
    icon: 'check', 
    title: 'Confirmar pedido' },
]

const TwoSteps = () => (
    <Step.Group items={steps} />
)

export default TwoSteps