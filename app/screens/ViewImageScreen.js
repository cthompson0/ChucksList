import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  image: {
    height: '100%',
    width: '100%',
    alignContent: 'center',
    resizeMode: 'contain',
  },
});
export default ViewImageScreen;
