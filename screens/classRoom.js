//importing items to the page
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
 } from 'react-native';
 
 // import all the images from assets folder 
 import I1 from '../assets/class/I1.jpg';
 import I2 from '../assets/class/I2.jpg';
 import I3 from '../assets/class/I3.jpg';
 import I4 from '../assets/class/I4.jpg';
 import I5 from '../assets/class/I5.jpg';
 import I6 from '../assets/class/I6.jpg';
 import I7 from '../assets/class/I7.jpg';
 import I8 from '../assets/class/I8.jpg';
 import I9 from '../assets/class/I9.jpg';
 import I10 from '../assets/class/I10.jpg';
 import I11 from '../assets/class/I11.jpg';
 import I12 from '../assets/class/I12.jpg';
 import I13 from '../assets/class/I13.jpg';
 import I14 from '../assets/class/I14.jpg';
 import I15 from '../assets/class/I15.jpg';
 import I16 from '../assets/class/I16.jpg';
 import I17 from '../assets/class/I17.jpg';
 import I18 from '../assets/class/I18.jpg';
 import I19 from '../assets/class/I19.jpg';
 import I20 from '../assets/class/I20.jpg';
 import I21 from '../assets/class/I21.jpg';
 
 
 const Class_Images = (props) => {
    return (
       <View style={styles.component}>
          <View style={styles.imageComponent}>
             <Image source={props.Image1} style={styles.Img} />
             <Text style={styles.name}>{props.itemName1}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image2} style={styles.Img} />
             <Text style={styles.name}>{props.itemName2}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image3} style={styles.Img} />
             <Text style={styles.name}>{props.itemName3}</Text>
          </View>
       </View>
    );
 }
 
 const classRoom = () => {
    return (
       <View style={styles.container}>
          <ScrollView>
             <Text></Text>
             <View>
                <Class_Images
                   Image1={I1} itemName1="marker"
                   Image2={I2} itemName2="paint"
                   Image3={I3} itemName3="pen"
                />
             </View>
             <View>
                <Class_Images
                   Image1={I4} itemName1="pencil"
                   Image2={I5} itemName2="ruler"
                   Image3={I6} itemName3="scissors"
                />
             </View>
             <View>
                <Class_Images
                   Image1={I7} itemName1="water bottle"
                   Image2={I8} itemName2="whiteboard"
                   Image3={I9} itemName3="school bag"
                />
             </View>
             <View>
                <Class_Images
                   Image1={I10} itemName1="book"
                   Image2={I11} itemName2="calculator"
                   Image3={I12} itemName3="chair"
                />
             </View>
             <View>
                <Class_Images
                   Image1={I13} itemName1="blackboard"
                   Image2={I14} itemName2="color pencils"
                   Image3={I15} itemName3="computer"
                />
             </View>
             <View>
                <Class_Images
                   Image1={I16} itemName1="chalk"
                   Image2={I17} itemName2="desk"
                   Image3={I18} itemName3="door"
                />
             </View>
             <View>
                <Class_Images
                   Image1={I19} itemName1="eraser"
                   Image2={I20} itemName2="clock"
                   Image3={I21} itemName3="calender"
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
       height: 197,
       width: 417,
       flexDirection: 'row',
    },
    Img: {
       width: 103,
       height: 105,
       borderRadius: 8,
       marginVertical: 6,
    },
    imageComponent: {
       width: 111,
       height: 162,
       borderWidth: 3,
       borderColor: '#fd9a7a',
       borderRadius: 10,
       margin: 9,
    },
    name: {
       textAlign: 'center',
       fontSize: 17,
       paddingTop: 10,
       borderTopWidth: 3,
       borderTopColor: '#fd9a7a',
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 8,
       paddingVertical: 6,
    }
 });
 
 export default classRoom;