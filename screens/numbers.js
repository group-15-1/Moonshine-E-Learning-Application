//importing items to the page
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    ScrollView
 } from 'react-native';
 
 //importing all images
 import N11 from '../assets/Numbers/N11.jpg';
 import N22 from '../assets/Numbers/N22.jpg';
 import N33 from '../assets/Numbers/N33.jpg';
 import N44 from '../assets/Numbers/N44.jpg';
 import N55 from '../assets/Numbers/N55.jpg';
 import N66 from '../assets/Numbers/N66.jpg';
 import N77 from '../assets/Numbers/N77.jpg';
 import N88 from '../assets/Numbers/N88.jpg';
 import N99 from '../assets/Numbers/N99.jpg';
 import N101 from '../assets/Numbers/N101.jpg';
 
 import n1 from '../assets/Numbers/n1.webp';
 import n2 from '../assets/Numbers/n2.jpg';
 import n3 from '../assets/Numbers/n3.jpg';
 import n4 from '../assets/Numbers/n4.webp';
 import n5 from '../assets/Numbers/n5.jpg';
 import n6 from '../assets/Numbers/n6.webp';
 import n7 from '../assets/Numbers/n7.jpg';
 import n8 from '../assets/Numbers/n8.jpg';
 import n9 from '../assets/Numbers/n9.webp';
 import n10 from '../assets/Numbers/n10.jpg';
 
 const numbersPage=(props) =>{
   return (
     <View style={styles.container}>
      <ScrollView>
        <Text></Text>
 
          <View style={styles.component}>
             <Image source={N11} style={styles.Img}/>
             <Image source={n1} style={styles.RabitImg}/>
          </View>
 
          <View style={styles.component}>   
             <Image source={N22} style={styles.Img}/>
             <Image source={n2} style={styles.Img1}/>
          </View>
 
          <View style={styles.component}>     
             <Image source={N33} style={styles.Img}/>
             <Image source={n3} style={styles.Img1}/>
          </View>
 
          <View style={styles.component}>
             <Image source={N44} style={styles.Img}/>
             <Image source={n4} style={styles.Img1}/>
          </View>
 
          <View style={styles.component}> 
             <Image source={N55} style={styles.Img}/>
             <Image source={n5} style={styles.Img1}/>
          </View>
 
          <View style={styles.component}>
             <Image source={N66} style={styles.Img}/>
             <Image source={n6} style={styles.Img1}/>
          </View>
 
          <View style={styles.component}>
             <Image source={N77} style={styles.Img}/>
             <Image source={n7} style={styles.PencilImg}/>
          </View>
 
          <View style={styles.component}>
             <Image source={N88} style={styles.Img}/>
             <Image source={n8} style={styles.BirdsImg}/>
          </View>
 
          <View style={styles.component}>
             <Image source={N99} style={styles.Img}/>
             <Image source={n9} style={styles.Img1}/>
          </View>
 
          <View style={styles.component}>   
             <Image source={N101} style={styles.Img}/>
             <Image source={n10} style={styles.BirdsImg}/>
          </View>      
       <Text></Text>
       </ScrollView>
     </View>
   );
 }
 
 // styles of the components included in the page
 
 const styles = StyleSheet.create({
    
   container: {
     backgroundColor: '#fff',
     justifyContent: 'center',
   },
   
 
   component: {
      height: 200,
      width: 430,
      flexDirection: 'row',
   },
   
   Img: {
     width: 130,
     height: 184,
     borderRadius: 8,
     margin: 20,
     borderBottomWidth: 3,
   
   },
 
   Img1:{
     width: 170,
     height: 164,
     borderRadius: 8,
     margin: 25,
     marginLeft: 20,
     borderBottomWidth: 3,
   },
 
   RabitImg:{
    width: 100,
    height:160,
    marginLeft: 30,
    margin: 30,
   },
 
   PencilImg: {
    width: 200,
    height: 100,
    marginLeft: 12,
    marginTop: 40,
    margin: 25,
   },
 
   BirdsImg: {
    width: 210,
    height: 130,
    marginLeft: 5,
    marginTop: 30,
    margin: 25,
   }
 
 });
 
 export default numbersPage;