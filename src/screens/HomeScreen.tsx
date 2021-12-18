import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {BottomTabs} from '../components/BottomTabs';
import {Categories} from '../components/Categories';
import {HeaderTabs} from '../components/HeaderTabs';
import {RestaurantItem} from '../components/RestaurantItem';
import {SearchBar} from '../components/SearchBar';
import {FoodService} from '../utils/enums/FoodService.enum';
import {Restaurant} from '../utils/interfaces/Restaurant.interface';
import {getRestaurantsByLocation} from '../utils/services/restaurants/getRestaurantsByLocation';

export const HomeScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [place, setPlace] = useState('San Diego'); // Google Place API KEY has been removed, so this value is hardcoded to see one place.
  const [activeTab, setActiveTab] = useState<
    FoodService.Delivery | FoodService.Pickup
  >(FoodService.Delivery);

  useEffect(() => {
    getRestaurantsByLocation(place).then(
      (data: {
        businesses: Restaurant[];
        region: {center: {longitude: number; latitude: number}};
        total: number;
      }) => {
        const restaurants = data.businesses.filter((restaurant: Restaurant) =>
          restaurant.transactions.includes(activeTab.toLowerCase()),
        );

        setRestaurants(restaurants);
      },
    );
  }, [place, activeTab]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setPlace={setPlace} />
      </View>
      <Categories />
      <ScrollView showsVerticalScrollIndicator={false}>
        {restaurants.map(restaurant => (
          <RestaurantItem
            key={restaurant.id}
            {...restaurant}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  screen: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
