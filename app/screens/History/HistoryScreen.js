import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import HistoryCard from '../../components/Card/HistoryCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';

const paymentMethods = [
  {
    id: 1,
    image: require('../../assets/person.png'),
    title: 'Winston Block',
    subTitle: 'Winston buy 2 ticket for your GENfest event',
    date: 'Wed 22/03',
    time: '08:30 PM',
    balance: '$40.00',
  },
  {
    id: 2,
    image: require('../../assets/person.png'),
    title: 'Renee Ruecker',
    subTitle: 'Winston buy 2 ticket for your GENfest event',
    date: 'Wed 22/03',
    time: '08:30 PM',
    balance: '$80.00',
  },
  {
    id: 3,
    image: require('../../assets/person.png'),
    title: 'Douglas Rice',
    subTitle: 'Winston buy 2 ticket for your GENfest event',
    date: 'Wed 22/03',
    time: '08:30 PM',
    balance: '$120.00',
  },
  {
    id: 4,
    image: require('../../assets/person.png'),
    title: 'Winston Block',
    subTitle: 'Winston buy 2 ticket for your GENfest event',
    date: 'Wed 22/03',
    time: '08:30 PM',
    balance: '$40.00',
  },
];
export default function HistoryScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <AppHeader
          title={'History'}
          rightIconSource={require('../../assets/upload-icon.png')}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={2} style={styles.detailsText}>
              Peoples who have bought tickets for your party.
            </Text>
          </View>
          <View style={styles.mainContainer}>
            {paymentMethods.map(card => (
              <HistoryCard key={card.id} card={card} />
            ))}
          </View>
        </View>
        <View style={styles.btnContainer}>
          <AppButton title={'Done'} onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '700',
    lineHeight: 35,
    letterSpacing: -1,
  },
  bodyContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  detailsText: {
    fontSize: 13,
    color: '#AAA9A9',
    fontFamily: 'ppneuemontreal-book',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  btnContainer: {
    marginTop: 'auto',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});
