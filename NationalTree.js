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
import nationalTree from "../assets/national/nationalTree.jpg";
const image = { uri: "" };

const App = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>National Tree</Text>
        <Image source={nationalTree} style={styles.emb} />
        <Text style={styles.motto}>
          The Ironwood (Na Tree), botanically known as ”Mesua Nagassarium” was
          declared the National Tree on 26th February 1986. It was chosen as the
          National Tree for several reasons.It is a tree which originated in Sri
          Lanka. Its utility Historic and cultural importance Exterior posture
          Wide distribution Colour and nature Ability to draw and sketch it
          easily.This rain forest tree grows to about 30 m high and indigenous
          to the lower wet Zone of Sri Lanka. Remarkable Features of NA is
          beautiful bright Red Leaves and finally matured in to a deep green.
          Timber has a very hardness and durability and used to make bridges in
          the early times. Now it is not allowed to use for timber due to its
          religious value. The flower of NA is also used in herbal medicine and
          preparation of perfumes, cosmetics and soaps.It is believed that the
          first visit of Buddha was to grove of a NA Tree at Miyanganaya and
          also the next Buddha (Mithriya) will attain enlightenment under a NA
          tree.
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
