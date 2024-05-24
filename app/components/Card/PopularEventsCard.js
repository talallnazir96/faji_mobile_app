import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../utils/colors';

const PopularEventsCard = ({item}) => {
  return (
    <View style={styles.eventContainer}>
      <View style={{width: '50%'}}>
        <Image
          source={item.image}
          style={{width: '100%', height: '100%', borderRadius: 20}}
          resizeMode="contain"
        />
      </View>
      <View style={{width: '50%', marginLeft: 10}}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventInfo}>
          {item.date} &#8226; {item.time}
          <Text style={{color: colors.primary}}> From ${item.price}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 120,
    // backgroundColor: 'blue',
    marginBottom: 10,
  },
  eventImage: {
    flex: 1,
  },
  liveContainer: {
    width: '90%',
    height: 30,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  liveText: {
    fontSize: 17,
    color: '#CA4638',
    fontFamily: 'ppneuemontreal-thin',
  },
  heartIcon: {
    width: 15,
    height: 15,
  },
  eventDetails: {
    marginTop: 'auto',
    backgroundColor: 'rgba(7, 7, 7, 0.8)',
    width: '100%',
    height: 90,
    borderRadius: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  eventTitle: {
    fontSize: 13,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    marginHorizontal: 12,
    marginTop: 10,
  },
  eventInfo: {
    fontSize: 11,
    color: '#AAA9A9',
    fontFamily: 'ppneuemontreal-book',
    width: '75%',
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PopularEventsCard;
