import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
import ImageDetails from '../ComponentsAgain/ImageDetails';


function ImageScreen (){
    return(
      <View>
         <ImageDetails title="forest"/>
         <ImageDetails title="beach"/>
         <ImageDetails title="beachhouse"/>
         <ImageDetails title="beach2"/>
      </View>
    )
};

export default ImageScreen;