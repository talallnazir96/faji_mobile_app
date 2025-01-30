import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OrganizeEventTicketCard from '../../components/Card/OrganizeEventTicketCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

const trendingEvents = [
  {
    image: require('../../assets/trend-event1.png'),
    title: 'GENfest Music Festival 2024 - Multi - sensorial Audio Interface',
    date: 'Wed 22/03',
    time: '8:30 PM',
    price: '40.00',
  },
  {
    image: require('../../assets/trend-event1.png'),
    title: '2-GENfest Music Festival 2024 - Multi - sensorial Audio Interface',
    date: 'Wed 22/03',
    time: '9:30 PM',
    price: '30.00',
  },
  {
    image: require('../../assets/trend-event1.png'),
    title: '4-GENfest Music Festival 2024 - Multi - sensorial Audio Interface',
    date: 'Wed 22/03',
    time: '10:30 PM',
    price: '50.00',
  },
];

export default function FavoriteScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <AppHeader
          title={'Favourites'}
          rightIconSource={require('../../assets/search.png')}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContentContainer}>
          <TouchableOpacity
          // onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
          >
            <Image
              style={styles.addEvntIcon}
              source={require('../../assets/search.png')}
            />
          </TouchableOpacity>
          <Text style={styles.organizeTxt}>Search your favourites</Text>
        </View>
      </View>
      <View style={styles.selectorContainer}>
        <View style={styles.selectorContentContainer}>
          <Text style={styles.selectorContentTxt}>Parties</Text>
        </View>
        <View
          style={[
            styles.selectorContentContainer,
            {
              marginLeft: 5,
            },
          ]}>
          <Text
            style={[
              styles.selectorContentTxt,
              {
                color: '#616161',
              },
            ]}>
            Organizers
          </Text>
        </View>
      </View>
      <View style={{marginTop: 20, marginBottom: 270}}>
        <FlatList
          data={trendingEvents}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                  screen: ROUTES.EVENT_PROFILE,
                  params: {eventDetails: item, type: 'favorite'},
                })
              }>
              <OrganizeEventTicketCard item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  selectorContainer: {
    width: '50%',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 20,
  },
  selectorContentContainer: {
    backgroundColor: '#282828',
    width: 90,
    height: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectorContentTxt: {
    fontSize: 15,
    color: colors.primary,
    fontFamily: 'ppneuemontreal-thin',
  },
  titleContainer: {width: '100%'},
  organizeTxt: {
    fontSize: 20,
    color: '#B9B9B9',
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '400',
  },
  addEvntIcon: {width: 28, height: 28, marginRight: 10},
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 90,
    backgroundColor: '#282828',
    height: 70,
    borderRadius: 37,
    paddingHorizontal: 20,
  },
  searchContentContainer: {flexDirection: 'row', alignItems: 'center'},
  cancelTxt: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'ppneuemontreal-book',
    marginRight: 10,
    marginTop: 5,
  },
});
