import React from 'react'

import { Container } from './Landing.styles'

import { Text, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../../routes/auth.routes'

type Props = StackNavigationProp<AuthStackParamList, 'Landing'>

export function Landing() {
  const navigation = useNavigation<Props>()

  return (
    <Container>
      <Button onPress={() => navigation.navigate('SignIn')} title="Avançar" />
      <Text>Landing</Text>
    </Container>
  )
}
