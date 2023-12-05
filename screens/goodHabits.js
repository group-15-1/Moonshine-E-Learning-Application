// importing items to the page
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    ScrollView
 } from 'react-native';
 
 // importing all the images from the assets folder
 import A from '../assets/Good_Habits/A.jpg';
 import B from '../assets/Good_Habits/B.jpg';
 import C from '../assets/Good_Habits/C.jpg';
 import D from '../assets/Good_Habits/D.jpg';
 import E from '../assets/Good_Habits/E.webp';
 import F from '../assets/Good_Habits/F.jpg';
 import G from '../assets/Good_Habits/G.webp';
 import H from '../assets/Good_Habits/H.webp';
 
 const colourPage=(props) =>{
   return (
     <View style={styles.container}>
       <ScrollView>
         <Text></Text>
 
          <View style={styles.component}>
             <Text style={styles.text}>Brush your teeth twice a day</Text>
             <Image source={A} style={styles.Img}/>
          </View>

          <View style={styles.component}>
              <Text style={styles.text}>   Protect the Environment</Text>
             <Image source={B} style={styles.Img}/>
          </View>

          <View style={styles.component}>
             <Text style={styles.text}>  Water the Plants</Text>
             <Image source={C} style={styles.Img}/>
          </View>

          <View style={styles.component}>
             <Text style={styles.text}>Wash hands before meals</Text>
             <Image source={D} style={styles.Img}/>
          </View>

          <View style={styles.component}>
             <Text style={styles.text}>   Cut your nails regulary</Text>
             <Image source={E} style={styles.Img}/>
          </View>
          
          <View style={styles.component}>
             <Text style={styles.text}>     Help elders</Text>
             <Image source={F} style={styles.Img}/>
          </View>

          <View style={styles.component}>
             <Text style={styles.text}>Put garbage in to the dustbin</Text>
             <Image source={G} style={styles.Img}/>
          </View>

          <View style={styles.component}>
             <Text style={styles.text}>Get up early in the morning</Text>
             <Image source={H} style={styles.Img}/>
          </View>

       </ScrollView>
     </View>
   );
 }
 
 // styles of the components included in the page
 const styles = StyleSheet.create({
   
   container: {
     backgroundColor: '#fff',
     justifyContent: 'center',
     alignItems: 'center',
   },
   
   component: {
      height: 340,
      width: 365,
      backgroundColor: '#f5eaf7',
      marginVertical: 15,
      color: 'purple',
      borderRadius: 22,
      alignItems: 'center',
   },
   
   Img: {
     width: 280,
     height: 230,
     borderRadius: 8,
     marginHorizontal: 25,
     borderBottomWidth: 3,
   },

   text: {
    fontSize: 23,
    color: 'purple',
    fontWeight: 'bold',
    padding: 15,
   }
 });
 
 export default colourPage;