import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <FontAwesome5 name={'home'} size={25} style={styles.icon} />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome5 name={'search'} size={25} style={styles.icon} />
          <Text>Browse</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome5 name={'shopping-bag'} size={25} style={styles.icon} />
          <Text>Grocery</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome5 name={'receipt'} size={25} style={styles.icon} />
          <Text>Orders</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <FontAwesome5 name={'user'} size={25} style={styles.icon} />
          <Text>Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
});
