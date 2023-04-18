import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

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

export default MyProgress;
