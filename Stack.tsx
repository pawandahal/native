/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';

// const App = () => {
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

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.log('HEllo');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'User Login',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        {/* if only for only one screen you can use in stack.screen */}
        {/*  <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        /> */}
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            headerTitle: () => <Button title="Left" />,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => <Header />,
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

const Home = () => {
  return (
    <View>
      <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        Home Screen
      </Text>
    </View>
  );
};

const Header = () => {
  return (
    <View>
      <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Header" />
      </Text>
    </View>
  );
};

const Setting = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};
export default App;
