import * as React from 'react'
import PrimaryContainerContainer from './components/PrimaryContainerContainer'

const PrimaryContainer: React.FC = (props) => {
  console.log(`*functional* PrimaryContainer`)
  const { children } = props
  return <PrimaryContainerContainer>{children}</PrimaryContainerContainer>
}

export default PrimaryContainer
