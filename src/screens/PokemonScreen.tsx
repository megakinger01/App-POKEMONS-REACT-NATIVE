import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParms } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';


interface Props extends StackScreenProps<RootStackParms, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {


    const { top } = useSafeAreaInsets()

    const { simplePokemon, color } = route.params
    const { id, name, picture } = simplePokemon

    const { isLoading, pokemon } = usePokemon(id)
    // console.log(pokemon);

    return (
        <View style={{ flex: 1 }}>

            {/* HEADER CONTAINER */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>

                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{ ...styles.btnBack, top: top + 10 }}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>

                {/* NOMBRE DEL POKEMON  */}
                <Text style={{ ...styles.pokeName, top: top + 45 }}>
                    {name + '\n'} #{id}
                </Text>

                {/* POKEBOLA FONDO */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{ ...styles.pokeball }}
                />

                {/* POKEMON */}

                <FadeInImage
                    uri={picture}
                    style={{ ...styles.pokemon }}
                />

            </View>

            {
                isLoading
                    ?
                    (
                        <View style={{ ...styles.loadIndicator }}>
                            <ActivityIndicator
                                size={50}
                                color={color}
                            />
                        </View>
                    )

                    : <PokemonDetails pokemon={pokemon} />
            }





        </View>
    )
}


const styles = StyleSheet.create({

    headerContainer: {
        height: 350,
        borderBottomEndRadius: 1000,
        borderBottomStartRadius: 1000,
        zIndex: 999,
        alignItems: 'center',
    },
    btnBack: {
        position: 'absolute',
        left: 20
    },
    pokeName: {
        fontSize: 25,
        color: "white",
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -35,
        opacity: 0.7,
    },
    pokemon: {
        height: 200,
        width: 200,
        position: 'absolute',
        bottom: -12
    },
    loadIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
