import * as React from 'react';
import { Text, View, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../../components/SavedCard';
import { Recipe, RootStackParamList } from '../../globals/types';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const recipeData: Recipe = {
  title: 'Creamy Funghi Risotto',
  duration: '30 minutes',
  calories: 850,
  serves: 4,
  ingredients: [
    { name: 'Arborio rice', amount: '250g' },
    { name: 'spring onions', amount: '2' },
    { name: 'garlic cloves', amount: '2' },
    { name: 'mixed mushrooms', amount: '500g' }
    // ...other ingredients
  ],
  preparationSteps: [
    'Heat up oil in a small pot.',
    'Add the onions and garlic and cook until soft.',
    'Add the mushrooms and cook until soft.',
    'Add the rice and cook for 2 minutes.',
    'Add the stock and stir until the rice is cooked.',
    // ...other steps
  ],
  image: 'https://source.unsplash.com/400x300/?pasta',
};

type SavedScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Saved'
>;

const Saved = () => {
  const navigation = useNavigation<SavedScreenNavigationProp>();
  const handlePress = () => {
    navigation.navigate('RecipeDetail', { recipe: recipeData });
  }
  const data = [
    { id: '1', title: 'Burger', description: 'Description 1', imageUrl: 'https://source.unsplash.com/400x300/?burger' },
    { id: '2', title: 'Pizza', description: 'Description 2', imageUrl: 'https://source.unsplash.com/400x300/?pizza' },
    { id: '3', title: 'Sushi', description: 'Description 3', imageUrl: 'https://source.unsplash.com/400x300/?sushi' },
    { id: '4', title: 'Salad', description: 'Description 4', imageUrl: 'https://source.unsplash.com/400x300/?salad' },
    { id: '5', title: 'Pasta', description: 'Description 5', imageUrl: 'https://source.unsplash.com/400x300/?pasta' },
    { id: '6', title: 'Tacos', description: 'Description 6', imageUrl: 'https://source.unsplash.com/400x300/?tacos' },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.cardContainer}>
        <Card title={item.title} description={item.description} imageUrl={item.imageUrl} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ marginTop: "10%" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}>

        </FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f6e8d3',
  },
  flatListContent: {
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    margin: 8,
  },
});

export default Saved;
