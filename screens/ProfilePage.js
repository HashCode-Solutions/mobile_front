import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

function ProfilePage({route}) {
  //   let {userDetails} = route.params;
  const userDetails = {
    name: 'john',
    imgUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: 'sample',
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.imageMedium}
          source={{
            uri: userDetails.imgUrl,
          }}
        />

        <Text
          style={{color: '#000', fontSize: 25, marginTop: 30, marginLeft: 13}}>
          {userDetails.name}
        </Text>
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
  },
});

export default ProfilePage;
