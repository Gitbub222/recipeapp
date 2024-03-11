// components/CardComponents.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet, Image, Vibration, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const SearchCard: FC<CardProps> = ({ title, description, imageUrl }) => {
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    return (
        <View style={styles.card}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{description}</Text>
                </View>
                <TouchableOpacity style={styles.bookmarkIconContainer} onPress={() => setIsBookmarked(
                    isBookmarked => !isBookmarked)}>
                    {isBookmarked ? <Image source={require('../../assets/bookmark-selected.png')} style={{ width: 40, height: 40 }} /> :
                        <Image source={require('../../assets/bookmark-unselected.png')} style={{ width: 40, height: 40 }} />}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    image: {
        width: "40%",
        height: "100%",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookmarkIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10, // Add some margin to the right of the icon
    },
    bookmarkIcon: {
        zIndex: 50,
        width: 24,
        height: 24,
    },
});

export default SearchCard;
