import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Some Text</Text>
            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}

      <Button title="open Dialog" onPress={() => setShow(true)} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
});
