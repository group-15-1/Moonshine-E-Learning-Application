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

const english = (props) =>{

  const image = {uri:'https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg'}
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
   <ScrollView>
    <View style={styles.container}>
      
          <Text style={styles.header}>English</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Alphabet')}>
            <Text style={styles.name}>Alphabet</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('vegitables')}>
            <Text style={styles.name}>Vegetables</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('animal')}>
             <Text style={styles.name}>Animals</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('fruit')}>
             <Text style={styles.name}>Fruits</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('numbers')}>
             <Text style={styles.name}>Numbers</Text>
          </TouchableOpacity>
          
          

          <TouchableOpacity onPress={() => props.navigation.navigate('colors')}>
             <Text style={styles.name}>Colours</Text>
          </TouchableOpacity>
           

          <TouchableOpacity onPress={() => props.navigation.navigate('shapes')}>
             <Text style={styles.name}>Shapes</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('Food')}>
             <Text style={styles.name}>Food</Text>
          </TouchableOpacity>
          
      

          <TouchableOpacity onPress={() => props.navigation.navigate('vehicle')}>
             <Text style={styles.name}>Vehicles</Text>
          </TouchableOpacity>
          
     

          <TouchableOpacity onPress={() => props.navigation.navigate('classRoom')}>
             <Text style={styles.name}>Class Items</Text>
          </TouchableOpacity>

          
          
          <TouchableOpacity onPress={() => props.navigation.navigate('goodHabits')}>
             <Text style={styles.name}>Good Habits</Text>
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
    marginTop: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
   color: '#fff',
   fontWeight: 'bold',
   fontSize: 28,
   textAlign: 'center',
   paddingTop: 10,
   borderWidth: 2,
   backgroundColor: "#009a08",
   borderColor: "#31ff56",
   borderRadius: 15,
   maginTop: 15,
   width: 250,
   height: 60,
   alignItems: 'center',
   marginHorizontal: '18%',
   marginVertical: 6,
  
 },

  image: {
    justifyContent: 'center',
  },
});

export default english;