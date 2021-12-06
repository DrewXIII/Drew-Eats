import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FoodService} from '../utils/enums/FoodService.enum';

type Props = {
  isActive: boolean;
  label: FoodService.Delivery | FoodService.Pickup;
  setIsActive: React.Dispatch<
    React.SetStateAction<FoodService.Delivery | FoodService.Pickup>
  >;
};

export const HeaderButton = ({isActive, label, setIsActive}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: isActive ? 'black' : 'white'}]}
      onPress={() => setIsActive(label)}>
      <Text style={[styles.label, {color: isActive ? 'white' : 'black'}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: '900',
  },
});
