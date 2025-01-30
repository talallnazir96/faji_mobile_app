import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from '../../utils/colors';

const UpcomingEventCard = ({item}) => {
  return (
    <View style={styles.eventContainer}>
      <ImageBackground
        imageStyle={styles.backgroundImageStyle}
        resizeMode="stretch"
        source={item.image}
        style={styles.eventImage}>
        <View style={styles.liveContainer}>
          <Text style={styles.monthText}>{item.month}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={item.profile} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.title}</Text>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    width: 200,
    height: 270,
    marginRight: 20,
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: 15,
    alignSelf: 'center',
  },
  eventImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    borderRadius: 35,
  },
  liveContainer: {
    position: 'absolute',
    right: 25,
    top: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 13,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    marginTop: -10,
  },
  profileContainer: {
    marginLeft: 20,
    marginTop: 'auto',
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  textContainer: {
    marginLeft: 8,
  },
  nameText: {
    fontSize: 13,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 13,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    marginTop: -10,
  },
});

export default UpcomingEventCard;
