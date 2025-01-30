import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/colors';

const EventDetailsCard = () => {
  const handleButtonPress = () => {
    Alert.alert('Thank you!', 'We are actively working on this. Stay tuned!', [
      {text: 'Got it', onPress: () => console.log('Happy Click')},
    ]);
  };

  return (
    <View
      style={{
        width: '85%',
        height: 180,
        alignSelf: 'center',
        marginVertical: 20,
        backgroundColor: '#282828',
        borderRadius: 35,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Date */}
      <View
        style={{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          paddingLeft: 30,
        }}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 18, height: 18}}
              source={require('../../assets/calender.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.secondaryTextColor,
                marginLeft: 10,
              }}>
              Date
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: colors.white,
              fontFamily: 'ppneuemontreal-book',
            }}>
            03 Mar 2023
          </Text>
        </View>
        {/* Location */}
        <View style={{marginTop: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 18, height: 18}}
              source={require('../../assets/location.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.secondaryTextColor,
                marginLeft: 10,
              }}>
              Location
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: colors.white,
              fontFamily: 'ppneuemontreal-book',
            }}>
            Bossier City South Wehner Rest Avon
          </Text>
        </View>
      </View>
      {/* Time and Show Map Button */}
      <View
        style={{
          width: '50%',
          height: '100%',
          justifyContent: 'space-around',
          paddingLeft: 30,
        }}>
        {/* Time */}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 18, height: 18}}
              source={require('../../assets/clock.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.secondaryTextColor,
                marginLeft: 10,
              }}>
              Time
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: colors.white,
              fontFamily: 'ppneuemontreal-book',
            }}>
            10:00 PM - End
          </Text>
        </View>
        {/* Show Map Button */}
        <TouchableOpacity onPress={handleButtonPress}>
          <View
            style={{
              width: 108,
              height: 42,
              backgroundColor: colors.primary,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.black,
              }}>
              Show map
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventDetailsCard;
