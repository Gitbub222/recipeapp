import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    // implement logic for processing login here
    Alert.alert('Credentials', `Email: ${email} Password: ${password}`);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/login-logo.png')} style={styles.image} imageStyle={styles.imageStyle} />
      <Text style={styles.text}>Welcome!</Text>
      <View style={styles.inputLabelContainer}>
          <TextInput
            style={[styles.input, { width: '95%' }]}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={[styles.input, { width: '95%' }]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={handleRememberMe}>
            {rememberMe ? <View style={{ flex: 1, backgroundColor: 'black' }} /> : null}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Remember me</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Text style={[styles.checkboxText, { color: '#007bff' }]}> Forgot password?</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 35,
    marginTop: 50,
    marginBottom: 10,
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
    marginTop: 20,
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
  image: {
    width: 250,
    height: 250,
    marginTop: 100,
  },
  imageStyle: {
    borderRadius: 50,
  },
  checkboxContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  checkboxText: {
    color: 'black',
    fontSize: 15,
    margin: 10,
  },
  checkbox: {
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#f6e8d3',
  },
});

export default Login;
