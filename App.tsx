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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverviewScreen from './screens/MeelsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import { RootStackParamList } from './types/route';

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <NavigationContainer >
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
