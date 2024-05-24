import React from 'react';
import {TextInput} from 'react-native';

export default function InputField({placeholder, style, ...props}) {
  return (
    <TextInput
      style={[
        {
          backgroundColor: '#282828CF',
          borderRadius: 35,
          height: 70,
          paddingHorizontal: 25,
          paddingVertical: 10,
          color: '#A1A1A1',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          fontFamily: 'ppneuemontreal-thin',
        },
        style,
      ]}
      placeholder={placeholder}
      placeholderTextColor="#A1A1A1"
      {...props}
    />
  );
}
