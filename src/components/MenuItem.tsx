import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

type Props = {
  description: string;
  image: string;
  price: string;
  title: string;
};

export const MenuItem = ({title, description, price, image}: Props) => {
  return (
    <View style={styles.container}>
      <CheckBox checked={true} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  info: {
    width: 200,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
});
