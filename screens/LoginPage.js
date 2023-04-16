import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function LoginPage({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const userDetails = {
    name: 'john',
    imgUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: 'sample',
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
            placeholder="Phone Number"
            keyboardType="numeric"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home', {userDetails})}>
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
