import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FoodServiceEnum} from '../utils/enums/FoodServiceEnum.enum';
import {HeaderButton} from './HeaderButton';

export const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState<
    FoodServiceEnum.Delivery | FoodServiceEnum.Pickup
  >(FoodServiceEnum.Delivery);

  return (
    <View style={styles.container}>
      <HeaderButton
        label={FoodServiceEnum.Delivery}
        isActive={activeTab === FoodServiceEnum.Delivery}
        setIsActive={setActiveTab}
      />
      <HeaderButton
        label={FoodServiceEnum.Pickup}
        isActive={activeTab === FoodServiceEnum.Pickup}
        setIsActive={setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
