import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Home = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6e8d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});

export default Home;
