import React from 'react'

import { Container } from './ForgotPassword.styles'

import { Text, Button } from 'react-native'

import { Formik, ErrorMessage } from 'formik'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../../../routes/auth.routes'

import * as Yup from 'yup'

import { Input } from '../../../../components/input/Input'

type Props = StackNavigationProp<AuthStackParamList, 'ForgotPassword'>

interface MyFormValues {
  email: string
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Você deve escrever um email valido')
    .required('Email obrigatório')
})

export function ForgotPassword() {
  const navigation = useNavigation<Props>()

  const initialValues: MyFormValues = { email: ''}

  return (
    <Container>
      <Text>Esqueci minha Senha</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <Input
              name="Email"
              placeholder="Digite seu E-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <ErrorMessage name="email" render={(msg) => <Text>{msg}</Text>} />

            <Button onPress={() => navigation.navigate('ValidateToken')} title="Avançar"/>
          </>
        )}
      </Formik>
    </Container>
  )
}
