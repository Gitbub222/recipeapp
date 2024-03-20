import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';

const SignUp = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !firstName || !lastName) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    // implement logic for processing sign up here
    Alert.alert('Credentials', `Email: ${email} Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <View style={styles.firstNameLabelContainer}>
            <Text style={styles.labelText}>First name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
        </View>
        <View style={styles.lastNameLabelContainer}>
            <Text style={styles.labelText}>Last name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
        </View>
      </View>
      <View style={styles.inputLabelContainer}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={[styles.input, { width: '95%' }]}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={[styles.input, { width: '95%' }]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
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
    marginTop: 50,
    marginBottom: 50,
  },
  labelText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
  },
  firstNameLabelContainer: {
    flexDirection: 'column',
    width: '50%',
  },
  lastNameLabelContainer: {
    flexDirection: 'column',
    width: '50%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  inputLabelContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '90%',
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
  linkText: {
    color: '#007bff',
    fontSize: 16,
    marginTop: 10,
  },
});

export default SignUp;
