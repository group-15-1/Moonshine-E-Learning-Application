import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import signOut from '../assets/signOut.jpg';
const image = { uri: 'https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg' };


const Dashboard = (props) => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ScrollView>
      <View style={styles.container}>
        
        
        <TouchableOpacity
          onPress={()=> props.navigation.navigate('Start')}>
          
          <Image source={signOut} style={styles.imageSignOut} />
        </TouchableOpacity>

        <Text style={styles.text}>Dashboard</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('profile')}>
          <Text style={styles.motto}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('grade')}>
          <Text style={styles.motto}>Grade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('settings')}>
          <Text style={styles.motto}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('myCourse')}>
          <Text style={styles.motto}>My Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('story')}>
          <Text style={styles.motto}>Stories</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('music')}>
          <Text style={styles.motto}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('studyPlan')}>
          <Text style={styles.motto}>Study Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('games')}>
          <Text style={styles.motto}>Games</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('nationalSymbols')}>
          <Text style={styles.motto}>National Symbols of Sri Lanka</Text>
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
    
  },
  motto: {
    color: 'black',
    fontSize: 30,
    lineHeight: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 16,
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

export default Dashboard;



