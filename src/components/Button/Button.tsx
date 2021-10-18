import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    ButtonText,
} from './Button.styles'

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest}: Props) {
    return(
        <Container>
            <ButtonText>
                {title}
            </ButtonText>
        </Container>
    )
}