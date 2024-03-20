import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const ProfilePicture = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: uri }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderRadius: 50,
  },
});