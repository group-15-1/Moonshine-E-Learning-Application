import React, { useState, Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView ,Alert} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { findEmail: '', studentEmail: '', studentName: '', studentPassword: '', studentAge: '', studentContactNumber: ''};
  }

  searchData = () => {
    
    var findEmail = this.state.findEmail;

    if (findEmail.length == 0) {
      alert("Enter your Email ");
    }

    else {
      var profileURL = "http://IP/Moonshine/Profile.php";

      var header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        // php       react native findEmail 
        findEmail: findEmail,
      };

      fetch(
        profileURL,
        {
          method: 'POST',
          headers: header,
          body: JSON.stringify(Data)
        }
      )
        //check the response type of the fetch function is in json format
        .then((response) => response.json())
        // if the response is in json format 
        .then((response) => {
          this.setState({ studentEmail: response[0].Email });
          this.setState({ studentName: response[0].Name });
          this.setState({ studentPassword: response[0].password });
          this.setState({ studentAge: response[0].Age });
          this.setState({ studentContactNumber: response[0].ContactNumber });
        })
        .catch((error) => {
          alert("Error" + error);
        })
    }
  }

  addData = () => {
    var findEmail = this.state.findEmail;
    var studentAge = this.state.studentAge;
    var studentContactNumber = this.state.studentContactNumber;
    var studentPassword = this.state.studentPassword;

    if (findEmail.length == 0) {
      alert("Enter your Email ");
    }
    else {
      fetch('http://IP/Moonshine/MoreInfo.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // This will pass our input data to server
          findEmail: findEmail,
          studentAge: studentAge,
          studentContactNumber: studentContactNumber,
          studentPassword: studentPassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "Student's Age Added") {
            Alert.alert("Data Added");
          }
          else if(responseJson =="Student's Contact Number Added"){
            Alert.alert("Data Added");
          }
          else if (responseJson == "Password Changed"){
            Alert.alert("Data Added");
          }
          else {
            Alert.alert("Please try again.");
          }

        })
        .catch((error) => {
          console.error(error);
        });
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.topic}>Profile</Text>
          <TextInput
            placeholder={"Enter your Email: "}
            placeholderTextColor={"gray"}
            style={styles.inputdata}
            onChangeText={findEmail => this.setState({ findEmail })}
          />

          <TouchableOpacity style={styles.button}
            onPress={this.searchData}>
            <Text style={styles.btnText}>Find Details</Text>
          </TouchableOpacity>
          <View style={styles.details}>
            <Text style={styles.userDetailsTopic}>Your Details</Text>
            <TextInput style={styles.searchData}
              value={"Email:  " + this.state.studentEmail} />

            <TextInput style={styles.searchData}
              value={"Name:  " + this.state.studentName} />

            <TextInput style={styles.searchData}
              value={"Password:  " + this.state.studentPassword} />

            <TextInput style={styles.searchData}
              value={"Age:  " + this.state.studentAge} />

            <TextInput style={styles.searchData}
              value={"Contact Number:  " + this.state.studentContactNumber} />
          </View>

          <Text style={styles.topic}>Add More Details</Text>
          <TextInput
            placeholder='Enter your Age'
            style={styles.inputdata}
            onChangeText={studentAge => this.setState({ studentAge })}
          />

          <TextInput
            placeholder='Enter your Contact Number'
            style={styles.inputdata}
            onChangeText={studentContactNumber => this.setState({ studentContactNumber })}
          />
          <TextInput
           placeholder='Enter Your New Password'
           style={styles.inputdata}
           onChangeText={studentPassword => this.setState({ studentPassword})}
           />

          <TouchableOpacity style={styles.button}
            onPress={this.addData}>
            <Text style={styles.btnText}>Add Details</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputdata: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 22,
    padding: 10,
    borderRadius: 12,
  },

  btnText: {
    width: 250,
    height: 50,
    backgroundColor: 'green',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderRadius: 12,
  },

  button: {
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 20,
  },

  searchData: {
    margin: 15,
    fontSize: 18,
  },
  topic: {
    textAlign: 'center',
    color: 'green',
    fontSize: 40,
    marginTop: 40,
    fontWeight: 'bold',
  },
  details: {
    borderWidth: 2,
    borderColor: 'green',
    margin: 8,
    borderRadius: 12,
  },
  userDetailsTopic: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  }
})
