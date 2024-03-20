import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const Access = ({ navigation }: any) => {
  return (
      <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>The ultimate source for recipes.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 45,
  },
  button: {
    backgroundColor: '#106374',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 150,
    marginTop: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  textContainer: {
      width: '75%',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
});

export default Access;
