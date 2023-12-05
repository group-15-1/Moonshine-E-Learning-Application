// importing items to the page
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
 } from 'react-native';
 
 // importing all the images from the assets folder
 import C1 from '../assets/colors/C1.jpg';
 import C2 from '../assets/colors/C2.jpg';
 import C4 from '../assets/colors/C4.jpg';
 import C5 from '../assets/colors/C5.jpg';
 import C6 from '../assets/colors/C6.jpg';
 import C7 from '../assets/colors/C7.jpg';
 import C8 from '../assets/colors/C8.jpg';
 import C9 from '../assets/colors/C9.jpg';
 import C10 from '../assets/colors/C10.jpg';
 import C11 from '../assets/colors/C11.jpg';
 import C12 from '../assets/colors/C12.jpg';
 import C13 from '../assets/colors/C13.jpg';
 import C14 from '../assets/colors/C14.jpg';
 import C15 from '../assets/colors/C15.jpg';
 import C16 from '../assets/colors/C16.jpg';
 import C17 from '../assets/colors/C17.jpg';
 
 
 const Colors_Images = (props) => {
    return (
       <View style={styles.component}>
          <View style={styles.imageComponent}>
             <View style={styles.image}>
                <Image source={props.Image1} style={styles.Img} />
             </View>
             <Text style={styles.name}>{props.colorName1}</Text>
          </View>
 
          <View style={styles.imageComponent}>
             <View style={styles.image}>
                <Image source={props.Image2} style={styles.Img} />
             </View>
             <Text style={styles.name}>{props.colorName2}</Text>
          </View>
       </View>
    );
 }
 
 const colorsPage = () => {
    return (
       <View style={styles.container}>
          <ScrollView>
             <Text></Text>
 
             <View>
                <Colors_Images
                   Image1={C1} colorName1="turquoise"
                   Image2={C2} colorName2="silver"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C4} colorName1="purple"
                   Image2={C5} colorName2="pink"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C6} colorName1="red"
                   Image2={C7} colorName2="lilac"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C8} colorName1="green"
                   Image2={C9} colorName2="blue"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C10} colorName1="yellow"
                   Image2={C11} colorName2="black"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C12} colorName1="brown"
                   Image2={C13} colorName2="gold"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C14} colorName1="gray"
                   Image2={C15} colorName2="navy blue"
                />
             </View>
             <View>
                <Colors_Images
                   Image1={C16} colorName1="orange"
                   Image2={C17} colorName2="sky blue"
                />
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
       height: 215,
       width: 440,
       flexDirection: 'row',
    },
 
    Img: {
       width: 130,
       height: 140,
       borderRadius: 8,
    },
 
    imageComponent: {
       width: 160,
       height: 195,
       borderWidth: 3,
       borderColor: '#4fc3f7',
       borderRadius: 10,
       margin: 20,
       alignContent: 'center'
    },
 
    name: {
       textAlign: 'center',
       fontSize: 22,
       paddingTop: 8,
       borderTopWidth: 3,
       borderTopColor: '#4fc3f7',
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 8,
       paddingBottom: 9,
    },
    
    image: {
       alignItems: 'center',
       paddingVertical: 4,
    }
 });
 
 export default colorsPage;