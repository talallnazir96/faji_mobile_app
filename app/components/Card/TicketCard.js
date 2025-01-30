import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../utils/colors';

const TicketCard = ({title, value, image}) => {
  return (
    <View
      style={{
        width: 110,
        height: 96,
        alignSelf: 'center',
        marginVertical: 20,
        backgroundColor: '#282828',
        borderRadius: 35,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Text
          style={{
            color: colors.primaryTextColor,
            fontSize: 18,
            fontWeight: '500',
          }}>
          {image && (
            <Image
              style={{width: 15, height: 15}}
              source={image}
              resizeMode="contain"
            />
          )}
          {value}
        </Text>
        <Text
          style={{
            color: colors.primaryTextColor,
            fontSize: 10,
            fontWeight: '400',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default TicketCard;
