// importing items to the page
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
 } from 'react-native';
 
 // importing all the images from assets folder 
 import F1 from '../assets/Food/F1.jpg';
 import F2 from '../assets/Food/F2.jpg';
 import F3 from '../assets/Food/F3.jpg';
 import F4 from '../assets/Food/F4.jpg';
 import F5 from '../assets/Food/F5.jpg';
 import F6 from '../assets/Food/F6.jpg';
 import F7 from '../assets/Food/F7.jpg';
 import F8 from '../assets/Food/F8.jpg';
 import F9 from '../assets/Food/F9.jpg';
 import F10 from '../assets/Food/F10.jpg';
 import F11 from '../assets/Food/F11.jpg';
 import F12 from '../assets/Food/F12.jpg';
 import F13 from '../assets/Food/F13.jpg';
 import F14 from '../assets/Food/F14.jpg';
 import F15 from '../assets/Food/F15.jpg';
 import F16 from '../assets/Food/F16.jpg';
 import F17 from '../assets/Food/F17.jpg';
 import F18 from '../assets/Food/F18.jpg';
 import F19 from '../assets/Food/F19.jpg';
 import F20 from '../assets/Food/F20.jpg';
 import F21 from '../assets/Food/F21.jpg';
 import F22 from '../assets/Food/F22.jpg';
 import F23 from '../assets/Food/F23.jpg';
 import F24 from '../assets/Food/F24.jpg';
 
 const Food_Images = (props) => {
    return (
       <View style={styles.component}>
          <View style={styles.imageComponent}>
             <Image source={props.Image1} style={styles.Img} />
             <Text style={styles.name}>{props.foodName1}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image2} style={styles.Img} />
             <Text style={styles.name}>{props.foodName2}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image3} style={styles.Img} />
             <Text style={styles.name}>{props.foodName3}</Text>
          </View>
       </View>
    );
 }
 
 const foodPage = (props) => {
    return (
       <View style={styles.container}>
          <ScrollView>
 
             <Text></Text>
             <View>
                <Food_Images
                   Image1={F1} foodName1="cookie"
                   Image2={F2} foodName2="chocolate"
                   Image3={F3} foodName3="chicken"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F4} foodName1="cheese"
                   Image2={F5} foodName2="pudding"
                   Image3={F6} foodName3="candy"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F7} foodName1="honey"
                   Image2={F8} foodName2="fries"
                   Image3={F9} foodName3="ice-cream"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F10} foodName1="jelly"
                   Image2={F11} foodName2="hot dog"
                   Image3={F12} foodName3="cake"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F13} foodName1="burger"
                   Image2={F14} foodName2="bread"
                   Image3={F15} foodName3="pasta"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F16} foodName1="popcorn"
                   Image2={F17} foodName2="popsicle"
                   Image3={F18} foodName3="pizza"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F19} foodName1="salad"
                   Image2={F20} foodName2="sausage"
                   Image3={F21} foodName3="sandwich"
                />
             </View>
             <View>
                <Food_Images
                   Image1={F22} foodName1="rice"
                   Image2={F23} foodName2="noodles"
                   Image3={F24} foodName3="yogurt"
                />
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
 
    },
 
    component: {
       height: 185,
       width: 420,
       flexDirection: 'row',
    },
 
    Img: {
       width: 106,
       height: 108,
       borderRadius: 8,
    },
 
    imageComponent: {
       width: 113,
       height: 165,
       borderWidth: 3,
       borderColor: '#ffeb3b',
       borderRadius: 10,
       margin: 9,
    },
 
    name: {
       textAlign: 'center',
       fontSize: 20,
       paddingTop: 10,
       borderTopWidth: 3,
       borderTopColor: '#ffeb3b',
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 8,
       paddingBottom: 9,
    }
 });
 
 export default foodPage;