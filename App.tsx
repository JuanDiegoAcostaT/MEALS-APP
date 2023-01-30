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


const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <CategoriesScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
