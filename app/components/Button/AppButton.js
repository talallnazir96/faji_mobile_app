import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../utils/colors';

export default function AppButton({title, style, onPress, titleStyle}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 60,
          backgroundColor: colors.primary,
          borderRadius: 30,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Text
        style={[
          {
            color: colors.backgroundColor,
            fontSize: 18,
            fontWeight: '600',
          },
          titleStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
