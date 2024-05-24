import React, {useState} from 'react';
import {Text, View} from 'react-native';
import colors from '../../utils/colors';

export default function FilterCard({item, index}) {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleFilterPress = newIndex => {
    setSelectedFilterIndex(newIndex === selectedFilterIndex ? null : newIndex);
  };

  return (
    <View
      // onPress={() => handleFilterPress(index)}
      style={{
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#282828',
        marginHorizontal: 5,
      }}>
      <Text
        style={{
          fontSize: 13,
          color: selectedFilterIndex == index ? colors.primary : '#616161',
          fontFamily: 'ppneuemontreal-thin',
        }}>
        {item.title}
      </Text>
    </View>
  );
}
