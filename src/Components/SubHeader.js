import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubHeader = () => {
    return ( <Text style={styles.textStyle}>
        My name is Olatokunbo
    </Text>

    )

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20
    }
});

export default SubHeader;