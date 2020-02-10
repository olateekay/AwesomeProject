import React from 'react';
import { View,Text,StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const ListScreen = ({ navigation}) => {
    const friends = [
        { name: 'Friend #1', age: 1},
        { name: 'Friend #3', age: 2},
        { name: 'Friend #4', age: 3},
        { name: 'Friend #5', age: 4},
        { name: 'Friend #6', age: 5},
        { name: 'Friend #7', age: 6},
        { name: 'Friend #8', age: 7},
        { name: 'Friend #9', age: 8}
        
    ];
    return (
        <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
      />
    );    
}

const styles = StyleSheet.create ({
    textStyle: {
        marginVertical: 50,
        marginHorizontal:10
    }
});

export default ListScreen;