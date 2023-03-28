import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function WelcomePage({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.mainContainer, {height: windowHeight}]}>
        <View
          style={[
            styles.imageContainer,
            {
              width: windowWidth,
              height: windowHeight,
              flex: 1,
            },
          ]}>
          <Image
            style={styles.welcomeImage}
            source={require('../assets/treeTall.jpg')}
          />
        </View>
        <View style={[styles.startTextCont, {width: windowWidth, height: 220}]}>
          <Text style={styles.mainText}>Step Up your farming game.</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 24, color: '#000'}}>Let's Start </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#061E17',
  },
  mainText: {
    paddingTop: 30,
    paddingBottom: 25,
    color: '#fff',
  },
  imageContainer: {
    width: 50,
    overflow: 'hidden',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  welcomeImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.65,
  },
  startTextCont: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#061E17',
    bottom: 0,
  },
  highlight: {
    fontWeight: '700',
  },
  startButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
});

export default WelcomePage;
