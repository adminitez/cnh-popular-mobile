import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar, View } from 'react-native'

import Routes from './src/routes'
import theme from './src/styles/theme/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Routes />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  )
}
