import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfilePage({route, navigation}) {
  const [userDetail, setUserDetail] = useState(null);

  const [achvObj, setAchvObj] = useState(null);

  useEffect(() => {
    let userInfo;
    async function loadUserDetail() {
      const storedUserDetail = await AsyncStorage.getItem('userDetail');
      if (storedUserDetail) {
        setUserDetail(await JSON.parse(storedUserDetail));
        userInfo = await JSON.parse(storedUserDetail);
        try {
          const response = await fetch(
            `https://mobileback-diwisawi-production.up.railway.app/achievements/user-achievements/${userInfo._id}`,
            {
              method: 'GET', // GET, POST, PUT, DELETE
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': userInfo.token,
              },
            },
          );

          setAchvObj(await response.json());

          console.log(achvObj);
        } catch (error) {
          console.error(error);
        }
      }
      console.log(await JSON.parse(storedUserDetail));
    }
    loadUserDetail();
  }, []);

  //   let {userDetails} = route.params;
  const userDetails = {
    name: 'John Cena',
    imgUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: 'sample',
  };

  let achvmnt = [];
  if (achvObj) {
    achvmnt = achvObj.achievements;
  }

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
            <Text style={{color: '#000', fontSize: 25, marginLeft: 13}}>
              {userDetail ? userDetail.first_name : ''}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Update')}>
            <Text
              style={{
                color: '#0d74d7',
                fontSize: 15,

                alignItems: 'center',
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
          {achvmnt.map((project, index) => (
            <TouchableOpacity key={index} style={styles.pickProjectButton}>
              <Image
                style={styles.imageMedium}
                source={{
                  uri: project.img_url,
                }}
              />
              <Text style={{fontSize: 25, color: '#fff'}}>{project.title}</Text>
              <Text style={{fontSize: 25, color: '#fff'}}>{'👑'}</Text>
            </TouchableOpacity>
          ))}
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

    alignItems: 'center',
    backgroundColor: '#efefef',
    borderWidth: 1,
    borderColor: '#1b1b1b',
    marginTop: 50,
  },
  imageMedium: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 15,
  },
  picContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    width: 180,
    height: 250,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: Platform.OS === 'android' ? 10 : 0,
  },

  pickProjectButton: {
    marginTop: 30,
    height: 160,
    width: '90%',
    backgroundColor: '#636363',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  backgroundImage: {
    height: 90,
  },
});

export default ProfilePage;
