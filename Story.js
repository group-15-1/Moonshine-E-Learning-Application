import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = {
  uri: "https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg",
};

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Children's Stories</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("redRidingHood")}
      >
        <Text style={styles.motto}>Little Red Riding Hood</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("hareAndTheTortoise")}
      >
        <Text style={styles.motto}>The Hare And The Tortoise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("foxAndGrapes")}
      >
        <Text style={styles.motto}>The Fox And the Grapes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CharlieBryce")}
      >
        <Text style={styles.motto}>Charlie Bryce</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("princessAndThePea")}
      >
        <Text style={styles.motto}>The Princess And The Pea</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 65,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: '#000000c0',
    // paddingBottom:0
  },
  motto: {
    color: "black",
    fontSize: 25,
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    backgroundColor: "#ffffff00",
  },
});

export default App;
