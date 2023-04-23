/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WelcomePage from './screens/WelcomePage';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import ForgetPassword from './screens/ForgetPassword';
import RegisterPage from './screens/RegisterPage';
import AllProjectsPage from './screens/AllProjectsPage';
import ProjectPage from './screens/ProjectPage';
import ProjectStepPage from './screens/ProjectStepPage';
import ProfilePage from './screens/ProfilePage';
import MarketRatesPage from './screens/MarketRatesPage';
import SingalItemPriceRatePage from './screens/SingalItemPriceRatePage';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProjectsPage"
          component={AllProjectsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProjectPage"
          component={ProjectPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProjectStepPage"
          component={ProjectStepPage}
          options={{headerTitle: 'Steps'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{headerTitle: 'Profile'}}
        />
        <Stack.Screen
          name="Forget"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Market Rates"
          component={MarketRatesPage}
          options={{headerShown: 'Market Rates'}}
        />
        <Stack.Screen
          name="Price Rates"
          component={SingalItemPriceRatePage}
          options={{headerShown: 'Price Rates'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
