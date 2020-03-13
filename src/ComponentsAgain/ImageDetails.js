import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const ImageDetails = ({title, imageSource,Score}) => {
  // console.log(props);
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageSource} />
      <Text>Image Score is - {Score}</Text>
    </View>
  );
};

export default ImageDetails;
