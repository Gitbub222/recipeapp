import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Verify = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
      <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Verify</Text>
                <Text style={{ color: 'black', fontSize: 20, marginTop: 30 }}>Enter your email or phone number to receive a verification code</Text>
            </View>
      <View style={styles.inputLabelContainer}>
          <TextInput
            style={[styles.input, { width: '95%' }]}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={{ color: 'black', fontSize: 20, marginTop: 10 }}>OR</Text>
          <TextInput
            style={[styles.input, { width: '95%' }]}
            placeholder="Phone Number"
            secureTextEntry
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
      </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6e8d3',
    justifyContent: 'flex-start',
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
      marginTop: 50,
  },
  inputLabelContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    marginTop: 50,
  },
  input: {
    height: 50,
    backgroundColor: '#fcfcfc',
    borderRadius: 10,
    width: '90%',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Verify;
