import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/colors';

const ReviewCard = ({card, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: 200,
          // alignSelf: 'center',
          marginVertical: 5,
          backgroundColor: '#282828',
          borderRadius: 35,
          flexDirection: 'row',
          // justifyContent: 'center',
          // alignItems: 'center',
          paddingRight: 30,
          paddingLeft: 15,
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
            paddingTop: 30,
            gap: 15,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.backgroundColor,
              borderRadius: 50,
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('../../assets/dollar-pack.png')}
              resizeMode="contain"
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 22,
                color: colors.white,
                fontFamily: 'PP Neue Montreal',
                fontWeight: '500',
              }}>
              Withdrawal Amount
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: colors.secondaryTextColor,
                fontFamily: 'PP Neue Montreal',
              }}>
              John Doe ********454
            </Text>
            <Text
              style={{
                fontSize: 50,
                fontWeight: '500',
                color: '#FEB822',
                paddingTop: 20,
              }}>
              230.00
              <Text
                style={{
                  fontSize: 14,
                  color: colors.white,
                  fontFamily: 'ppneuemontreal-book',
                }}>
                TTD$
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;
