import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ProjectPage({route, navigation}) {
  const {project} = route.params;
  console.log();

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text
          style={{color: '#000', fontSize: 20, marginTop: 0, marginLeft: 13}}>
          Let's get started with {project.project_name}{' '}
        </Text>

        {project.main_steps.map((step, index) => (
          <TouchableOpacity
            key={index}
            style={styles.pickProjectButton}
            onPress={() => navigation.navigate('ProjectStepPage', {step})}>
            <Text style={{fontSize: 25, color: '#1b1b1b'}}>
              {step.childStepName}
            </Text>
            <Text style={{fontSize: 25, color: '#fff'}}>{''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 28,
    marginVertical: 50,
  },
  pickProjectButton: {
    marginTop: 30,
    height: 150,
    width: '100%',
    backgroundColor: '#fff3a6',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
export default ProjectPage;
