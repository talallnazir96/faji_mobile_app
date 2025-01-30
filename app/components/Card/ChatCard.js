import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../utils/colors';

export default function ChatCard({item}) {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image source={item.image} style={{width: 47, height: 47}} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 15,
              color: '#F8F8F8',
              fontFamily: 'ppneuemontreal-medium',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#616161',
              fontFamily: 'ppneuemontreal-medium',
            }}>
            {item.description}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 13,
            color: '#616161',
            fontFamily: 'ppneuemontreal-medium',
          }}>
          {item.time}
        </Text>
        <View
          style={{
            width: 21,
            height: 21,
            backgroundColor: colors.primary,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#000000',
              fontFamily: 'ppneuemontreal-medium',
            }}>
            {item.messageCount}
          </Text>
        </View>
      </View>
    </View>
  );
}
