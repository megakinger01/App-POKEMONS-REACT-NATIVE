import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/theme';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { simplePokemonList, loadPokemons } = usePokemonPaginated()
    // console.log(simplePokemonList);

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <FlatList
                data={simplePokemonList}
                keyExtractor={(pok) => pok.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <Text
                        style={{
                            ...styles.title,
                            top: top + 20,
                            marginHorizontal: 10,
                            marginBottom: 20 + top
                        }}>
                        Pokedex
                        </Text>}
                numColumns={2}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}


                // INFINITE SCROLL
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}


                // INDICADOR DE CARGA CUANDO VA LLEGANDO AL FINAL
                ListFooterComponent={(
                    <ActivityIndicator size={20} color="grey" style={{ height: 100 }} />
                )}

            />








            {/*     */}
        </>
    )
}
