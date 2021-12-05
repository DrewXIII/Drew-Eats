import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

type Props = {
  image: ImageSourcePropType;
  text: string;
};

export const Category = ({image, text}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
  },
});
