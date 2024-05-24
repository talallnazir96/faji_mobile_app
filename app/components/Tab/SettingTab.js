import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/colors';

const SettingTab = ({onPress, title, Icon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
        }}>
        {/* Tab */}
        <View style={{flexDirection: 'row'}}>
          {/* Tab icon */}
          {Icon}
          {/* Tab Title */}
          <Text
            style={{
              fontSize: 17,
              color: colors.white,
              marginLeft: 20,
              fontWeight: '400',
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#282828',
            width: 35,
            height: 35,
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Image
            source={require('../../assets/next-icon.png')}
            style={{
              width: 17,
              height: 17,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingTab;
