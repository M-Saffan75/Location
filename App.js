/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Location from './Screens/Location';
import Position from './Screens/Position';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Position" component={Position} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
