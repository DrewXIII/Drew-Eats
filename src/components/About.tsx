import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = {
  image: string;
  name: string;
  price: string;
  review_count: number;
  rating: number;
  categories: {alias: string; title: string}[];
};

export const About = ({
  name,
  image,
  price,
  review_count,
  rating,
  categories,
}: Props) => {
  const formattedCategories = categories
    .map((category: {alias: string; title: string}) => category.title)
    .join(' · ');

  const description = `${formattedCategories} ${
    price ? ' · ' + price : ''
  } · 💶 · ${rating} ⭐ (${review_count}+)`;

  return (
    <View>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
});
