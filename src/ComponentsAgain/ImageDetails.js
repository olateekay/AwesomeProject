import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';


const ImageDetails= props =>{
  console.log(props);
    return(
      <View>
         <Text>{props.title}</Text>
      </View>
    )
};

export default ImageDetails;