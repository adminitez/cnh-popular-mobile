import React from 'react'

import { Container } from './Notifications.styles'

import { Text, Button } from 'react-native'

// import { StackNavigationProp } from '@react-navigation/stack'
// import { LoggedStackParamList } from '../../../routes/app.routes'

// type Props = StackNavigationProp<LoggedStackParamList, 'Home'>

export function Notifications() {
  return (
    <Container>
      <Button onPress={() => {}} title="Avançar" />
      <Text>Notifications</Text>
    </Container>
  )
}
