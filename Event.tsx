//pressabel or event handler in react native
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
const App = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.log('normal on Press')}
        onLongPress={() => {
          console.log('long press');
        }}
        onPressIn={() => {
          console.log('press in');
        }}
        onPressOut={() => {
          console.log('press out');
        }}>
        <Text style={styles.pressableBtn}>App</Text>
      </Pressable>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    textAign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});
