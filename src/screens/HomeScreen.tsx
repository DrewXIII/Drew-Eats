import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Categories} from '../components/Categories';
import {HeaderTabs} from '../components/HeaderTabs';
import {SearchBar} from '../components/SearchBar';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderTabs />
      <SearchBar />
      <Categories />
    </SafeAreaView>
  );
};
