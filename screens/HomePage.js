import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import GetLocation from 'react-native-get-location';
import ProfilePage from './ProfilePage';
import MyProgress from './MyProgress';

//   const getMoviesFromApi = () => {
//     return fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => {
//         return json.movies;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

function HomePageContent(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  const navigation = props.navigation;
  const userDetails = {
    name: 'john',
    imgUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    token: 'sample',
  };

  console.log(userDetails.name);

  const getLoc = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location.latitude);
        console.log(location.longitude);
        setLocation(location);
      })
      .catch(error => {
        const {code, message} = error;

        console.warn(code, message);
      });
  };
  const getWeather = async () => {
    if (location != null) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=17c1775b2dc2966999cb03792ad769ec`,
        );
        const json = await response.json();
        setWeatherData(json);
        console.log(json.name);
        console.log(json.weather[0].description);
        console.log(Math.round((json.main.temp - 32) * (5 / 9)));
        return json;
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getLoc();
  }, []);

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.profileImage}
        onPress={() => navigation.navigate('Profile', {userDetails})}>
        <Image
          style={styles.imageMedium}
          source={{
            uri: userDetails.imgUrl,
          }}
        />
      </TouchableOpacity>
      <View style={styles.mainContainer}>
        <Text style={{color: '#000', fontSize: 25}}>
          Good Morning {userDetails.name} 👋
        </Text>
        <View style={styles.weatherContainer}>
          {!weatherData ? (
            <Text>Loading</Text>
          ) : (
            <View>
              <View style={styles.weatherDesc}>
                <Text style={{fontSize: 18, color: '#fff'}}>
                  {weatherData.weather[0].description}
                </Text>
              </View>
              <View style={styles.weatherBelow}>
                <View style={styles.temp}>
                  <Text style={{fontSize: 32, color: '#fff'}}>
                    {Math.round((weatherData.main.temp - 32) * (5 / 9)) + '°'}
                  </Text>
                </View>
                <View style={styles.city}>
                  <Text style={{fontSize: 22, color: '#fff'}}>
                    {weatherData.name}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.pickProjectButton}
          onPress={() => navigation.navigate('ProjectsPage')}>
          <Text style={{fontSize: 25, color: '#fff'}}>Pick a Project</Text>
          <Text style={{fontSize: 25, color: '#fff'}}>+</Text>
        </TouchableOpacity>
        <View style={styles.envContainer}>
          <Text style={{fontSize: 25, color: '#fff'}}>Tip for the Day</Text>
          <Text style={{fontSize: 25, color: '#fff'}}>
            "Healthy soil, healthy harvest - add organic matter to improve soil
            fertility!"
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function HomePage({route, navigation}) {
  let {userDetails} = route.params;
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      style={{backgroundColor: '#454545'}}
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="Dashboard"
        children={() => <HomePageContent navigation={navigation} />}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Progress" component={MyProgress} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 28,
    marginVertical: 50,
  },
  profileImage: {
    width: 70,
    height: 70,
    backgroundColor: '#353535',
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    margin: 20,
  },
  imageMedium: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  weatherContainer: {
    marginTop: 30,
    height: 140,
    width: '100%',
    backgroundColor: '#25607d',
    borderRadius: 10,
    padding: 20,
  },
  pickProjectButton: {
    marginTop: 30,
    height: 90,
    width: '100%',
    backgroundColor: '#316C5B',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  envContainer: {
    marginTop: 30,
    height: 320,
    width: '100%',
    backgroundColor: '#806d53',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: 15,
  },
  weatherDesc: {
    fontSize: 30,
  },
  weatherBelow: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  temp: {
    paddingRight: 40,
  },
  city: {},
});

export default HomePage;
