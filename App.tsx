/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
