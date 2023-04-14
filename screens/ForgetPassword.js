
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform, Image, TextInput, TouchableWithoutFeedback,Alert
} from 'react-native';

function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEmailValid = (email) => {
    // Regular expression to validate email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    return emailRegex.test(email);
  }


  const handleEmailChange = (text) => {
    setEmail(text);
    if (!text) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
    if (isEmailValid(text)) {
      setEmailError('');
    } else {
      setEmailError('Email is not valid');
    }


  }
  const [newPassword, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);//false means showing pasword
  const [passwordError, setPasswordError] = useState('');

  const passwordImage = showPassword
    ? require('../assets/password-show.png')//if false
    : require('../assets/password-hide.png')//otherwise

  const toggleShowPassword = (text) => {
    setPassword(text);
    if (!text) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
    setShowPassword(!showPassword);
  };
  //confirm password

  const [confirmpassword, confirmsetPassword] = useState('');
  const [confirmshowPassword, confirmsetShowPassword] = useState(false);//false means showing pasword
  const [confirmpasswordError, confirmsetPasswordError] = useState('');


  const confirmpasswordImage = confirmshowPassword
    ? require('../assets/password-show.png')//if false
    : require('../assets/password-hide.png')//otherwise


  const toggleConfirmShowPassword = (text) => {
    confirmsetPassword(text);
    if (!text) {
      confirmsetPasswordError('Password is required');
    } else {
      confirmsetPasswordError('');
    }
    confirmsetShowPassword(!confirmshowPassword);

  };

  const [checkequal, setcheckequal] = useState('');


  {/*fetch api for forget password*/ }
  const createNewPassword = async () => {
    try {

      const response = await fetch(
        `https://mobileback-diwisawi-production.up.railway.app/user/forget-password/` + email, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      }
      );
      const jsonk = await response.json();
      if (newPassword == confirmpassword) {
        setcheckequal('');

        console.log(email);
        console.log(newPassword);
        console.log(confirmpassword);

        console.log(checkequal);

        
        
        console.log(jsonk);
        console.log(jsonk.first_name);

      } else {
        setcheckequal('Passwords are not equal');
      }
      if (!(jsonk.length === 0)) { 
        navigation.navigate('Login'); 
      }else{
        Alert.alert(
          'Server Error',
          'Response is empty',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed')
            }
          ]
        );
      }

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.topic}>Create a new password</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="text"
          placeholderTextColor="#000"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Text style={{ color: 'red',marginLeft:30,marginBottom:10}}>{emailError}</Text>

        <View style={{ marginHorizontal: 25, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: 60 }}>
            <TextInput
              style={{ flex: 1, padding: 10, color: '#000' }}
              placeholder="New Password"
              placeholderTextColor="#000"
              keyboardType="text"
              secureTextEntry={!showPassword}
              value={newPassword}
              onChangeText={setPassword}
            />
            <TouchableWithoutFeedback onPress={toggleShowPassword}>
              <View style={{ padding: 10 }}>
                <Image source={passwordImage} style={{ width: 40, height: 24 }} />
              </View>
            </TouchableWithoutFeedback>
          </View></View>
        <Text style={{ color: 'red',marginLeft:30,marginBottom:10 }}>{passwordError}</Text>



        {/* Confirm Password */}
        <View style={{ marginHorizontal: 25, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: 60 }}>
            <TextInput
              style={{ flex: 1, padding: 10, color: '#000' }}
              placeholder="Confirm Password"
              placeholderTextColor="#000"
              keyboardType="text"
              secureTextEntry={!confirmshowPassword}
              value={confirmpassword}
              onChangeText={confirmsetPassword}
            />
            <TouchableWithoutFeedback onPress={toggleConfirmShowPassword}>
              <View style={{ padding: 10 }}>
                <Image source={confirmpasswordImage} style={{ width: 40, height: 24 }} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Text style={{ color: 'red',marginLeft:30,marginBottom:10 }}>{confirmpasswordError}</Text>
        <Text style={{ color: 'red',marginLeft:30,marginBottom:10}}>{checkequal}</Text>


        {/* Buttons */}

        <TouchableOpacity style={styles.button} onPress={createNewPassword}>
          <Text style={{ fontSize: 24, color: '#fff' }}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 24, color: '#fff' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,

  },
  topic: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    height: 60,
    marginHorizontal: 25,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    width: '88%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    height: 60,
    marginBottom: 20,
    borderRadius: 5,
  },
});
export default ForgetPassword;