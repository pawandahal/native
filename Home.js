/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

const {default: RNFetchBlob} = require('react-native-fetch-blob');

// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({})
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Home = (props) => {
    console.log("HelloTwo",props.route.params)
  const {name,age} = props.route.params;
  return (
    <View>
      <Text>Home</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default Home;

// eslint-disable-next-line prettier/prettier
const styles = StyleSheet.create({});
