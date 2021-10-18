import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

// import AsyncStorage from '@react-native-async-storage/async-storage'
import { multiRemoveDataUser } from '../services/prospectUser/multiRemoveDataUser'
import { UserDTO } from '../dtos/UserDTO'

interface AuthState {
  customer: UserDTO
  token: string
}
interface signInCredentials {
  email: string
  password: string
}
interface AuthContextData {
  loading: boolean
  user: UserDTO
  signIn(credentials: signInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider(children: ReactNode) {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      // const [token, user] = await AsyncStorage.multiGet([
      //   '@APPLAUS:token',
      //   '@APPLAUS:user'
      // ])
      // if (token[1] && user[1]) {
      //   setData({ token: token[1], customer: JSON.parse(user[1]) })
      // }
      setLoading(false)
    }
    loadStoragedData()
  }, [data])

  const signIn = useCallback(async ({ email, password }) => {
    // adicionar o service
    // const response = await AuthService({ email, password })
    // const { customer, token, refreshToken } = response
    // await AsyncStorage.multiSet([
    //   ['@APPLAUS:token', token],
    //   ['@APPLAUS:refreshToken', refreshToken],
    //   ['@APPLAUS:user', JSON.stringify(customer)]
    // ])
    // setData({ customer, token })
  }, [])

  const signOut = useCallback(async () => {
    await multiRemoveDataUser()
    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.customer,
        signIn,
        signOut,
        loading
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
