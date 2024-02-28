import * as React from 'react';
import { Text, View, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import Card from '../../components/CardComponent';

const Saved: React.FC = () => {
  const data = [
    { id: '1', title: 'Burger', description: 'Description 1', imageUrl: 'https://source.unsplash.com/400x300/?burger' },
    { id: '2', title: 'Pizza', description: 'Description 2', imageUrl: 'https://source.unsplash.com/400x300/?pizza' },
    { id: '3', title: 'Sushi', description: 'Description 3', imageUrl: 'https://source.unsplash.com/400x300/?sushi' },
    { id: '4', title: 'Salad', description: 'Description 4', imageUrl: 'https://source.unsplash.com/400x300/?salad' },
    { id: '5', title: 'Pasta', description: 'Description 5', imageUrl: 'https://source.unsplash.com/400x300/?pasta' },
    { id: '6', title: 'Tacos', description: 'Description 6', imageUrl: 'https://source.unsplash.com/400x300/?tacos' },
    { id: '7', title: 'Burger', description: 'Description 1', imageUrl: 'https://source.unsplash.com/400x300/?burger' },
    { id: '8', title: 'Pizza', description: 'Description 2', imageUrl: 'https://source.unsplash.com/400x300/?pizza' },
    { id: '9', title: 'Sushi', description: 'Description 3', imageUrl: 'https://source.unsplash.com/400x300/?sushi' },
    { id: '10', title: 'Salad', description: 'Description 4', imageUrl: 'https://source.unsplash.com/400x300/?salad' },
    { id: '11', title: 'Pasta', description: 'Description 5', imageUrl: 'https://source.unsplash.com/400x300/?pasta' },
    { id: '12', title: 'Tacos', description: 'Description 6', imageUrl: 'https://source.unsplash.com/400x300/?tacos' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Card title={item.title} description={item.description} imageUrl={item.imageUrl} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
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
  title: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontSize: 54,
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
