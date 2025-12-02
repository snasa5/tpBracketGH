
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/AuthScreen';
import PoolsScreen from './src/screens/PoolsScreen';
import BracketScreen from './src/screens/BracketScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Pools" component={PoolsScreen} />
        <Stack.Screen name="Bracket" component={BracketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
