import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

const PaymentCard = ({card, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: 90,
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
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 15,
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={card?.image}
              resizeMode="contain"
            />
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.white,
                  fontFamily: 'ppneuemontreal-book',
                }}>
                {card?.number}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.secondaryTextColor,
                }}>
                EXP 09/02
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

export default PaymentCard;
