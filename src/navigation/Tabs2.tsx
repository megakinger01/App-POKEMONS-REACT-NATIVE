import React from 'react'
import { RootStackParms } from './Tabs1';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';



const Stack = createStackNavigator<RootStackParms>();

export const Tabs2 = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );

}
