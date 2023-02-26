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

function RegisterPage({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
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
            Register
          </Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            keyboardType="text"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            keyboardType="text"
            placeholderTextColor="#000"
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{fontSize: 24, color: '#fff'}}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              marginBottom: 20,
              marginLeft: 30,
              marginTop: 30,
            }}>
            Already have an account?
          </Text>
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
    marginBottom: 20,
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

export default RegisterPage;
