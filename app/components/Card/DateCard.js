import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../utils/colors';

const DateCard = () => {
  return (
    <View
      style={{
        width: 166,
        height: 100,
        alignSelf: 'center',
        marginVertical: 20,
        backgroundColor: '#282828',
        borderRadius: 35,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Date */}
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          gap: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 18, height: 18}}
            source={require('../../assets/calender.png')}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 14,
              color: colors.secondaryTextColor,
              marginLeft: 10,
            }}>
            Date
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: colors.white,
            fontFamily: 'ppneuemontreal-book',
          }}>
          03 Mar 2023
        </Text>
      </View>
    </View>
  );
};

export default DateCard;
