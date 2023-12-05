import React from "react";
import {
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
      <TouchableOpacity
        onPress={() => props.navigation.navigate("colorSearch")}
      >
        <Text style={styles.text}>Color search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("animalSearch")}
      >
        <Text style={styles.text}>Animal search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("kidsGame")}>
        <Text style={styles.text}>Kids Knowledge </Text>
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
    fontSize: 50,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: '#000000c0',
    paddingBottom: 80,
  },
  motto: {
    color: "black",
    fontSize: 45,
    lineHeight: 50,
    // fontWeight: 'bold',
    textAlign: "center",
    paddingBottom: 200,
  },
});

export default App;
