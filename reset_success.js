import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

import rightHand from '../assets/rightHand.jpg';


export default function App(props) {

    return (

    <View style={styles.container}>

        <Text style={styles.title1}>You have Sucessfully Reset Your Password</Text>

        <View style={styles.image}>

          <Image source={rightHand}/>

        </View>

         <TouchableOpacity style={styles.loginBtn}>

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

    alignItems: 'center',

    padding: 12,

  },

image:{

  width:400,

  height:400,

  alignItems:'center',

  marginTop: -90,

  marginBottom:-50,

},

loginBtn: {

  width: "60%",

  borderRadius: 25,

  height: 50,

  alignItems: "center",

  justifyContent: "center",

  marginTop: -70,

  backgroundColor: "blue",

},

loginText:{

  color:'#fff',

  fontSize:20,

}

});  