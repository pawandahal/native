
//status
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('light-content');
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="orange"
        barStyle={barStyle}
        hidden={hide}
       
        // eslint-disable-next-line react/jsx-no-duplicate-props
      />
      <Button title="Toogle Status Bar" onPress={() => setHide(!hide)} />
      <Button
        title="Update Status Bar"
        onPress={() => setBarStyle('dark-content')}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
