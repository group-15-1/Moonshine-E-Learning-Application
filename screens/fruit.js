//importing items to the page
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    ScrollView
 } from 'react-native';
 
 // import all the images from assets folder 
 import F1 from '../assets/fruits/F1.jpg';
 import F2 from '../assets/fruits/F2.jpg';
 import F3 from '../assets/fruits/F3.jpg';
 import F4 from '../assets/fruits/F4.jpg';
 import F6 from '../assets/fruits/F6.jpg';
 import F7 from '../assets/fruits/F7.jpg';
 import F8 from '../assets/fruits/F8.jpg';
 import F9 from '../assets/fruits/F9.jpg';
 import F10 from '../assets/fruits/F10.jpg';
 import F11 from '../assets/fruits/F11.jpg';
 import F12 from '../assets/fruits/F12.jpg';
 import F13 from '../assets/fruits/F13.jpg';
 import F14 from '../assets/fruits/F14.jpg';
 import F15 from '../assets/fruits/F15.jpg';
 import F16 from '../assets/fruits/F16.jpg';
 import F17 from '../assets/fruits/F17.jpg';
 import F18 from '../assets/fruits/F18.jpg';
 import F19 from '../assets/fruits/F19.jpg';
 import F20 from '../assets/fruits/F20.jpg';
 import F21 from '../assets/fruits/F21.jpg';
 import F22 from '../assets/fruits/F22.jpg';
 
 const Fruit_Images = (props) => {
    return (
       <View style={styles.component}>
          <View style={styles.imageComponent}>
             <Image source={props.Image1} style={styles.Img} />
             <Text style={styles.name}>{props.fruitName1}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image2} style={styles.Img} />
             <Text style={styles.name}>{props.fruitName2}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image3} style={styles.Img} />
             <Text style={styles.name}>{props.fruitName3}</Text>
          </View>
       </View>
    );
 }
 
 const fruitPage = () => {
    return (
       <View style={styles.container}>
          <ScrollView>
             <Text></Text>
             <View>
                <Fruit_Images
                   Image1={F1} fruitName1="apple"
                   Image2={F2} fruitName2="avocado"
                   Image3={F3} fruitName3="banana"
                />
             </View>
 
             <View>
                <Fruit_Images
                   Image1={F4} fruitName1="cherry"
                   Image2={F22} fruitName2="papaya"
                   Image3={F6} fruitName3="grapefruit"
                />
             </View>
 
             <View>
                <Fruit_Images
                   Image1={F7} fruitName1="grapes"
                   Image2={F8} fruitName2="kiwi"
                   Image3={F9} fruitName3="lemon"
                />
             </View>
 
             <View>
                <Fruit_Images
                   Image1={F10} fruitName1="lime"
                   Image2={F11} fruitName2="mango"
                   Image3={F12} fruitName3="melon"
                />
             </View>
 
             <View>
                <Fruit_Images
                   Image1={F13} fruitName1="orange"
                   Image2={F14} fruitName2="peach"
                   Image3={F15} fruitName3="pomegranate"
                />
             </View>
 
             <View>
                <Fruit_Images
                   Image1={F16} fruitName1="raspberry"
                   Image2={F17} fruitName2="watermelon"
                   Image3={F18} fruitName3="strawberry"
                />
             </View>
 
             <View>
                <Fruit_Images
                   Image1={F19} fruitName1="plum"
                   Image2={F20} fruitName2="pineapple"
                   Image3={F21} fruitName3="pear"
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
       height: 190,
       width: 420,
       flexDirection: 'row',
    },
 
    Img: {
       width: 106,
       height: 108,
       borderRadius: 8,
    },
 
    imageComponent: {
       width: 115,
       height: 165,
       borderWidth: 3,
       borderColor: '#fab9c9',
       borderRadius: 10,
       margin: 8,
    },
 
    name: {
       textAlign: 'center',
       fontSize: 18,
       paddingTop: 12,
       borderTopWidth: 3,
       borderTopColor: '#fab9c9',
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 8,
       paddingBottom: 9,
    },
 });
 
 export default fruitPage;