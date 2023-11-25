// importing items to the page
import { 
    StyleSheet,
    Text, 
    View,
    Image, 
    ScrollView
 } from 'react-native';
 
 // importing all the images from assets folder 
 import V1 from '../assets/vehicle/V1.jpg';
 import V2 from '../assets/vehicle/V2.jpg';
 import V3 from '../assets/vehicle/V3.jpg';
 import V4 from '../assets/vehicle/V4.jpg';
 import V5 from '../assets/vehicle/V5.jpg';
 import V6 from '../assets/vehicle/V6.jpg';
 import V7 from '../assets/vehicle/V7.jpg';
 import V8 from '../assets/vehicle/V8.jpg';
 import V9 from '../assets/vehicle/V9.jpg';
 import V10 from '../assets/vehicle/V10.jpg';
 import V11 from '../assets/vehicle/V11.jpg';
 import V12 from '../assets/vehicle/V12.jpg';
 import V13 from '../assets/vehicle/V13.jpg';
 import V14 from '../assets/vehicle/V14.jpg';
 import V15 from '../assets/vehicle/V15.jpg';
 import V16 from '../assets/vehicle/V16.jpg';
 import V17 from '../assets/vehicle/V17.jpg';
 import V18 from '../assets/vehicle/V18.jpg';
 import V19 from '../assets/vehicle/V19.jpg';
 import V20 from '../assets/vehicle/V20.jpg';
 import V21 from '../assets/vehicle/V21.jpg';
 import V22 from '../assets/vehicle/V22.jpg';
 import V23 from '../assets/vehicle/V23.jpg';
 import V24 from '../assets/vehicle/V24.jpg';
 import V25 from '../assets/vehicle/V25.jpg';
 import V26 from '../assets/vehicle/V26.jpg';
 import V27 from '../assets/vehicle/V27.jpg';
 import V28 from '../assets/vehicle/V28.jpg';
 import V29 from '../assets/vehicle/V29.jpg';
 import V30 from '../assets/vehicle/V30.jpg';
 
 const Vehicle_Images = (props) => {
    return (
       <View style={styles.component}>
          <View style={styles.imageComponent}>
             <Image source={props.Image1} style={styles.Img} />
             <Text style={styles.name}>{props.vehicleName1}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image2} style={styles.Img} />
             <Text style={styles.name}>{props.vehicleName2}</Text>
          </View>
          <View style={styles.imageComponent}>
             <Image source={props.Image3} style={styles.Img} />
             <Text style={styles.name}>{props.vehicleName3}</Text>
          </View>
       </View>
    );
 }
 
 const vehiclePage = () => {
    return (
       <View style={styles.container}>
          <ScrollView>
             <Text></Text>
             <View>
                <Vehicle_Images
                   Image1={V1} vehicleName1="aeroplane"
                   Image2={V2} vehicleName2="cable car"
                   Image3={V3} vehicleName3="excavator"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V4} vehicleName1="rocket"
                   Image2={V5} vehicleName2="ship"
                   Image3={V6} vehicleName3="car"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V7} vehicleName1="jeep"
                   Image2={V8} vehicleName2="bicycle"
                   Image3={V9} vehicleName3="boat"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V10} vehicleName1="police car"
                   Image2={V11} vehicleName2="motorcycle"
                   Image3={V12} vehicleName3="submarine"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V13} vehicleName1="bus"
                   Image2={V14} vehicleName2="tractor"
                   Image3={V15} vehicleName3="van"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V16} vehicleName1="ambulance"
                   Image2={V17} vehicleName2="truck"
                   Image3={V18} vehicleName3="threewheeler"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V19} vehicleName1="helicopter"
                   Image2={V20} vehicleName2="cement truck"
                   Image3={V21} vehicleName3="tricycle"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V22} vehicleName1="skateboard"
                   Image2={V23} vehicleName2="train"
                   Image3={V24} vehicleName3="scooter"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V25} vehicleName1="fire truck"
                   Image2={V26} vehicleName2="dump truck"
                   Image3={V27} vehicleName3="air balloon"
                />
             </View>
             <View>
                <Vehicle_Images
                   Image1={V28} vehicleName1="forklift"
                   Image2={V29} vehicleName2="ferry"
                   Image3={V30} vehicleName3="garbage truck"
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
       height: 196,
       width: 420,
       flexDirection: 'row',
    },
 
    Img: {
       width: 106,
       height: 108,
       borderRadius: 8,
    },
 
    imageComponent: {
       width: 114,
       height: 165,
       borderWidth: 3,
       borderColor: '#4fc3f7',
       borderRadius: 10,
       margin: 9,
    },
 
    name: {
       textAlign: 'center',
       fontSize: 16.8,
       paddingTop: 8,
       borderTopWidth: 3,
       borderTopColor: '#4fc3f7',
       borderBottomLeftRadius: 8,
       borderBottomRightRadius: 8,
       paddingBottom: 9,
    }
 });
 
 export default vehiclePage;