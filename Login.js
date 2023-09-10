/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React,{useState} from 'react';

const Login = (props) => {
  const [name,setName] = useState('');
  const age=29
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center',width:'100%'}}>
      <Text>Login</Text>

      <TextInput style={{fontSize:20,borderColor: '#000', alignItems: 'center',borderWidth:1,borderRadius:10}}
       onChangeText={(text)=>setName(text)} placeholder="Enter name" />
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate('Home',{name,age})}
      />
    </View>
  );
};
export default Login;

// eslint-disable-next-line prettier/prettier
const styles = StyleSheet.create({});
