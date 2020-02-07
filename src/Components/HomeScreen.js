import React from 'react';
import { Text, StyleSheet, View ,Button, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
    const name = <Text> Olatokunbo</Text>;
    return (
    <View>
    <Text style={styles.textStyle}>
        Getting started with React Native!
    </Text>
    <Text style={styles.subheaderStyle}> My name is {name}
    </Text>
    <Button 
    onPress={() => console.log("Button pressed")}
    title="Go to Components Demo"/>
    <TouchableOpacity onPress={()=> console.log('List Pressed')}>
        <Text>Go To ListScreen</Text>
    </TouchableOpacity>
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