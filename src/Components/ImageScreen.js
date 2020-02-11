import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
import ImageDetails from '../ComponentsAgain/ImageDetails';


function ImageScreen (){
    return(
      <View>
         <ImageDetails />
         <ImageDetails />
         <ImageDetails />
         <ImageDetails />
      </View>
    )
};

export default ImageScreen;