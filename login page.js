import React, { useState } from 'react'

import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';


function FormList(props) {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState("")

  const [passwordError, setPasswordError] = useState("")


  const handleSubmit = () => {

    var emailValid = false;

    if (email.length == 0) {

      setEmailError("Email is required");

    }

    else if (email.length < 6) {

      setEmailError("Email should be minimum 6 characters");

    }

    else if (email.indexOf(' ') >= 0) {

      setEmailError('Email cannot contain spaces');

    }

    else {

      setEmailError("")

      emailValid = true

    }

    var passwordValid = false;

    if (password.length == 0) {

      setPasswordError("Password is required");

    }

    else if (password.length < 6) {

      setPasswordError("Password should be minimum 6 characters");

    }

    else if (password.indexOf(' ') >= 0) {

      setPasswordError('Password cannot contain spaces');

    }

    // connection to the database using php
    else {
      fetch('http://IP Address/Moonshine/Login.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // This will pass our input data to server
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "ok") {
            Alert.alert("Login sucsess");
            props.navigation.navigate('dashboard')
          }
          else if (responseJson == "No account yet") {
            Alert.alert("No account. Plese create a new account")
          }

          else {
            Alert.alert("wrong details")
            console.log(responseJson)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (emailValid && passwordValid) {

      alert('Email: ' + email + '\nPassword: ' + password);

      setEmail("");

      setPassword("");

    }



  };


  return (

    <View style={styles.container}>

      <View>

        <Text style={styles.topic}>Log In</Text>

        <View>

          <TextInput placeholder="Enter Email"

            onChangeText={text => setEmail(text)}

            value={email} style={styles.Input} />

        </View>

        {emailError.length > 0 &&

          <Text>{emailError}</Text>

        }

        <View>

          <TextInput placeholder="Enter Password"

            onChangeText={text => setPassword(text)}

            value={password}

            style={styles.Input} />

        </View>

        {passwordError.length > 0 &&


          <Text>{passwordError}</Text>

        }

        <TouchableOpacity onPress={() => props.navigation.navigate('sendCode')}>

          <Text style={styles.forgot_button}>Forgot Password?</Text>

        </TouchableOpacity>


        <Button onPress={handleSubmit} title='Log In' color="#1a237e" borderRadius='12' />

      </View>

      <Text></Text>

      <View>

        <Text style={styles.enteredData}>

          Email entered: {email}

        </Text>

        <Text style={styles.enteredData}>

          Password entered: {password}

        </Text>

      </View>

      <View>

        <TouchableOpacity >

          <Text style={styles.sentences}>Don't you have an account?</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.sbtn} onPress={() => props.navigation.navigate('signUp')}>

          <Text style={styles.signup}>Signup</Text>

        </TouchableOpacity>

      </View>

    </View>

  )

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",

  },

  topic: {

    fontSize: 50,

    color: '#9c27b0',

    paddingBottom: 50,

    textAlign: 'center',

  },

  Input: {

    borderWidth: 2,

    borderColor: '#ba68c5',

    width: 300,

    height: 45,

    borderRadius: 20,

    textAlign: 'center',

    margin: 18,

    padding: 10,

  },


  forgot_button: {

    height: 30,

    marginBottom: 30,

    textAlign: 'center',

    fontSize: 18,

  },

  sentences: {

    height: 30,

    marginBottom: 30,

    marginTop: 20,

    textAlign: 'center',

    fontSize: 16,

  },

  signup: {

    color: "#303f9f",

    marginTop: -30,

    textAlign: 'center',

    fontSize: 20,

  },

  enteredData:{

    fontSize: 13,

  }

})

export default FormList;