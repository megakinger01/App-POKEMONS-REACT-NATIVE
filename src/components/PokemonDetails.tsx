import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{ ...StyleSheet.absoluteFillObject }}
            showsVerticalScrollIndicator={false}

        >
            {/* TYPES DE POKEMON*/}
            <View style={styles.container} >

                <Text style={{ ...styles.title }}>Types</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                key={type.name}
                                style={{ ...styles.infoText, marginHorizontal: 10 }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                <Text style={{ ...styles.title }}>Peso</Text>
                <Text style={{ ...styles.infoText }}>{pokemon.weight}.Kg</Text>
            </View>



            {/* TYPES Y PESO DEL POKEMON*/}
            <View style={{ ...styles.container, marginTop: 20 }} >
                <Text style={{ ...styles.title }}>Sprites</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />

                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />


                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>

            </View>

            {/* HABILIDADES DE POKEMON*/}
            <View style={{ ...styles.container, marginTop: 20 }} >

                <Text style={{ ...styles.title }}>Habilidades</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{ ...styles.infoText, marginHorizontal: 10 }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>

            </View>


            {/* movimientos DEL POKEMON*/}
            <View style={{ ...styles.container, marginTop: 20 }} >

                <Text style={{ ...styles.title }}>Moves</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{ ...styles.infoText, marginHorizontal: 10 }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>

            </View>

            {/* STATS DEL POKEMON*/}
            <View style={{ ...styles.container, marginTop: 20 }} >

                <Text style={{ ...styles.title }}>Stats</Text>

                <View  >
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{ width: 150, fontSize: 15 }}
                                >
                                    {stat.stat.name}
                                </Text>

                                <Text
                                    style={{ fontSize: 15, fontWeight: 'bold' }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>

            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10
            }}>

                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={{ ...styles.basicSprite }}
                />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 350,
        marginHorizontal: 20,

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    infoText: {
        fontSize: 19
    },
    basicSprite: {
        height: 100,
        width: 100
    }

});
