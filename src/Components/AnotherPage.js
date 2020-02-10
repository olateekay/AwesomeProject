import React from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function AnotherPage({navigation}){
    return (
        <View style={styles.textStyle}>
            <Button 
                onPress={() => navigation.navigate("ListScreen")}
                title="Go to List Screen"/>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:60,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default AnotherPage;