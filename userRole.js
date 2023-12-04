// importing items to the page
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
  
// importing all the images from assets folder

const userRole = (props) =>{

  const image = {uri:'https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg'}
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
   <ScrollView>
    <View style={styles.container}>
      
          <Text style={styles.header}>User Role</Text>

          <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
            <Text style={styles.name}>Student</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('teacherLogin')}>
            <Text style={styles.name}>Teacher</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('administrator')}>
             <Text style={styles.name}>Administrator</Text>
          </TouchableOpacity>

          
        </View>
    </ScrollView>
    </ImageBackground>
 
  );
}

// styles of thhe page
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    
  },
  header: {
    fontSize: 40,
    marginTop: 130,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
   color: '#fff',
   fontWeight: 'bold',
   fontSize: 30,
   textAlign: 'center',
   paddingTop: 30,
   paddingBottom: 30,
   borderWidth: 2,
   backgroundColor: "#009a08",
   borderColor: "#31ff56",
   borderRadius: 25,
   maginTop: 40,
   width: 250,
   height: 100,
   alignItems: 'center',
   marginHorizontal: '18%',
   marginVertical: 24,
 },

  image: {
    justifyContent: 'center',
    flex:1,
  },
});

export default userRole;