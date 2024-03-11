import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../globals/types';

// Assuming you've defined RootStackParamList as shown in previous examples
type Props = NativeStackScreenProps<RootStackParamList, 'RecipeDetail'>;

const RecipeDetail: React.FC<Props> = ({ route, navigation }) => {
    const { recipe } = route.params;
    const [isBookmarked, setIsBookmarked] = React.useState(true);
    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/back-arrow.png')} style={{ width: 30, height: 20 }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bookmarkButton}>
                {isBookmarked ? <Image source={require('../../../assets/bookmark-selected.png')} style={{ width: 30, height: 30 }} /> :
                    <Image source={require('../../../assets/bookmark-unselected.png')} style={{ width: 20, height: 20 }} />}
            </TouchableOpacity>
            <ScrollView style={{ marginTop: 100 }}>
                <View style={styles.content}>
                    <View style={{ display: "flex", alignItems: 'center' }}>
                        <Text style={styles.title}>{recipe.title}</Text>
                    </View>

                    <Image source={{ uri: recipe.image }} style={styles.image} />
                    <View style={styles.details}>
                        <Text style={styles.detailText}>{recipe.duration}</Text>
                        <Text style={styles.detailText}>{`${recipe.calories} cal`}</Text>
                        <Text style={styles.detailText}>{`Serves ${recipe.serves}`}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.heading}>Ingredients</Text>
                        {recipe.ingredients.map((ingredient, index) => (
                            <View key={index} style={styles.ingredientRow}>
                                <Text style={styles.ingredient}>{ingredient.name}</Text>
                                <Text style={styles.ingredient}>{ingredient.amount}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.heading}>Preparation</Text>
                        {recipe.preparationSteps.map((step, index) => (
                            <View key={index} style={styles.step}>
                                <Text style={styles.stepText}>{index + 1}. {step}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6e8d3',
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,

    },
    backButton: {
        position: 'absolute',
        zIndex: 100,
        top: 65,
        left: 16,
    },
    bookmarkButton: {
        position: 'absolute',
        zIndex: 100,
        top: 60,
        right: 16,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#030303',
        fontFamily: 'Sora',
        fontWeight: 'bold',
        lineHeight: 34,
        width: '80%',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 8,
    },
    detailText: {
        fontSize: 16,
        color: '#333',
    },
    section: {
        marginTop: 24,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    ingredientRow: {
        marginVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    ingredient: {
        fontSize: 16,
        color: '#333',
    },
    step: {
        marginVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    stepText: {
        fontSize: 16,
        color: '#333',
    },
});

export default RecipeDetail;