import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import flower from "../assets/national/flower.jpg";

const image = { uri: "" };

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>National Flower</Text>
        <Image source={flower} style={styles.emb} />
        <Text style={styles.motto}>
          The “Nil Mahanel” flower, botanically known as “Nympheae Stellata” was
          declared the National Flower of Sri Lanka on 26th February 1986.
        </Text>
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
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: '#000000c0',
    paddingBottom: 10,
    marginTop: 80,
  },
  motto: {
    color: "black",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  emb: {
    height: 165,
    width: 200,
    marginLeft: 100,
  },
});

export default App;
