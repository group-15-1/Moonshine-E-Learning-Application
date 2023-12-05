import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

import rightHand from '../assets/rightHand.jpg';


export default function App(props) {

     return (

         <View style={styles.container}>

            <Text style={styles.title1}>You have sucessfully created an Account</Text>

            <View style={styles.image}>

              <Image source={rightHand}/>

            </View>

             <TouchableOpacity style={styles.loginBtn} onPress={() => props.navigation.navigate('login')}>

                <Text style={styles.loginText}>Login</Text>

             </TouchableOpacity>

             <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: "#fff",

      alignItems: 'center',

      justifyContent: 'center',

    },

    title1:{

      marginBottom:200,

      fontSize:33,

      justifyContent:'center',

      color:'#7b1fa2',

      

    },

     

    image:{

      width:300,

      height:300,

      alignItems:'center',

      marginTop:-30,

      marginBottom:-50,

    },

    loginBtn: {

      width: "60%",

      borderRadius: 25,

      height: 50,

      alignItems: "center",

      justifyContent: "center",

      marginTop: 10,

      backgroundColor: "blue",

    },

    loginText:{

      color:'#fff',

      fontSize:20,

    }

});