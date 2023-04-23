import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

function LoadingScreen({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.mainContainer, {height: windowHeight}]}>
        <View style={[styles.startTextCont, {width: windowWidth, height: 220}]}>
          <Text style={styles.mainText}>Diwi Sawi Aruna</Text>
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
});

export default LoadingScreen;
