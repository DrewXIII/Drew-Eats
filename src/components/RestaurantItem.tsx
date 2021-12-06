import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  image_url: string;
  name: string;
  rating: number;
};

export const RestaurantItem = ({image_url, name, rating}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.mainButton}>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: image_url,
            }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textWrapper}>
          <View>
            <Text style={styles.textMainText}>{name}</Text>
            <Text style={styles.textSecondayText}>30-45 · min</Text>
          </View>
          <View style={styles.textRating}>
            <Text>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  mainButton: {
    marginBottom: 30,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textMainText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textSecondayText: {
    fontSize: 13,
    color: 'gray',
  },
  textRating: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#eee',
    height: 30,
    width: 30,
  },
  icon: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: 180,
  },
});
