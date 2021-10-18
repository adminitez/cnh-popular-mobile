import React from 'react'

import { Container } from './Home.styles'

import { Text, Button } from 'react-native'

// import { StackNavigationProp } from '@react-navigation/stack'
// import { LoggedStackParamList } from '../../../routes/app.routes'

// type Props = StackNavigationProp<LoggedStackParamList, 'Home'>

export function Home() {
  return (
    <Container>
      <Button onPress={() => {}} title="Avançar" />
      <Text>Home</Text>
    </Container>
  )
}
