import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/colors';

const BalanceCard = ({balance, onPress, selectedId}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          height: 100,
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
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: colors.white,
            }}>
            Current Balance
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: colors.white,
            }}>
            {balance}
            <Text
              style={{
                color: '#FEB822',
                fontSize: 18,
              }}>
              {' '}
              USD$
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BalanceCard;
