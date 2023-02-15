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
import { RootStackParamList } from './types/route';
import { ICategory } from './models/category';
import { CATEGORIES } from './data/dummy-data';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import { colors } from './styles/main';
import DrawerNavigator from './components/DrawerNavigator';
import FavoritesContextProvider from './store/context/favoritesContext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <FavoritesContextProvider>
        <NavigationContainer >
        <Provider store={store}>

          <Stack.Navigator
            screenOptions={{
              title: 'Meal Categories',
              headerStyle: { backgroundColor: colors.dark },
              headerTintColor: colors.white,
              contentStyle: { backgroundColor: colors.primary },
            }}
            initialRouteName="DrawerNavigator">
              <Stack.Screen
                options={{ headerShown: false }}
                name='DrawerNavigator'
                component={DrawerNavigator} />
              <Stack.Screen
                options={({ route }) => {
                  const categoryName: string =
                    CATEGORIES.filter((cateogry: ICategory) => {
                      return cateogry.id == route.params.categoryId
                    })[0].title
                  return {
                    title: categoryName
                  }
                }}
                name='MealsOverview'
                component={MealsOverviewScreen} />
              <Stack.Screen
                name="MealsDetails"
                component={MealsDetailsScreen} />
          </Stack.Navigator>
          </Provider>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
};

export default App;
