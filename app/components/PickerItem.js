import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from './Icon';

import AppText from './AppText/AppText';

function PickerItem({ item, onPress, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} backgroundColor={backgroundColor} size={70} />
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
