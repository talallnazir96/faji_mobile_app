import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import DateCard from '../../components/Card/DateCard';
import TimeCard from '../../components/Card/TimeCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';
export default function MapScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/map.png')}
          style={styles.imageBackground}
        />
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 40,
          alignSelf: 'center',
        }}>
        <AppHeader
          title={'Direction Map'}
          rightIconSource={require('../../assets/upload-icon.png')}
        />
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          {/* Event Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>The Global City</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              Nesciunt alias a. Nihil sint et nihil atque. Omnis quis rerum.
              Quibusdam ex excepturi.
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <DateCard />
            <TimeCard />
          </View>
          <View style={styles.btnContainer}>
            <AppButton
              onPress={() => navigation.navigate(ROUTES.FESTIVAL_TICKET)}
              title={'Get Direction'}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  imageContainer: {
    flex: 1,
  },
  bodyContainer: {
    paddingHorizontal: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  titleContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
    // paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: -1,
  },
  detailsContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: '#AAA9A9',
    fontFamily: 'ppneuemontreal-book',
    width: '100%',
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 'auto',
    marginBottom: 50,
  },
});
