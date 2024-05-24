import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';

const PayCard = ({card, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: 80,
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
            <Text
              style={{
                fontSize: 14,
                color: colors.white,
                fontFamily: 'ppneuemontreal-book',
              }}>
              {card?.name}
            </Text>
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

export default PayCard;
