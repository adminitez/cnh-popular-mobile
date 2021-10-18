import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { Container, InputContainer, Span, EyeView } from './Input.styles'

type Props = TextInputProps & {
  name: string
  password?: boolean
}

export function Input({ name, password, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  function toogleIsPasswordVisible() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <Container>
      <Span>{name}</Span>
      <InputContainer
        secureTextEntry={password ? isPasswordVisible : false}
        {...rest}
      />

      {password && (
        <EyeView>
          <TouchableOpacity onPress={toogleIsPasswordVisible}>
            {isPasswordVisible ? (
              <Feather name="eye" size={24} color="#9a9a9c" />
            ) : (
              <Feather name="eye-off" size={24} color="#9a9a9c" />
            )}
          </TouchableOpacity>
        </EyeView>
      )}
    </Container>
  )
}
