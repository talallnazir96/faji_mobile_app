import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/Entypo';
import colors from '../../utils/colors';

const HistoryCard = ({card, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          minHeight: 83,
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
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={card?.image}
              resizeMode="contain"
            />

            <View style={{justifyContent: 'center', width: '80%'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.white,
                  fontFamily: 'ppneuemontreal-book',
                }}>
                {card?.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.secondaryTextColor,
                }}>
                {card?.subTitle}
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondaryTextColor,
                  }}>
                  {card?.date}
                </Text>
                <MaterialIcon
                  name={'dot-single'}
                  color={colors.white}
                  size={15}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.secondaryTextColor,
                  }}>
                  {card?.time}
                </Text>
                <MaterialIcon
                  name={'dot-single'}
                  color={colors.white}
                  size={15}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.primary,
                  }}>
                  {card?.balance}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;
