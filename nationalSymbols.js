import React from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = {
  uri: "https://i.pinimg.com/564x/e2/5d/39/e25d3924a758a568e91dab7785018380.jpg",
};

// 'https://wallpapercave.com/wp/wp6396627.png'
// 'https://i.pinimg.com/736x/d1/52/9a/d1529a8234b7cb1b96506c5bb9067bf8.jpg'

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>National Symbols Of Sri Lanka</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("emblam")}>
          <Text style={styles.motto}>Sri Lanka Emblem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("nationalAnthem")}
        >
          <Text style={styles.motto}>National Anthem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("nationalFlag")}
        >
          <Text style={styles.motto}>National Flag</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("nationalTree")}
        >
          <Text style={styles.motto}>National Tree</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("nationalFlower")}
        >
          <Text style={styles.motto}>National Flower</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("nationalBird")}
        >
          <Text style={styles.motto}>National Bird</Text>
        </TouchableOpacity>
      </ScrollView>
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
    // paddingBottom:0
    marginTop: 120,
  },
  motto: {
    color: "black",
    fontSize: 30,
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5,
    backgroundColor: "#ffffff00",
  },
});

export default App;
