import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
    const name = <Text> Olatokunbo</Text>;
    return (
    <View>
    <Text style={styles.textStyle}>
        Getting started with React Native!
    </Text>
    <Text style={styles.subheaderStyle}> My name is Olatokunbo
    </Text>
    {name}
    </View>
    );

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    subheaderStyle:{
        fontSize:20
    }
});

export default HomeScreen;