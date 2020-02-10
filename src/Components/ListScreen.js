import React from 'react';
import { View, Text, StyleSheet, FlatList ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const ListScreen = ({ navigation }) => {
    const friends = [
        { name: 'Friend #1', age: 1 },
        { name: 'Friend #3', age: 2 },
        { name: 'Friend #4', age: 3 },
        { name: 'Friend #5', age: 4 },
        { name: 'Friend #6', age: 5 },
        { name: 'Friend #7', age: 6 },
        { name: 'Friend #8', age: 7 },
        { name: 'Friend #9', age: 8 }

    ];
    return (
        <View>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                }}
            />

            <Button style={styles.buttonStyle}
                onPress={() => navigation.navigate("AnotherPage")}
                title="Go to Another Page" />
        
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 15,
        marginHorizontal: 10
    },
    buttonStyle:{
        fontSize:60,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ListScreen;