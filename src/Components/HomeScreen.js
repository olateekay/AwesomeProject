import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return ( <Text style={styles.textStyle}>
        Getting started with React Native!
    </Text>

    )

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    }
});

export default HomeScreen;