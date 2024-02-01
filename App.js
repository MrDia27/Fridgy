import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './components/Styles';
import Scanner from './components/Scanner';
import Home from './components/Home'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <SafeAreaView style={ Styles.container }>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={
              {
                headerStyle: {
                  backgroundColor: '#333',
                },
                headerTintColor: '#fff',
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }
            }>
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="Scanner" component={ Scanner } />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
}

