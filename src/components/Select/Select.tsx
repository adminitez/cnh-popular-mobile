import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

type items = {
    label: string
    value: string
}

type Props = {
    items: items[]
}

export function Select({items}: Props) {

    const SelectItems = items.map(({label, value}) => ({label: label, value: value} ))

    return (
        <RNPickerSelect 
            onValueChange={(value) => console.log(value)}
            items={SelectItems} 
        />
    );
};