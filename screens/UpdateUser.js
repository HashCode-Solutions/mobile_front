import React, {useState, useEffect} from 'react';

import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UpdateUser({navigation}) {
  const [checkequal, setcheckequal] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [firstnameError, setFirstNameError] = useState('');

  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastnameError, setLastNameError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [newPassword, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); //false means showing pasword
  const [passwordError, setPasswordError] = useState('');

  const [confirmpassword, confirmsetPassword] = useState('');
  const [confirmshowPassword, confirmsetShowPassword] = useState(false); //false means showing pasword
  const [confirmpasswordError, confirmsetPasswordError] = useState('');

  const [profileImg, setProfileImg] = useState('');

  const passwordImage = showPassword
    ? require('../assets/password-show.png') //if false
    : require('../assets/password-hide.png'); //otherwise

  const toggleShowPassword = text => {
    setPassword(text);
    if (!text) {
      setPasswordError('*Please enter the  password for the login');
    } else {
      setPasswordError('');
    }
    setShowPassword(!showPassword);
  };

  const userDetails = {
    name: 'john',
    imgUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: 'sample',
  };

  const handleFirstName = text => {
    setfirstName(text);
    if (!text) {
      setFirstNameError('First Name is required');
    } else {
      setFirstNameError('');
    }
  };

  const handleLastName = text => {
    setLastName(text);

    if (!text) {
      setLastNameError('Last Name is required');
    } else {
      setLastNameError('');
    }
  };

  const handlePhoneNumber = text => {
    setPhoneNumber(text);
    if (!text) {
      setPhoneNumberError('Phone Number is required');
    } else {
      setPhoneNumberError('');
    }
  };

  const isEmailValid = email => {
    // Regular expression to validate email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  };

  const handleEmailChange = text => {
    setEmail(text);
    if (!text) {
      setEmailError('*Email is required');
    } else if (!isEmailValid(text)) {
      setEmailError('*Email is not valid');
    } else {
      setEmailError('');
    }
  };

  const [userDetail, setUserDetail] = useState({});

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

  const confirmpasswordImage = confirmshowPassword
    ? require('../assets/password-show.png') //if false
    : require('../assets/password-hide.png'); //otherwise

  const toggleConfirmShowPassword = text => {
    confirmsetPassword(text);
    if (!text) {
      confirmsetPasswordError('*Password is required');
    } else {
      confirmsetPasswordError('');
    }
    confirmsetShowPassword(!confirmshowPassword);
  };

  const updateUser = async () => {
    try {
      console.log(confirmpassword);
      console.log(email);
      console.log(newPassword);
      console.log(firstName);
      console.log(lastName);
      console.log(phoneNumber);
      console.log(profileImg);

      if (!confirmpassword || !email || !newPassword || !phoneNumber) {
        Alert.alert('Error', 'Enter the missing data!!!', [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ]);
      }

      if (newPassword == confirmpassword) {
        setcheckequal('');
        const id = userDetail._id;
        const token = userDetail.token;
        console.log(id);
        const response = await fetch(
          `https://mobileback-diwisawi-production.up.railway.app/user/update-user/` +
            id,
          {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': token,
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              mobile_number: phoneNumber,
              email: email,
              password: newPassword,
            }),
          },
        );

        Alert.alert('Sucess', 'Sucessfully updated data!!!', [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ]);

        const jsonk = await response.json();

        await AsyncStorage.setItem('userDetail', JSON.stringify(jsonk));

        if (jsonk.message === "Can't find user. Please Register!!!") {
          Alert.alert('Invalid Data', 'Cannot find user.', [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ]);
        } else {
          navigation.navigate('Profile'); //this should be there
        }

        // if (!(jsonk.length === 0)) {
        //   navigation.navigate('Login');
        // } else {
        //   Alert.alert(
        //     'Server Error',
        //     'Response is empty',
        //     [
        //       {
        //         text: 'OK',
        //         onPress: () => console.log('OK Pressed')
        //       }
        //     ]
        //   );
        // }
      } else {
        setcheckequal('*Passwords are not equal');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const accessGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // console.log(image);

        setProfileImg(image.path);
      })
      .catch(error => {
        console.log(error);
      });
    // console.log("click me");
  };

  return (
    <ScrollView>
      <Text style={styles.topic}>Update Details</Text>

      <View style={styles.mainContainer}>
        <Image
          style={styles.imageMedium}
          source={{
            uri: profileImg === '' ? userDetails.imgUrl : profileImg,
          }}
        />
        <View style={styles.editimgk}>
          <TouchableOpacity onPress={accessGallery}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/edit.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginHorizontal: 25, marginBottom: 20, marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 60,
          }}>
          <TextInput
            style={{flex: 1, padding: 10, color: '#000'}}
            placeholder="First Name*"
            placeholderTextColor="#000"
            value={firstName}
            onChangeText={handleFirstName}
          />
        </View>
        <Text
          style={{
            color: '#000',
            marginBottom: 10,
            marginLeft: 10,
            marginTop: 10,
          }}>
          {firstnameError}
        </Text>
      </View>

      <View style={{marginHorizontal: 25, marginBottom: 20, marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 60,
          }}>
          <TextInput
            style={{flex: 1, padding: 10, color: '#000'}}
            placeholder="Last Name*"
            placeholderTextColor="#000"
            value={lastName}
            onChangeText={handleLastName}
          />
        </View>
        <Text
          style={{
            color: '#000',
            marginBottom: 10,
            marginLeft: 10,
            marginTop: 1,
          }}>
          {lastnameError}
        </Text>
      </View>

      <View style={{marginHorizontal: 25, marginBottom: 20, marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 60,
          }}>
          <TextInput
            style={{flex: 1, padding: 10, color: '#000'}}
            placeholder="Phone Number*"
            placeholderTextColor="#000"
            keyboardType="text"
            value={phoneNumber}
            onChangeText={handlePhoneNumber}
          />
        </View>
        <Text
          style={{
            color: '#000',
            marginBottom: 10,
            marginLeft: 10,
            marginTop: 1,
          }}>
          {phoneNumberError}
        </Text>
      </View>

      <View style={{marginHorizontal: 25, marginBottom: 20, marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 60,
          }}>
          <TextInput
            style={{flex: 1, padding: 10, color: '#000'}}
            placeholder="Email*"
            placeholderTextColor="#000"
            keyboardType="text"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <Text
          style={{
            color: '#000',
            marginBottom: 10,
            marginLeft: 10,
            marginTop: 1,
          }}>
          {emailError}
        </Text>
      </View>

      <View style={{marginHorizontal: 25, marginBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 60,
          }}>
          <TextInput
            style={{flex: 1, padding: 10, color: '#000'}}
            placeholder="New Password*"
            placeholderTextColor="#000"
            keyboardType="text"
            secureTextEntry={!showPassword}
            value={newPassword}
            onChangeText={setPassword}
          />
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <View style={{padding: 10}}>
              <Image source={passwordImage} style={{width: 40, height: 24}} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Text style={{color: '#000', marginLeft: 30, marginBottom: 10}}>
        {passwordError}
      </Text>

      <View style={{marginHorizontal: 25}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 60,
          }}>
          <TextInput
            style={{flex: 1, padding: 10, color: '#000'}}
            placeholder="Confirm Password*"
            placeholderTextColor="#000"
            keyboardType="text"
            secureTextEntry={!confirmshowPassword}
            value={confirmpassword}
            onChangeText={confirmsetPassword}
          />
          <TouchableWithoutFeedback onPress={toggleConfirmShowPassword}>
            <View style={{padding: 10}}>
              <Image
                source={confirmpasswordImage}
                style={{width: 40, height: 24}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Text style={{color: '#000', marginLeft: 30, marginBottom: 15}}>
        {confirmpasswordError}
      </Text>
      <Text style={{color: 'red', marginLeft: 30, marginBottom: 15}}>
        {checkequal}
      </Text>

      <TouchableOpacity style={styles.button} onPress={updateUser}>
        <Text style={{fontSize: 24, color: '#fff'}}>Update User</Text>
      </TouchableOpacity>
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
  topic: {
    margin: 24,
    fontSize: 40,
    textAlign: 'center',
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
  imageMedium: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
  },
  mainContainer: {
    marginHorizontal: 28,
    marginVertical: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    color: 'blue',
  },

  editimgk: {
    marginLeft: 80,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#bbb4b4',
    borderRadius: 20,
    width: 30,
    height: 30,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
export default UpdateUser;
