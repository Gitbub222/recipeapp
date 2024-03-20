import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Welcome = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../../../assets/Explore-our-delicious-recipes2.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Recipe for Success</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/next_button.png')} // Replace 'your-button-image.png' with your image path
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    marginTop: 75,
    color: '#5B3A2A',
    fontSize: 40,
    fontFamily: 'Roxborough CF',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  buttonImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
});

export default Welcome;