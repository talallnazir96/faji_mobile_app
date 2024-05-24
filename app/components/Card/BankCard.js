import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

const BankCard = ({card, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: 83,
          alignSelf: 'center',
          marginVertical: 5,
          backgroundColor: '#282828',
          borderRadius: 35,
          flexDirection: 'row',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 30,
            paddingLeft: 15,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
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
                source={card?.image}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.white,
                  fontFamily: 'ppneuemontreal-thin',
                }}>
                {card?.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.secondaryTextColor,
                }}>
                {card?.subTitle}
              </Text>
            </View>
          </View>
          <MaterialIcon
            name={
              selectedId === card?.id
                ? 'checkbox-blank-circle'
                : 'checkbox-blank-circle-outline'
            }
            color={selectedId === card?.id ? colors.primary : '#FFFFFF33'}
            size={19}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BankCard;
