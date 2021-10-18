import React from 'react'

import { Container } from './ChangePassword.styles'

import { Text, Button } from 'react-native'

import { Formik, ErrorMessage } from 'formik'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../../../routes/auth.routes'

import * as Yup from 'yup'

import { Input } from '../../../../components/input/Input'

type Props = StackNavigationProp<AuthStackParamList, 'ChangePassword'>

interface MyFormValues {
  password: string
  confirmPassword: string
}

const schema = Yup.object().shape({
  password: Yup.string().required('Senha obrigatória'),
  confirmPassword: Yup.string().required('senha de confirmação obrigatória').when('password', {
            is: (password: string | undefined) => !!(password && password.length > 0),
            then: Yup.string().oneOf([Yup.ref('password')], 'Senhas não são iguais')
          })
})

export function ChangePassword() {
  const navigation = useNavigation<Props>()

  const initialValues: MyFormValues = { password: '',  confirmPassword: '' }

  return (
    <Container>
      <Text>Alterar Senha</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <Input
              name="password"
              password
              placeholder="Digite sua nova senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <ErrorMessage
              name="password"
              render={(msg) => <Text>{msg}</Text>}
            />

            <Input
              name="confirm password"
              password
              placeholder="Confirme sua nova sua senha"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            <ErrorMessage
              name="confirmPassword"
              render={(msg) => <Text>{msg}</Text>}
            />

            <Button onPress={handleSubmit as any} title="Alterar Senha" />
          </>
        )}
      </Formik>
    </Container>
  )
}
