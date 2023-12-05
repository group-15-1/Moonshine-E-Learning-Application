import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



const image = {uri: 'https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg'};

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TouchableOpacity>
      <Text style={styles.text}>My               Course</Text>
      
      </TouchableOpacity>
    <TouchableOpacity onPress={()=> props.navigation.navigate('english')}>
    <Text style={styles.motto}>English</Text>
    </TouchableOpacity>
    </ImageBackground>
    
    
  </View>
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
    fontSize: 70,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
    paddingBottom:100
  },
  motto:{
    color: '#fff',
    fontSize: 50,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: "#31ff56",
    borderWidth: 2,
    backgroundColor: "#009a08",
    width: 260,
    marginLeft: 65,
    borderRadius: 19,
    padding: 30,
  }
});

export default App;