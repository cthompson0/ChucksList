import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
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
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
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
