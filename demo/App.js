import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipePicker from 'react-native-swipe-picker';

export default function App() {
  const items = [];

  for (let index = 0; index < 100; index++) {
    items.push({
      value: index,
      label: `Item ${index}`
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to see how to use SwipePicker!</Text>
      <SwipePicker
        items={ items }
        onChange={ console.log }
        height={ 80 }
        width={ 120 }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
