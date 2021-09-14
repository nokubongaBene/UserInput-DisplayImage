import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme, View, Button, TextInput, Image} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

export default function ReviewDetails({route, navigation}) {
    const {name, surname, email, address, phone, image} = route.params;
    console.log(image);
    return(
        <View style={StyleSheet.container}>
            <Text>{name}</Text>
            <Text>{surname}</Text>
            <Text>{email}</Text>
            <Text>{address}</Text>
            <Text>{phone}</Text>
            <Image style={styles.image} source={{uri:image}} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#E8EAED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderWidth: 2,
    },
    text:{
        padding:24,
        flex: 1,
        backgroundColor: '#E8EAED',
        alignItems: 'center',
        justifyContent: 'center',
    }
})