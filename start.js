import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

const BackgroundGIF = (props) => (
  <View style={{ flex: 1 }}>
    <Image
      style={{ flex: 1 }}
      source={{
        uri: "https://i.pinimg.com/originals/76/3b/ad/763bad72717a3a5b2e36da3a01e04cd0.gif",
      }}
      resizeMode="cover"
    />
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
        <Text style={{ color: "black", fontSize: 65, fontWeight: "bold" }}>
          Moonshine
        </Text>
      </TouchableOpacity>
    </View>
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 250,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
        To shine the little moons...
      </Text>
    </View>
  </View>
);

export default BackgroundGIF;
