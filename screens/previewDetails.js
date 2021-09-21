import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Card, Text,useColorScheme, View, Button, TextInput, Image} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../components/Profile';

export default function ReviewDetails({navigation}) {

    return(
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.heading}> Welcome : {Profile.name} </Text>
            <Image style={styles.image} source={{uri:Profile.image}} />
            <View style={styles.card}>
            <Text >Name: {Profile.name}</Text>
            <Text></Text>
            <Text >Surname: {Profile.surname}</Text>
            <Text></Text>
            <Text >Email: {Profile.email}</Text>
            <Text></Text>
            <Text >Address: {Profile.address}</Text>
            <Text></Text>
            <Text >Cellphone: {Profile.phone}</Text>
            <Text></Text>
            </View>
            </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      padding:24,
      flex: 1,
      backgroundColor: '#E8EAED',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 370,
        height: 370,
        borderWidth: 2,
    },
    text:{
        padding:24,
        flex: 1,
        backgroundColor: '#E8EAED',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 5, height: 5 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 9,
        marginVertical: 9,
        width:370,
        height:370,

        alignItems: 'center',

    },
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'

    }
})