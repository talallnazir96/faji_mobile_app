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

const OrganizeEventTicketCard = ({item, type}) => {
  return (
    <View style={styles.eventContainer}>
      <ImageBackground
        imageStyle={{
          borderRadius: 35,
          backgroundColor: type === 'trendingOrganizer' ? colors.primary : null,
        }}
        resizeMode={Platform.OS == 'ios' ? 'stretch' : 'contain'}
        source={item.image}
        style={styles.eventImage}>
        <View style={styles.eventDetails}>
          <View style={{width: '80%'}}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventInfo}>
              {item.date} &#8226; {item.time}
              <Text style={{color: colors.primary}}>
                {' '}
                &#8226; From ${item.price}
              </Text>
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              width: 50,
              height: 50,
              backgroundColor: 'rgba(7, 7, 7, 1)',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.heartIcon}
              source={require('../../assets/upRight-arrow.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 280,
    // marginRight: 20,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 15,
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

export default OrganizeEventTicketCard;
