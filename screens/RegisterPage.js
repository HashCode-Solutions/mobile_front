import React, {useState} from 'react';
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

import axios from 'axios';

function RegisterPage({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerPress = async () => {
    // () => navigation.navigate('Home');
    const registerBody = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobile,
      email: email,
      password: password,
    };
    const jStrRegisterBody = JSON.stringify(registerBody);

    // try {
    //   const response = await fetch(
    //     `http://192.168.43.167:3000/register`,
    //   );
    //   const json = await response.json();

    // } catch (error) {
    //   console.error(error);
    // }

    axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // try {
    //   const response = await axios.post(
    //     'http://192.168.43.167:3000/register',
    //     jStrRegisterBody,
    //     axiosConfig,
    //   );
    //   if (response.ok) {
    //     const objRes = response.json();
    //     console.log(objRes);
    //   } else {
    //     const objRes = response.json();
    //     console.log(objRes);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    // try {
    //   await fetch(`http://192.168.43.167:3000/register`, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     // mode: "cors", // no-cors, *cors, same-origin
    //     // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     // credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     // redirect: "follow", // manual, *follow, error
    //     // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify(registerBody), // body data type must match "Content-Type" header
    //   })
    //     .then(response => response.json())
    //     .then(response => {
    //       if (response.ok) {
    //         console.log(response.token);
    //       } else {
    //         console.log(response);
    //       }
    //     });
    // } catch (error) {
    //   console.error(error);
    // }
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
            Register
          </Text>
          <TextInput
            id="fName"
            style={styles.input}
            placeholder="First Name"
            keyboardType="text"
            placeholderTextColor="#000"
            onChangeText={newText => setFirstName(newText)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            keyboardType="text"
            placeholderTextColor="#000"
            onChangeText={newText => setLastName(newText)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
            placeholderTextColor="#000"
            onChangeText={newText => setMobile(newText)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="text"
            placeholderTextColor="#000"
            onChangeText={newText => setEmail(newText)}
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
            onChangeText={newText => setPassword(newText)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={registerPress}>
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

export default RegisterPage;
