import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { BottomNavigation, TextInput, Button, Chip, Text } from 'react-native-paper';

const Search = () => {
  const [ingredient, setIngredient] = useState('');
  // Explicitly typing the ingredientsList as an array of strings
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);

  const addIngredient = () => {
    if (ingredient) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    const newIngredientsList = ingredientsList.filter((_, i) => i !== index);
    setIngredientsList(newIngredientsList);
  };

  const IngredientChips = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {ingredientsList.map((item, index) => (
        <Chip
          key={index}
          onClose={() => removeIngredient(index)}
          onTouchEnd={() => removeIngredient(index)}
          style={styles.chip}
        >
          {item}
        </Chip>
      ))}
    </ScrollView>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <TextInput
          style={styles.input}
          label="Add ingredients e.i. Milk"
          value={ingredient}
          onChangeText={setIngredient}
          right={<TextInput.Icon icon="eye" />}
        />
        <TouchableOpacity style={styles.button} onPress={addIngredient}>
          <Text style={styles.buttonText}>ADD INGREDIENT</Text>
        </TouchableOpacity>
        <IngredientChips />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6e8d3',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: 'none'
  },
  button: {
    backgroundColor: '#f59002',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  chipsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: 'transparent'
  },
  chipText: {
    color: '#007bff',
  },
  searchButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 26,
    marginTop: 10,
    backgroundColor: '#0f6374',
  },
  searchButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 28,
  },
});



export default Search;
