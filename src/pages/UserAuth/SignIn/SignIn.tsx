import React from 'react'

import { 
  Container,
  LogoPhoto,
  Content,
  FormView,
} from './SignIn.styles'

import { Text } from 'react-native'

import { Formik, ErrorMessage } from 'formik'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../../../routes/auth.routes'

import * as Yup from 'yup'

import CNHPOP from '../../../assets/CNHPOP.png'

import { Input } from '../../../components/input/Input'
import { Button } from '../../../components/Button/Button'

type Props = StackNavigationProp<AuthStackParamList, 'SignIn'>

interface MyFormValues {
  email: string
  password: string
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Você deve escrever um e-mail valido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória')
})

export function SignIn() {
  const navigation = useNavigation<Props>()

  const initialValues: MyFormValues = { email: '', password: '' }

  return (
    <Container>
      <LogoPhoto resizeMode="contain" source={CNHPOP}  />
      <Content>
        <FormView>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={schema}>
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Input
                name=""
                placeholder="Digite seu E-mail"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <ErrorMessage name="email" render={(msg) => <Text>{msg}</Text>} />

              <Input
                name=""
                password
                placeholder="Digite sua senha"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <ErrorMessage
                name="password"
                render={(msg) => <Text>{msg}</Text>}
              />

              
            </>
          )}
        </Formik>
        </FormView>
        <Button title="Faça Login" onPress={() => {}} /> 
      </Content>
    </Container>
  )
}
