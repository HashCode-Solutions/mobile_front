
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,Image,TextInput
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
           <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
           // onChangeText={newText => setPassword(newText)}
          />
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