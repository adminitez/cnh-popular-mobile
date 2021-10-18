import styled, { css } from 'styled-components/native'


export const Container = styled.View`
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`
export const TextView = styled.View`
    margin-left: ${({theme}) => theme.spacing.inline.small};
`

export const SelectView = styled.View``

export const RadioButtonItem = styled.TouchableOpacity`
  height: ${({theme}) => theme.spacing.stack.xxs};
  width: ${({theme}) => theme.spacing.inline.xxs};

  border-radius: 12px;
  border-width: 2px;
  border-color: ${({theme}) => theme.color.brand.tertiary.nth2};

  align-items: center;
  justify-content: center;
`

export const RadioButtonSelected = styled.View`
  height: 12px;
  width: 12px;

  border-radius: 6px;

  background-color: ${({theme}) => theme.color.brand.tertiary.nth2};
`
