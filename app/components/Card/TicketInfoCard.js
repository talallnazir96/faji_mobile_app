import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../utils/colors';

export default function TicketInfoCard({item}) {
  return (
    <View
      style={{
        backgroundColor: '#282828',
        width: 270,
        height: 80,
        alignSelf: 'center',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
        // marginHorizontal: 20,
      }}>
      <Image
        style={{width: 70, height: 55}}
        source={require('../../assets/ticket-img.png')}
      />
      <View>
        <Text
          style={{
            fontSize: 15,
            color: colors.white,
            fontFamily: 'ppneuemontreal-book',
          }}>
          {item?.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.primary,
            fontFamily: 'ppneuemontreal-book',
          }}>
          ${item?.price}{' '}
          <Text style={{color: colors.secondaryTextColor}}>
            {' '}
            &#8226; {item?.seats} seats
          </Text>
        </Text>
      </View>
      <Image
        style={{width: 18, height: 18}}
        source={require('../../assets/next-icon.png')}
        resizeMode="contain"
      />
    </View>
  );
}
