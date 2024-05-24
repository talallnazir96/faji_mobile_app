import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../utils/colors';

const TrendingEventCard = ({item}) => {
  return (
    <View style={styles.eventContainer}>
      <ImageBackground
        imageStyle={{borderRadius: 35}}
        resizeMode={Platform.OS == 'ios' ? 'stretch' : 'contain'}
        source={item.image}
        style={styles.eventImage}>
        <View style={styles.liveContainer}>
          <Text style={styles.liveText}>Live</Text>
          <Image
            style={styles.heartIcon}
            source={require('../../assets/heart-card-icon.png')}
          />
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventInfo}>
            {item.date} &#8226; {item.time}
            <Text style={{color: colors.primary}}>
              {' '}
              &#8226; From ${item.price}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    width: 300,
    height: 280,
    marginRight: 20,
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: 15,
    alignSelf: 'center',
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
    width: 40,
    height: 40,
  },
  eventDetails: {
    marginTop: 'auto',
    backgroundColor: 'rgba(7, 7, 7, 0.8)',
    width: '100%',
    height: 90,
    borderRadius: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 13,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 5,
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

export default TrendingEventCard;
