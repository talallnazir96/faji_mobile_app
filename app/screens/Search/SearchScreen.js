import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArtistCard from '../../components/Card/ArtistCard';
import FilterCard from '../../components/Card/FilterCard';
import PopularEventsCard from '../../components/Card/PopularEventsCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

const trendingEvents = [
  {
    image: require('../../assets/your-event1.png'),

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
    image: require('../../assets/your-event1.png'),
    title: '4-GENfest Music Festival 2024 - Multi - sensorial Audio Interface',
    date: 'Wed 22/03',
    time: '10:30 PM',
    price: '50.00',
  },
];
const filters = [
  {title: 'All', value: 0},
  {title: 'Concert', value: 1},
  {title: 'Sports', value: 2},
  {title: 'Music', value: 3},
  {title: 'Music1', value: 4},
  {title: 'Music2', value: 5},
  {title: 'Music3', value: 6},
];
const artists = [
  {
    image: require('../../assets/user-profile.png'),
    name: 'Neil Collins',
  },
  {
    image: require('../../assets/userProfile1.png'),
    name: 'Willis Casper',
  },
  {
    image: require('../../assets/userProfile2.png'),

    name: 'Dexter Crist',
  },
  {
    image: require('../../assets/user-profile.png'),
    name: 'Eunice Ebert',
  },
];
export default function SearchScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <AppHeader
          title={'Search'}
          rightIconSource={require('../../assets/filter-icon.png')}
          onPressRightIcon={
            () => navigation.navigate(ROUTES.FILTER_SCREEN)
            // console.log('hi foom search')
            //   navigation.navigate(ROUTES.SEARCH_NAVIGATOR, {
            //     screen: ROUTES.FILTER_SCREEN,
            //     // params: {eventDetails: item},
            //   });
          }
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
          <Text style={styles.organizeTxt}>Search on Faji</Text>
        </View>
        <TouchableOpacity
        //   onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
        >
          <Text style={styles.cancelTxt}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Recent Searches</Text>
          <Text style={styles.viewAllText}>Clear All</Text>
        </View>
        <View style={styles.filtersContainer}>
          <FlatList
            horizontal
            data={filters}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <FilterCard item={item} index={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Artists recommend</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>

        <View style={styles.filtersContainer}>
          <FlatList
            horizontal
            data={artists}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <ArtistCard item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Popular near you</Text>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        <View style={{flex: 1, marginBottom: 20}}>
          <FlatList
            data={trendingEvents}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                    screen: ROUTES.EVENT_PROFILE,
                    params: {eventDetails: item, type: 'popular'},
                  })
                }>
                <PopularEventsCard item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    // paddingHorizontal: 20,
  },
  titleContainer: {marginBottom: 50, width: '100%'},
  organizeTxt: {
    fontSize: 20,
    color: '#B9B9B9',
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '400',
    marginLeft: 10,
  },
  addEvntIcon: {width: 20, height: 20, marginRight: 10},
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 50,
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
  trendingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginVertical: 20,
  },
  trendingText: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'NeueHaasDisplay-Black',
  },
  viewAllText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    marginRight: 15,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});
