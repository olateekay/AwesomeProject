import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ImageDetails from "../ComponentsAgain/ImageDetails";

function ImageScreen() {
  return (
    <View>
      <ImageDetails
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        Score={7}
      />
      <ImageDetails
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
        Score={4}
      />
      <ImageDetails
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        Score={5}
      />
    </View>
  );
}

export default ImageScreen;
