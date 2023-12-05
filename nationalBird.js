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
import bird from "../assets/national/bird.jpg";

const image = { uri: "" };

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>National Bird</Text>
        <Image source={bird} style={styles.emb} />
        <Text style={styles.motto}>
          Sri Lanka Jungle Fowl – Very colorful ground bird, endemic to Sri
          Lanka is the national bird of Sri Lanka. Distributed commonly in Sri
          Lanka’s jungle and dense scrub through out. Roosts high in trees at
          nights. Flies up to tree branches when threatened. Nests in hidden,
          scraped place on the ground or on a pile of vegetation just off the
          ground. Sinharaja is a very good site to watch Sri Lanka Jungle Fowl.
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
