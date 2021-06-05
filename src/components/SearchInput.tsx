import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';



interface Props {
    onDebounced: (value: string) => void
}

export const SearchInput = ({ onDebounced }: Props) => {

    const [textValue, setTextValue] = useState('')
    // console.log(textValue);


    const debouncedValue = useDebouncedValue(textValue)

    useEffect(() => {

        onDebounced(debouncedValue)

    }, [debouncedValue])

    return (
        <View style={styles.container}>
            <View style={styles.Background}>
                <TextInput
                    placeholder="Buscar pokémon"
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setTextValue}
                />

                <Icon
                    name="search-outline"
                    size={25}
                    color="grey"
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor:'red'
    },
    Background: {
        backgroundColor: "#F3F1F3",
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,

    },
    textInput: {
        flex: 1,
        fontSize: 18
    }
});