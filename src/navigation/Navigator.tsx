import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {RestaurantDetailScreen} from '../screens/RestaurantDetailScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};
