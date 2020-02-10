import React from 'react';
import { Text, StyleSheet, View ,Button, TouchableOpacity} from 'react-native';
import { createStackNavigation } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation}) {
    const name = <Text> Olatokunbo</Text>;
    return (
    <View style={styles.textStyle}>
    <Text>
        Getting started with React Native!
    </Text>
    <Text> My name is {name}
    </Text>
    <Button 
    onPress={() => navigation.navigate("ListScreen")}
    title="Go to List Screen"/>
    {/* <TouchableOpacity onPress={()=> console.log('List Pressed')}>
        <Text>Go To ListScreen</Text>
    </TouchableOpacity> */}
    </View>
    );

}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:60,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default HomeScreen;