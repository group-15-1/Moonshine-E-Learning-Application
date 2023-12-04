import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View,Image , Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import signOut from '../assets/signOut.jpg';
const image = { uri: 'https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg' };


const teacherDashboard = (props) => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ScrollView>
      <View style={styles.container}>
        
        
        <TouchableOpacity
          onPress={()=> props.navigation.navigate('Start')}>
          
          <Image source={signOut} style={styles.imageSignOut} />
        </TouchableOpacity>

        <Text style={styles.text}>Dashboard</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate('dashboard')}>
          <Text style={styles.motto}>View Student Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate('addGrade')}>
          <Text style={styles.motto}>Add Grades</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 65,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 40,
  },
  motto: {
    color: 'black',
    fontSize: 40,
    lineHeight: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 35,
    backgroundColor: '#ffffff00',
  },
  imageSignOut: {
    height: 50,
    width: 50,
    marginLeft: 330,
    marginTop: 25,
    borderRadius: 999,
    borderColor: 'yellow',
    borderWidth: 3,
  }
});

export default teacherDashboard;



