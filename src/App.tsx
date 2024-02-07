/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe4Success</Text>
      <Text style={styles.tagline}>- Discover a world of delicious</Text>
      <Text style={styles.title}>The ultimate source for recipes.</Text>
      <Text style={styles.subtitle}>
        Here you can find a wide variety of mouthwatering recipes to satisfy your taste buds.
      </Text>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "flex-start",
    backgroundColor: '#f6e8d3',

    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#030303',
    fontFamily: 'Sora',
    lineHeight: 26,
  },
  tagline: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 60,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'left',
    fontFamily: 'Sora',
  },
  subtitle: {
    marginBottom: 30,
    textAlign: 'left',
    color: 'grey',
    fontSize: 20,
    fontFamily: 'Rubik',
    lineHeight: 21,
  },

  button1: {
    padding: 15,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#0f6374',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Sora',
  },
  button2: {
    padding: 15,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#0f6374',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'rgba(143,194,204,0)',
    color: '#0f6374',
    fontSize: 16,
    fontFamily: 'Sora',
  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonText2: {
    color: '#0f6374',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default App;
