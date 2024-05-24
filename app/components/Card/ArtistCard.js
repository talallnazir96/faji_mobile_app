import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../utils/colors';

export default function ArtistCard({item}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
      }}>
      <Image
        source={item.image}
        style={{width: 70, height: 70, borderRadius: 35}}
        resizeMode="contain"
      />
      <Text
        style={{
          color: colors.white,
          fontFamily: 'ppneuemontreal-thin',
          fontSize: 16,
          marginTop: 10,
        }}>
        {item.name}
      </Text>
    </View>
  );
}
