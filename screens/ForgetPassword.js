
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,Image,TextInput,TouchableWithoutFeedback
} from 'react-native';




function ForgetPassword({navigation}) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange=(text)=>{
        setEmail(text);
        if (!text) {
          setEmailError('Email is required');
        } else {
            setEmailError('');
        }
    }
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);//false means showing pasword
    const [passwordError, setPasswordError] = useState('');

    const passwordImage = showPassword
    ? require('../assets/password-show.png')//if true
    : require('../assets/password-hide.png')//otherwise
  
    const toggleShowPassword = (text) => {
        setPassword(text);
        if(!text){
setPasswordError('Password is required');
        }else{
            setPasswordError('');
        }
      setShowPassword(!showPassword);
    };
      //confirm password

      const [confirmpassword, confirmsetPassword] = useState('');
      const [confirmshowPassword, confirmsetShowPassword] = useState(false);//false means showing pasword
      const [confirmpasswordError, confirmsetPasswordError] = useState('');
      

      const confirmpasswordImage = confirmshowPassword
    ? require('../assets/password-show.png')//if true
    : require('../assets/password-hide.png')//otherwise
      
      
      const toggleConfirmShowPassword = (text) => {
        confirmsetPassword(text);
        if(!text){
confirmsetPasswordError('Password is required');
        }else{
            confirmsetPasswordError('');
        }
      confirmsetShowPassword(!confirmshowPassword);

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
<Text style={{ color: 'red' }}>{emailError}</Text>

<View style={{ marginHorizontal: 25, marginBottom: 20 }}>
<View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: 60 }}>
      <TextInput
        style={{ flex: 1, padding: 10 , color: '#000'}}
        placeholder="New Password"
        placeholderTextColor="#000"
        keyboardType="text"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={confirmsetPassword}
      />
      <TouchableWithoutFeedback onPress={toggleShowPassword}>
        <View style={{ padding: 10 }}>
        <Image  source={passwordImage} style={{ width: 40, height: 24 }} />
        </View>
      </TouchableWithoutFeedback>
    </View></View>
    <Text style={{ color: 'red' }}>{passwordError}</Text>



   {/* Confirm Password */}
    <View style={{ marginHorizontal: 25, marginBottom: 20 }}>
  <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, height: 60 }}>
    <TextInput
      style={{ flex: 1, padding: 10 , color: '#000'}}
      placeholder="Confirm Password"
      placeholderTextColor="#000"
      keyboardType="tpassword"
      secureTextEntry={!confirmshowPassword}
      value={confirmpassword}
      onChangeText={setPassword}
    />
    <TouchableWithoutFeedback onPress={toggleConfirmShowPassword}>
      <View style={{ padding: 10 }}>
        <Image source={confirmpasswordImage} style={{ width: 40, height: 24 }} />
      </View>
    </TouchableWithoutFeedback>
  </View>
</View>
<Text style={{ color: 'red' }}>{confirmpasswordError}</Text>



    {/* Buttons */}

           <TouchableOpacity style={styles.button} >
            <Text style={{fontSize: 24, color: '#fff'}}>Reset Password</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 24, color: '#fff'}}>Go Back</Text>
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