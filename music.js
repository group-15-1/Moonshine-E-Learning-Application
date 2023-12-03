import * as React from 'react';
import { View, StyleSheet, Text, ScrollView,ImageBackground} from 'react-native';
import { Video } from 'expo-av';


const Music = ()=>{
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground>
      <Text style={styles.topic}>Music</Text>
      <Text style={styles.quotes}>Where words fail, music speaks</Text>
      <Text style={styles.title1}>Animal Friends</Text>
      <Video
       
        style={styles.video}
        source={require('../assets/videos/animals.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
     
      />
      <Text style={styles.title}>Books in the Library</Text>
      <Video
      
        style={styles.video}
        source={require('../assets/videos/books.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
      
      />
      <Text style={styles.title}>Lets Save Time</Text>
      <Video
        
        style={styles.video}
        source={require('../assets/videos/time.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
       
      />
      <Text style={styles.title}>Flowers</Text>
      <Video
        
        style={styles.video}
        source={require('../assets/videos/flowers.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
       
      />
      <Text></Text>
      </ImageBackground>
      </ScrollView>
   
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    height: 300,
    width: 420,
  },
  topic:{
    marginTop: 60,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  quotes: {
    fontSize: 30,
    textAlign: 'center',
    
  },
  title:{
    fontSize:35,
    color: 'black',
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
  },
  title1:{
    fontSize:40,
    color: 'black',
    marginTop: 80,
    textAlign:'center',
    fontWeight:'bold',
  },
})

export default Music;