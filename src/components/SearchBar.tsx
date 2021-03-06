import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
AntDesign;

type Props = {
  setPlace: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({setPlace}: Props) => {
  const onSearch = data => {
    setPlace(data.description.split(',')[0]);
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{key: ''}} // Key has been removed but by default San Diego will be searched
        onPress={data => onSearch(data)}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            <AntDesign
              style={styles.rightButtonIcon}
              name="clockcircle"
              size={11}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
  },
  rightButton: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  rightButtonIcon: {
    marginRight: 6,
  },
});
