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

const handleSignUp = () => {
    let emailName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com)+$/;
    let nameData = /^[A-Za-z]+$/;

    if (Name.length == 0 || Email.length == 0 || Password.length == 0 || ConfirmPassword.length == 0) {
      Alert.alert("Required field/s missing");
    }
    else if (Password.length < 6) {
      Alert.alert("The password should contain more than 6 characters");
    }
    else if (Password !== ConfirmPassword) {
      Alert.alert("Check the confirm password again");
    }
    else if (!emailName.test(Email)) {
      Alert.alert("Email is not in a valid format");
    }
    else if (!nameData.test(Name)) {
      Alert.alert("Enter your Name");
    }

    else {
      fetch('http://IPAddress/Moonshine/SignUp.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // This will pass our input data to server
          Name: Name,
          Email: Email,
          Password: Password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "Student has been registered sucsessfuly") {
            props.navigation.navigate('signUpSucsess');
          }
          else {
            Alert.alert("Sign Up Failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

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