/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WelcomePage from './screens/WelcomePage';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import UpdatePage from './screens/UpdateUser';
import ForgetPassword from './screens/ForgetPassword';
import RegisterPage from './screens/RegisterPage';
import AllProjectsPage from './screens/AllProjectsPage';
import ProjectPage from './screens/ProjectPage';
import ProjectStepPage from './screens/ProjectStepPage';
import ProfilePage from './screens/ProfilePage';
import LoadingScreen from './screens/LoadingScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Stack = createNativeStackNavigator();

const App: () => Node = ({navigation}) => {
  const [userData, setUserData] = useState(null);

  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    async function loadUserDetail() {
      const storedUserDetail = await AsyncStorage.getItem('userDetail');
      if (storedUserDetail) {
        setUserDetail(await JSON.parse(storedUserDetail));
      }
      console.log(await JSON.parse(storedUserDetail));
    }
    loadUserDetail();
  }, []);

  useEffect(() => {}, [userDetail]);

  const primaryPage = userDetail !== null ? 'Home' : 'Welcome';

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={primaryPage}>
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
          name="Update"
          component={UpdatePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
