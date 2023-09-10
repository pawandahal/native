/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';

// const Stack = () => {
//   const [data, setData] = useState([]);
//   const getApiData = async () => {
//     const url = 'https://josnplaceholder.typicode.com/posts';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//     console.log('hello', result);
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);
//   return (
//     <View styles={{padding: '5px'}}>
//       <Text>Flat CardOne</Text>
//       <View>
//         <View>
//           <Text>Red</Text>
//         </View>
//         <View>
//           <Text>Green</Text>
//         </View>
//         <View>
//           <Text>Blue</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default App;

import {StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.log('HEllo');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen name="Setting" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            headerTitle: () => <Button title="Left" />,
            // eslint-disable-next-line react/no-unstable-nested-components
            title: 'Home screen',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
