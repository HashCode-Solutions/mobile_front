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

function RegisterPage({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [userData, setUserData] = useState(null);

  const registerPress = async () => {
    const isEmailValid = email => {
      // Regular expression to validate email address
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      return emailRegex.test(email);
    };
    // () => navigation.navigate('Home');
    const registerBody = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobile,
      email: email,
      password: password1,
    };

    if (firstName == '' || lastName == '' || mobile == '' || password1 == '') {
      Alert.alert('Empty firlds', 'Fill all fields', [
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
    if (password1 !== password2) {
      Alert.alert("Password Doesn't match", 'Try again!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }

    try {
      const response = await fetch(
        `https://mobileback-diwisawi-production.up.railway.app/register`,
        {
          method: 'POST', // GET, POST, PUT, DELETE
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(registerBody),
        },
      );

      const jsonRes = await response.json();

      if (!response.ok) {
        Alert.alert('Something Went wrong', 'Try Again !', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
        return;
      }

      navigation.navigate('Login', {jsonRes});
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
            onChangeText={pw => setPassword1(pw)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            onChangeText={pw => setPassword2(pw)}
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
