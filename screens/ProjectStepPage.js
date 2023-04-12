import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ProjectStepPage({route, navigation}) {
  const {step} = route.params;

  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={{height: windowHeight}}>
      <View style={[styles.mainContainer, {height: windowHeight}]}>
        <Text
          style={{color: '#000', fontSize: 20, marginTop: 0, marginLeft: 13}}>
          Step : {step.childStepName}{' '}
        </Text>

        <View style={styles.textContainer}>
          <Text
            style={{color: '#000', fontSize: 20, marginTop: 0, marginLeft: 13}}>
            {step.innerChildSteps[0].text}{' '}
          </Text>
        </View>
        <View style={styles.paraContainer}>
          <Text
            style={{color: '#000', fontSize: 20, marginTop: 0, marginLeft: 13}}>
            {step.innerChildSteps[0].paragraph}{' '}
          </Text>

          <TouchableOpacity style={styles.nextBtn}>
            <Text style={{color: '#fff', fontSize: 20}}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* {project.main_steps.map((step, index) => (
          <TouchableOpacity key={index} style={styles.pickProjectButton}>
            <Text style={{fontSize: 25, color: '#1b1b1b'}}>
              {step.childStepName}
            </Text>
            <Text style={{fontSize: 25, color: '#fff'}}>{''}</Text>
          </TouchableOpacity>
        ))} */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 28,
    marginVertical: 50,
  },
  textContainer: {
    marginTop: 15,
    backgroundColor: '#e3e3e3',
    padding: 5,
  },
  paraContainer: {
    backgroundColor: '#ffffff',
    padding: 5,
  },
  pickProjectButton: {
    marginTop: 30,
    height: 100,
    width: '100%',
    backgroundColor: '#fff3a6',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  nextBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#7fb56d',
    borderRadius: 100,
    position: 'absolute',
    left: 160,
    top: 400,
    margin: 20,
  },
});
export default ProjectStepPage;
