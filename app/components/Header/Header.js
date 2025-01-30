import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';

export default function Header({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#282828',
        width: 50,
        height: 50,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 30,
      }}>
      <Icon
        name="arrow-back-ios"
        style={{marginLeft: 5}}
        color={colors.white}
        size={20}
      />
    </TouchableOpacity>
  );
}
