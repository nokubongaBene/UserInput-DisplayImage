import React, {useState} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import ImagePicker from "react-native-image-picker";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Home({navigation}){
const state = {
    photo: null,
}

const[name, setName] = useState();
const[surname, setSurname] = useState();
const[email, setEmail] = useState();
const[address, setAddress] = useState();
const[phone, setPhone] = useState();
const[image, setImage] = useState();


const  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // alert(response.customButton);
      } else {
        // let source = response;
        // You can also display the image using data:
         let source = 'data:image/jpeg;base64,' + response.data ;
        setImage(source);
      }
    });
  };

const clickHandler = () => {
  setName(name);
  setSurname(surname);
  setEmail(email);
  setAddress(address);
  setPhone(phone);

}

return (
  <View style={styles.container}>
    <Text>Enter Your Name:</Text>
    <TextInput multiline style={styles.input} 
    placeholder= 'Buhle'
    onChangeText={(val) => setName(val)}/>

    <Text>Enter Your Surname:</Text>
    <TextInput multiline style={styles.input} 
    placeholder= 'Mabhena'
    onChangeText={(val) => setSurname(val)}/>

    <Text>Enter Your Email:</Text>
    <TextInput multiline style={styles.input} 
    placeholder= 'Buhle@gmail.com'
    onChangeText={(val) => setEmail(val)}/>

    <Text>Enter Your Address:</Text>
    <TextInput style={styles.input} 
    placeholder= '13 Smith Street'
    onChangeText={(val) => setAddress(val)}/>

    <Text>Enter Your Phone:</Text>
    <TextInput keyboardType='numeric'
    style={styles.input} 
    placeholder= '0761555555'
    onChangeText={(val) => setPhone(val)}/>

    
    <View>
        <Button title='Choose Image' onPress={() =>chooseFile()} />
    </View>
    <View style={styles.buttnContainer}>
    <Button title='Submit Details' onPress={() => {navigation.navigate('previewDetails',{
      name:name,
      surname:surname,
      email:email,
      address:address,
      phone:phone,
      image:image,
      }
      )}} />
    </View>
    </View>
    
)

}
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#E8EAED',
  alignItems: 'center',
  justifyContent: 'center',
},
buttnContainer:{
  marginTop: 20,
},
input: {
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  margin: 10,
  width: 200,
},

})
