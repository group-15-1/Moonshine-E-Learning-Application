// importing items to the page
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
 } from 'react-native';
 
 // importing all the images from assets folder 
 import A1 from '../assets/animals/A1.jpg';
 import A2 from '../assets/animals/A2.jpg';
 import A3 from '../assets/animals/A3.jpg';
 import A4 from '../assets/animals/A4.jpg';
 import A5 from '../assets/animals/A5.jpg';
 import A6 from '../assets/animals/A6.jpg';
 import A7 from '../assets/animals/A7.jpg';
 import A8 from '../assets/animals/A8.jpg';
 import A9 from '../assets/animals/A9.jpg';
 import A10 from '../assets/animals/A10.jpg';
 import A11 from '../assets/animals/A11.jpg';
 import A12 from '../assets/animals/A12.jpg';
 import A13 from '../assets/animals/A13.jpg';
 import A14 from '../assets/animals/A14.jpg';
 import A15 from '../assets/animals/A15.jpg';
 import A16 from '../assets/animals/A16.jpg';
 import A17 from '../assets/animals/A17.jpg';
 import A18 from '../assets/animals/A18.jpg';
 import A19 from '../assets/animals/A19.jpg';
 import A20 from '../assets/animals/A20.jpg';
 import A21 from '../assets/animals/A21.jpg';
 import A22 from '../assets/animals/A22.jpg';
 import A23 from '../assets/animals/A23.jpg';
 import A24 from '../assets/animals/A24.jpg';
 import A25 from '../assets/animals/A25.jpg';
 import A26 from '../assets/animals/A26.jpg';
 import A27 from '../assets/animals/A27.jpg';
 import A28 from '../assets/animals/A28.jpg';
 import A29 from '../assets/animals/A29.jpg';
 import A30 from '../assets/animals/A31.jpg';
 import A31 from '../assets/animals/A30.jpg';
 import A32 from '../assets/animals/A32.jpg';
 import A33 from '../assets/animals/A33.jpg';
 
 const Animal_Images = (props) => {
    return (
       <View style={styles.component}>
          <View style={styles.imageComponent}>
             <Image source={props.Image1} style={styles.Img} />
             <Text style={styles.name}>{props.animalName1}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image2} style={styles.Img} />
             <Text style={styles.name}>{props.animalName2}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image3} style={styles.Img} />
             <Text style={styles.name}>{props.animalName3}</Text>
          </View>
       </View>
    );
 }
 
 const animalPage = () => {
    return (
       <View style={styles.container}>
          <ScrollView>
             <Text></Text>
             <View>
                <Animal_Images
                   Image1={A1} animalName1="bird"
                   Image2={A2} animalName2="beaver"
                   Image3={A3} animalName3="bear"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A4} animalName1="camel"
                   Image2={A5} animalName2="cat"
                   Image3={A6} animalName3="dolphin"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A7} animalName1="dear"
                   Image2={A8} animalName2="dog"
                   Image3={A9} animalName3="duck"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A10} animalName1="donkey"
                   Image2={A11} animalName2="eagle"
                   Image3={A12} animalName3="elephant"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A13} animalName1="fish"
                   Image2={A14} animalName2="fox"
                   Image3={A15} animalName3="frog"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A16} animalName1="flamingo"
                   Image2={A17} animalName2="giraffe"
                   Image3={A18} animalName3="goat"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A19} animalName1="horse"
                   Image2={A20} animalName2="hen"
                   Image3={A21} animalName3="hedgehog"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A22} animalName1="lion"
                   Image2={A23} animalName2="monkey"
                   Image3={A24} animalName3="mouse"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A25} animalName1="owl"
                   Image2={A26} animalName2="pig"
                   Image3={A27} animalName3="penguin"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A28} animalName1="rabbit"
                   Image2={A29} animalName2="squirrel"
                   Image3={A30} animalName3="turtle"
                />
             </View>
 
             <View>
                <Animal_Images
                   Image1={A31} animalName1="zebra"
                   Image2={A32} animalName2="tiger"
                   Image3={A33} animalName3="whale"
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
       height: 182,
       width: 417,
       flexDirection: 'row',
    },
 
    Img: {
       width: 103,
       height: 105,
       borderRadius: 8,
    },
 
    imageComponent: {
       width: 111,
       height: 162,
       borderWidth: 3.5,
       borderColor: '#9cdff9',
       borderRadius: 10,
       margin: 10,
    },
 
    name: {
       textAlign: 'center',
       fontSize: 22,
       paddingTop: 10,
       borderTopWidth: 3.5,
       borderTopColor: '#9cdff9',
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 8,
       paddingBottom: 9,
    }
 });
 
 export default animalPage;