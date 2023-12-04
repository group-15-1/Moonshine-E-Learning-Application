import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView,Alert } from 'react-native';

export default class App extends Component {

  // constructor 
  constructor(props) {
    super(props);
    this.state = { findEmail: '', studentEmail: '', studentName: '', finalQuiz: '',
                    Answer1:'',Answer2:'',Answer3:'',Answer4:'',Answer5:''};
  }

  searchData = () => {
    
    var findEmail = this.state.findEmail;

    if (findEmail.length == 0) {
      alert("Enter your Email ");
    }

    else {
      
      fetch('http://IP/Moonshine/ViewGrade.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // This will pass our input data to server
          findEmail: findEmail,
        }),
      })
        //check the response type of the fetch function is in json format
        .then((response) => response.json())
        // if the response is in json format 
        .then((response) => {
          this.setState({ studentEmail: response[0].Email });
          this.setState({ studentName: response[0].Name });
          this.setState({finalQuiz: response[0].finalQuiz});
          this.setState({Answer1: response[0].Answer1});
          this.setState({Answer2: response[0].Answer2});
          this.setState({Answer3: response[0].Answer3});
          this.setState({Answer4: response[0].Answer4});
        })
        .catch((error) => {
          alert("Error" + error);
        })
    }
  }

  addData = () => {
    var findEmail = this.state.findEmail;
    var finalQuiz = this.state.finalQuiz;
    
    if (findEmail.length == 0) {
      alert("Enter your Email ");
    }
    else {
      fetch('http://IP/Moonshine/AddGrade.php', {
        method: 'post',
        header: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // This will pass our input data to server
          findEmail: findEmail,
          finalQuiz: finalQuiz,
          

        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "Quiz Marks Added") {
            Alert.alert("Grade Added");
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
          <Text style={styles.topic}>Grades</Text>

          <TextInput
            placeholder={"Enter your Email: "}
            placeholderTextColor={"gray"}
            style={styles.inputdata}
            onChangeText={findEmail => this.setState({ findEmail })}
          />

          <TouchableOpacity style={styles.button}
            onPress={this.searchData}>
            <Text style={styles.btnText}>Search Answers</Text>
          </TouchableOpacity>

          <View style={styles.details}>
              <Text style={styles.userDetailsTopic}>Student's Final Quiz Answers</Text>
              <TextInput style={styles.searchData}
                value={"Email :  " + this.state.studentEmail} />

              <TextInput style={styles.searchData}
                value={"Name :  " + this.state.studentName} />

              <TextInput style={styles.searchData}
                value={"Answer 01 :  " + this.state.Answer1} />

              <TextInput style={styles.searchData}
                value={"Answer 02 :  " + this.state.Answer2} />

              <TextInput style={styles.searchData}
                value={"Answer 03 :  " + this.state.Answer3} />

              <TextInput style={styles.searchData}
                value={"Answer 04 :  " + this.state.Answer4} />

              <TextInput style={styles.searchData}
                value={"Final Quiz Mark :  " + this.state.finalQuiz} />

          </View>

        
          <Text style={styles.topic}>Add Grade</Text>

          <TextInput
            placeholder="Enter Student's Final Quiz Mark"
            style={styles.inputdata}
            onChangeText={finalQuiz => this.setState({ finalQuiz })}
            
          />

          <TouchableOpacity style={styles.button}
            onPress={this.addData}>
            <Text style={styles.btnText}>Add Marks</Text>
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
    margin: 14,
    fontSize: 19,
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
