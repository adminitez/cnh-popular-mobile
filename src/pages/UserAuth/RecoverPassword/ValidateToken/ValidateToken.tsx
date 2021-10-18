import React from 'react'

import { Container } from './ValidateToken.styles'

import { KeycodeInput } from 'react-native-keycode'

import { Formik, ErrorMessage } from 'formik'

import { Text, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../../../routes/auth.routes'

import * as Yup from 'yup'


type Props = StackNavigationProp<AuthStackParamList, 'ValidateToken'>

interface MyFormValues {
  validateToken: string
}

const schema = Yup.object().shape({
  validateToken: Yup.string().required('Token Obrigatório')
})

export function ValidateToken() {
  const navigation = useNavigation<Props>()

  const initialValues: MyFormValues = { validateToken: ''}

  return (
    <Container>
      <Text>Esqueci minha Senha'</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <KeycodeInput
              length={6}
              tintColor="black"
              numeric={true}
              alphaNumeric={false}
              onChange={handleChange('password')}
              value={values.validateToken}
            />
            <ErrorMessage
              name="validateToken"
              render={(msg) => <Text>{msg}</Text>}
            />

            <Button onPress={handleSubmit as any} title="Prosseguir" />
          </>
        )}
      </Formik>

    </Container>
  )
}
