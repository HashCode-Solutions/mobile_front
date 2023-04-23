import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({route, navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = email => {
    // Regular expression to validate email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  };

  const loginPress = async () => {
    if (email == '' || password == '') {
      Alert.alert('Empty fields', 'Fill all fields', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert('Check Your Email', 'Email Should be valid !', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    const loginBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        `https://mobileback-diwisawi-production.up.railway.app/login`,
        {
          method: 'POST', // GET, POST, PUT, DELETE
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(loginBody),
        },
      );

      const jsonRes = await response.json();

      console.log(jsonRes.first_name);

      if (!response.ok) {
        Alert.alert('Something Went wrong', 'Try Again !', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
        return;
      }

      let userDetail = jsonRes;

      await AsyncStorage.setItem('userDetail', JSON.stringify(userDetail));

      await navigation.navigate('Home', {userDetail});
    } catch (error) {
      console.error(error);
      Alert.alert('Something Went wrong', error.message, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
  };

  return (
    <ScrollView>
      <View style={styles.topPadding}>
        <View
          style={[
            styles.imageContainer,
            {
              width: windowWidth,
              flex: 1,
            },
          ]}>
          <Image
            style={styles.loginImage}
            source={require('../assets/vines-branch.png')}
          />
        </View>

        <View style={{top: -300}}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 35,
              marginBottom: 50,
            }}>
            Login
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={txt => setEmail(txt)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            onChangeText={txt => setPassword(txt)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={loginPress}>
            <Text style={{fontSize: 24, color: '#fff'}}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              marginBottom: 20,
              marginLeft: 30,
              marginTop: 30,
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 24, color: '#fff'}}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                marginBottom: 20,
                marginLeft: 30,
                marginTop: 30,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topPadding: {},
  imageContainer: {},
  loginImage: {
    width: '100%',
  },
  input: {
    height: 60,
    marginHorizontal: 25,
    marginBottom: 50,
    borderWidth: 1,
    padding: 10,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#000',
    width: '88%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    height: 60,
    borderRadius: 5,
  },
});

export default LoginPage;
