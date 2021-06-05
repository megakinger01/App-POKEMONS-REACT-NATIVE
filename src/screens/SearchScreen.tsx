import React, { useEffect, useState } from 'react'
import { Platform, View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';



export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()
    const [term, setTerm] = useState('')

    const [pokemopnFiltered, setPokemopnFiltered] = useState<SimplePokemon[]>([])

    useEffect(() => {
        if (term.length === 0) {
            return setPokemopnFiltered([])
        }

        if (isNaN(Number(term))) {
            setPokemopnFiltered(

                simplePokemonList.filter(poke => poke.name.toLocaleLowerCase()
                    .includes(term.toLocaleLowerCase())
                )
            )
        } else {
            const pokemonByID = simplePokemonList.find(poke => poke.id === term)
            setPokemopnFiltered(
                (pokemonByID) ? [pokemonByID] : []
            )
        }

    }, [term])





    if (isFetching) {
        return (
            <View style={styles.activityContainer}>
                <ActivityIndicator
                    size={50}
                    color="grey"
                />
                <Text>Cargando...</Text>
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20
        }}>
            <SearchInput
                onDebounced={(value) => setTerm(value)}
            />

            <FlatList
                data={pokemopnFiltered}
                keyExtractor={(pok) => pok.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            top: top + 20,
                            marginHorizontal: 10,
                            marginBottom: 20 + top
                        }}>
                        {term}
                    </Text>}
                numColumns={2}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});
