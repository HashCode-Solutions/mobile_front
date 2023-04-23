import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function MyProgress() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.achieveContainer}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              marginLeft: 13,
              marginTop: 5,
            }}>
            My Progress
          </Text>
          <TouchableOpacity style={styles.pickProjectButton}>
            <Text style={{fontSize: 25, color: '#fff'}}>Tomato</Text>
            <Text style={{fontSize: 25, color: '#fff'}}>40%</Text>
            <Text style={{fontSize: 25, color: '#fff'}}>{'⛳'}</Text>
          </TouchableOpacity>
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
  imageMedium: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});

export default MyProgress;
