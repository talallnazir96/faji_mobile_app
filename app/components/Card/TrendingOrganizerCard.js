import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from '../../utils/colors';

const TrendingOrganizerCard = ({item}) => {
  return (
    <View style={styles.eventContainer}>
      <ImageBackground
        imageStyle={styles.backgroundImageStyle}
        resizeMode="stretch"
        source={item.image}
        style={styles.eventImage}>
        <View style={styles.profileContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.title}</Text>
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
    backgroundColor: colors.primary,
  },

  profileContainer: {
    // marginLeft: 20,
    alignSelf: 'center',
    marginTop: 'auto',
    flexDirection: 'row',
    marginBottom: 10,
  },

  textContainer: {
    // marginLeft: 8,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    textAlign: 'center',
  },
});

export default TrendingOrganizerCard;
