import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.color.others.typea};

  padding: 24px;
`
export const LogoPhoto = styled.Image`
  width: 100%;
  height: 25%;
  margin-bottom: 40px;
`
export const Content = styled.View`
  width: 100%;
  height: 60%;
  justify-content: space-between;

`
export const FormView = styled.View`

  margin-top: 70px;

`
