import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";

import {

  StyleSheet,

  Text,

  View,

  TextInput,

  Button,

  TouchableOpacity,

  Alert,

} from "react-native";


export default function App(props) {

  const [Name, setName] = useState("");

  const [Email, setEmail] = useState("");

  const [Password, setPassword] = useState("");

  const [ConfirmPassword, setConfirmPassword] = useState("");


  return (

    <View style={styles.container}>

      <Text style={styles.Title}>Sign Up</Text>



      <StatusBar style="auto" />

      <View style={styles.inputView}>

        <TextInput style={styles.TextInput}

          placeholder="Enter Email"

          onChangeText={text => setEmail(text)}

          value={Email} />

      </View>


      <View style={styles.inputView}>

        <TextInput style={styles.TextInput}

          placeholder="Enter User Name"

          onChangeText={text => setName(text)}

          value={Name}/>

      </View>


      <View style={styles.inputView}>

        <TextInput style={styles.TextInput}

          placeholder="Enter Password"

          onChangeText={text => setPassword(text)}

          value={Password} />

      </View>


      <View style={styles.inputView}>

        <TextInput style={styles.TextInput}

          placeholder="Confirm Password"

          onChangeText={text => setConfirmPassword(text)}/>

      </View>

       

      <TouchableOpacity style={styles.signBtn}>

        <Text style={styles.loginText}>Sign up</Text>

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

  Title: {

    fontSize: 50,

    color: '#9c27b0',

    paddingBottom: 80,

    textAlign: 'center',

  },

  inputView: {

    backgroundColor: "#fff",

    borderRadius: 30,

    width: "70%",

    height: 45,

    marginBottom: 20,

    alignItems: "center",

    borderWidth: 2,

    borderColor: '#ba68c5',

  },

  TextInput: {

    height: 50,

    flex: 1,

    padding: 10,

    marginRight: 20,

    fontSize: 16,

  },


  forgot_button: {

    height: 30,

    marginBottom: 30,

  },


  signBtn: {

    width: "80%",

    borderRadius: 25,

    height: 50,

    alignItems: "center",

    justifyContent: "center",

    marginTop: 40,

    backgroundColor: "blue",

  },

})