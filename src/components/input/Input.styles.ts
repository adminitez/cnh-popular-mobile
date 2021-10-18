import styled from 'styled-components/native'

import { TextInput } from 'react-native'

export const Container = styled.View`
  width: 100%;
`

export const Span = styled.Text`
  align-items: flex-start;
`

export const InputContainer = styled(TextInput)`
  height: 60px;
  border-radius: 15px;
  background-color: #f1f1f3 ;
  justify-content: center;
  padding: 15px;
  font-size: 16px;
`

export const EyeView = styled.View`
  position: absolute;
  right: 10px;
  bottom: 17px;
  justify-content: center;

`
