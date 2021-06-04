import React, { useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/core';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ImageColors from 'react-native-image-colors'

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';



interface Props {
    pokemon: SimplePokemon
}


const windowsWidth = Dimensions.get('window').width

export const PokemonCard = ({ pokemon }: Props) => {

    const navigation = useNavigation()
    const [bgColor, setBgColor] = useState('gray')
    const isMounted = useRef(true)



    useEffect(() => {



        ImageColors.getColors(pokemon.picture, { fallback: 'gray' })
            .then(colors => {

                if (isMounted.current === false) return;

                (colors.platform === 'android')
                    ? setBgColor(colors.dominant || 'gray')
                    : setBgColor(colors.background || 'gray')
            })

        return () => {
            isMounted.current = false
        }
    }, [])


    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('PokemonScreen',
                { simplePokemon: pokemon, color: bgColor })}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowsWidth * 0.4,
                backgroundColor: bgColor
            }}>

                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>

                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        top: 10,
        left: 10
    },
    pokebolaContainer: {
        // backgroundColor:'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        overflow: 'hidden',
        right: 0,
        bottom: 0,
    },
    pokebola: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: -22,
        bottom: -22,
        opacity: 0.5
    },
    pokemonImage: {
        height: 100,
        width: 100,
        right: -20,
        bottom: 10
    }
});
