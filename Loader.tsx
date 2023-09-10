//indicator or loader
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    //api call in 3 sec
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30}}>Activity Indicator</Text>
      {show ? (
        <ActivityIndicator size={30} color="red" animating={show} />
      ) : null}
      <Button title="show loader" onPress={displayLoader} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});