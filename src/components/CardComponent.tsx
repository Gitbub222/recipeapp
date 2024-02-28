// components/CardComponents.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardComponent: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 175,
    height: 175,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: 1,
    position: 'absolute',
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: '72%',
    backgroundColor: '#f6af4c',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 2,
    zIndex: 2,
  },
  title: {
    color: '#030303',
    fontSize: 18,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  description: {
    color: '#030303',
    fontSize: 16,
    paddingLeft: 5,
  },
});

export default CardComponent;
