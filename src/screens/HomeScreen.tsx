import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HeaderTabs} from '../components/HeaderTabs';
import {SearchBar} from '../components/SearchBar';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderTabs />
      <SearchBar />
    </SafeAreaView>
  );
};
