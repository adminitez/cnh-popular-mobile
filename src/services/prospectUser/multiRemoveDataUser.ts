import AsyncStorage from '@react-native-async-storage/async-storage'

export const multiRemoveDataUser = async () => {
  await AsyncStorage.multiRemove([
    '@APPLAUS:user',
    '@APPLAUS:token',
    '@APPLAUS:refreshToken'
  ])
}
