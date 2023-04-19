import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

function ProfilePage({route,navigation}) {
  //   let {userDetails} = route.params;
  const userDetails = {
    name: 'John Cena',
    imgUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: 'sample',
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.picContainer}>
        <Image
          style={styles.imageMedium}
          source={{
            uri: userDetails.imgUrl,
          }}
        />
        <View style={styles.alig}>
         <Text
          style={{color: '#000', fontSize: 25, marginLeft: 13}}>
          {userDetails.name}
        </Text>
        </View>
  <TouchableOpacity onPress={() => navigation.navigate('Update')}>
        <Text
          style={{
            color: '#0d74d7',
            fontSize: 15,
            
           alignItems:'center',
            marginTop: 30,
          }}>
          Edit profile
        </Text>
      </TouchableOpacity>
     
       
        </View>
        <View style={styles.achieveContainer}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              marginLeft: 13,
              marginTop: 5,
            }}>
            Achievements
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 28,
    marginVertical: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  achieveContainer: {
    width: 400,
    height: 50,
    backgroundColor: '#efefef',
    borderWidth: 1,
    borderColor: '#1b1b1b',
    marginTop: 50,
  },
  imageMedium: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems:'center',
    marginTop:15,
  },
picContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginTop:20,
    marginLeft: 20,
    width: 180,
    height: 250,
     shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
   elevation: Platform.OS === 'android' ? 10 : 0,
  },
 

});

export default ProfilePage;
