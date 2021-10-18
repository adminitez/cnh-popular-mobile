import React from 'react'

import {
    Container,
    Content,
    TextView,
    RadioButtonItem,
    RadioButtonSelected,
    SelectView,
} from './RadioButton.styles'

type Props = {
    onPress?: () => void
    isActive: boolean
    showRadioButton: boolean
    text: string
}

export function RadioButton({onPress, isActive, showRadioButton, text}: Props) {
    return(
        <Container>
            <Content>
                {showRadioButton &&
                <SelectView>
                    <RadioButtonItem onPress={onPress}>
                        {isActive &&
                        <RadioButtonSelected />
                        }
                    </RadioButtonItem>
                </SelectView>
                }
            </Content>
        </Container>
    )
}