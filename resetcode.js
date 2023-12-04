import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";


import {

  StyleSheet,

  Text,

  View,

  TextInput,

  TouchableOpacity,

  Alert,

} from "react-native";


export default function App(props) {


  const [password, setPassword] = useState("");

 

  return (

    <View style={styles.container}>

      <View>

        <Text style={styles.title1}>Reset Password</Text>

      </View>

      

      <StatusBar style="auto" />

      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}

          placeholder="Email"

          placeholderTextColor="#003f5c"

          textAlign="center"

          

        /> 

      </View> 

      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}

          placeholder="New Password"

          placeholderTextColor="#003f5c"

          textAlign="center"

          secureTextEntry={true}

          onChangeText={(password) => setPassword(password)}

        /> 

          </View> 

      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}

          placeholder="Confirm Password"

          placeholderTextColor="#003f5c"

          textAlign="center"

          secureTextEntry={true}

          onChangeText={(password) => setPassword(password)}

        /> 

      </View> 

      <TouchableOpacity style={styles.ResetBtn} onPress={updatePassword}>

        <Text style={styles.resetText}>Reset</Text> 

      </TouchableOpacity> 

    </View> 

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",

  },

  title1:{

    fontSize:42,

    color:'#9c27b0',

    marginBottom:120,

    marginTop:10,

  },

  

  inputView: {

    backgroundColor: "#fff",

    borderRadius: 30,

    width: "80%",

    height: 45,

    marginBottom: 20,

    alignItems: "center",

    

  },

  TextInput: {

    height: 50,

    fontSize:15,

    width: '90%',

    borderColor: '#ba68c5',

    borderWidth:2,

    borderRadius: 20,

    alignItems: 'center',

  },

  

  ResetBtn: {

    width: "60%",

    borderRadius: 25,

    height: 50,

    alignItems: "center",

    justifyContent: "center",

    marginTop: 40,

    backgroundColor: "blue",

  },

  resetText:{

    fontSize:20,

    color:"#fff",

  },


});