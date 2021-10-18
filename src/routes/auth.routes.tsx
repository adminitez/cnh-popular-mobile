import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../pages/UserAuth/SignIn/SignIn'
import { ForgotPassword } from '../pages/UserAuth/RecoverPassword/ForgotPassword/ForgotPassword'
import { ValidateToken } from '../pages/UserAuth/RecoverPassword/ValidateToken/ValidateToken'
import { ChangePassword } from '../pages/UserAuth/RecoverPassword/ChangePassword/ChangePassword'

import { View } from 'react-native'

export type AuthStackParamList = {
  SignIn: undefined
}

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>()

export default function AuthRoutes() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </View>
  )
}
