import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function AllProjectsPage({route, navigation}) {
  const [projectsObject, setProjectObject] = useState(null);

  let projectsObjs = null;
  useEffect(() => {
    let userDetail;
    async function loadProjects() {
      const storedUserDetail = await AsyncStorage.getItem('userDetail');
      if (storedUserDetail) {
        userDetail = await JSON.parse(storedUserDetail);
        try {
          const response = await fetch(
            `https://mobileback-diwisawi-production.up.railway.app/project-creation/get-projects`,
            {
              method: 'GET', // GET, POST, PUT, DELETE
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': userDetail.token,
              },
            },
          );

          setProjectObject(await response.json());

          console.log(projectsObject);
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadProjects();
  }, []);

  let projectsObj = [];
  if (projectsObject) {
    projectsObj = projectsObject;
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 25, color: '#000'}}>
          Select a project to start with
        </Text>
        <Text style={{fontSize: 20, color: '#1f1f1f', paddingTop: 30}}>
          Vegetables
        </Text>

        {projectsObj.map((project, index) =>
          project.type_project == 'vegetable' ? (
            <TouchableOpacity
              key={index}
              style={styles.pickProjectButton}
              onPress={() => navigation.navigate('ProjectPage', {project})}>
              <Image
                style={styles.imageMedium}
                source={{
                  uri: project.project_image_url,
                }}
              />
              <Text style={{fontSize: 25, color: '#fff'}}>
                {project.project_name}
              </Text>
              <Text style={{fontSize: 25, color: '#fff'}}>{'>'}</Text>
            </TouchableOpacity>
          ) : (
            <View key={index}></View>
          ),
        )}
        <Text style={{fontSize: 20, color: '#1f1f1f', paddingTop: 30}}>
          Fruits
        </Text>
        {projectsObj.map((project, index) =>
          project.type_project == 'fruit' ? (
            <TouchableOpacity
              key={index}
              style={styles.pickProjectButton}
              onPress={() => navigation.navigate('ProjectPage', {project})}>
              <Image
                style={styles.imageMedium}
                source={{
                  uri: project.project_image_url,
                }}
              />
              <Text style={{fontSize: 25, color: '#fff'}}>
                {project.project_name}
              </Text>
              <Text style={{fontSize: 25, color: '#fff'}}>{'>'}</Text>
            </TouchableOpacity>
          ) : (
            <View key={index}></View>
          ),
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 28,
    marginVertical: 50,
  },
  imageMedium: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

  pickProjectButton: {
    marginTop: 30,
    height: 90,
    width: '100%',
    backgroundColor: '#70a65e',
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

export default AllProjectsPage;
