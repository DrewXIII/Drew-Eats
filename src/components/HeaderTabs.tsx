import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FoodService} from '../utils/enums/FoodService.enum';
import {HeaderButton} from './HeaderButton';

type Props = {
  activeTab: FoodService.Delivery | FoodService.Pickup;
  setActiveTab: React.Dispatch<React.SetStateAction<FoodService>>;
};

export const HeaderTabs = ({activeTab, setActiveTab}: Props) => {
  return (
    <View style={styles.container}>
      <HeaderButton
        label={FoodService.Delivery}
        isActive={activeTab === FoodService.Delivery}
        setIsActive={setActiveTab}
      />
      <HeaderButton
        label={FoodService.Pickup}
        isActive={activeTab === FoodService.Pickup}
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
