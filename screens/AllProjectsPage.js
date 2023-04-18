import React from 'react';
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
  const projectsObj = [
    {
      _id: {
        $oid: '6423d93622ecaf80503a2c06',
      },
      project_name: 'Tomato',
      type_project: 'vegetable',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076938/Diwi_Sawi_aruna_img/project_img/tomatoe_jklmnq.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423d96022ecaf80503a2c08',
      },
      project_name: 'Mango',
      type_project: 'fruit',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076934/Diwi_Sawi_aruna_img/project_img/mango_czesqt.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423f187094d5bcdd23d8fdf',
      },
      project_name: 'Guava',
      type_project: 'fruit',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076927/Diwi_Sawi_aruna_img/project_img/guava_joobxf.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423f1d9094d5bcdd23d8fe1',
      },
      project_name: 'Carrot',
      type_project: 'vegetable',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076919/Diwi_Sawi_aruna_img/project_img/carrots_yyzprb.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423f200094d5bcdd23d8fe3',
      },
      project_name: 'Bringal',
      type_project: 'vegetable',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076913/Diwi_Sawi_aruna_img/project_img/bringal_vesayc.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423f224094d5bcdd23d8fe5',
      },
      project_name: 'Beans',
      type_project: 'vegetable',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076906/Diwi_Sawi_aruna_img/project_img/beans_kejc95.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423f263094d5bcdd23d8fe7',
      },
      project_name: 'Banana',
      type_project: 'fruit',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076902/Diwi_Sawi_aruna_img/project_img/banana_rc8tow.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
    {
      _id: {
        $oid: '6423f284094d5bcdd23d8fe9',
      },
      project_name: 'Apple',
      type_project: 'fruit',
      project_image_url:
        'https://res.cloudinary.com/dc286us7j/image/upload/v1680076893/Diwi_Sawi_aruna_img/project_img/apple_lyjpd5.jpg',
      main_steps: [
        {
          id: 1,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
        {
          id: 2,
          childStepImageUrl: 'https://diwisawiaruna.com/image1.jpg',
          childStepName: 'dasdasdas',
          innerChildSteps: [
            {
              id: 1,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
            {
              id: 2,
              text: 'sdasdasds',
              paragraph: 'sadsdasdasdas sdsdasdas sdasdas dsadas',
              metadata: {
                videoLink: 'https://diwisawiaruna.com/image1.jpg',
              },
            },
          ],
        },
      ],
      __v: 0,
    },
  ];

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
