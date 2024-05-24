import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';

export default function Button({title, style, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 50,
          backgroundColor: '#111111',
          borderRadius: 30,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Text
        style={{
          color: colors.primary,
          fontSize: 16,
          fontWeight: '400',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
