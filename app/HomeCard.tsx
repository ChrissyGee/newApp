import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import homeScreenData from '../constants/homeScreenData';

const screenWidth = Dimensions.get('window').width;

export default function HomeCard() {
  const { section, index } = useLocalSearchParams();

  const card =
    homeScreenData[section as keyof typeof homeScreenData]?.[parseInt(index as string)];

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: '' }} />

      <View style={styles.container}>
        {card?.image && (
          <Image
            source={card.image}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        <Text style={styles.title}>{card?.title}</Text>
        <Text style={styles.description}>{card?.description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: screenWidth * 0.9,
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
  },
});
