import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FilterCard from '../../components/Card/FilterCard';
import TrendingEventCard from '../../components/Card/TrendingEventCard';
import TrendingOrganizerCard from '../../components/Card/TrendingOrganizerCard';
import UpcomingEventCard from '../../components/Card/UpcomingEventCard';
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
const upcomingEvents = [
  {
    image: require('../../assets/up-event1.png'),
    title: 'Raul Steuber',
    month: 'MAR',
    date: '28',
    location: 'California, USA',
    profile: require('../../assets/user-profile.png'),
    price: '50.00',
  },
  {
    image: require('../../assets/up-event1.png'),
    title: '2-Raul Steuber',
    month: 'MAR',
    date: '29',
    location: 'California, USA',
    profile: require('../../assets/user-profile.png'),
    price: '50.00',
  },
  {
    image: require('../../assets/up-event1.png'),
    title: '3-Raul Steuber',
    month: 'MAR',
    date: '30',
    location: 'California, USA',
    profile: require('../../assets/user-profile.png'),
    price: '50.00',
  },
];
const trendingOrganizer = [
  {
    image: require('../../assets/organizer-pic.png'),
    title: 'Raul Steuber',
    date: 'Wed 22/03',
    time: '9:30 PM',
    price: '30.00',
  },
  {
    image: require('../../assets/organizer2.png'),
    title: '2-Raul Steuber',
  },
  {
    image: require('../../assets/organizer-pic.png'),
    title: '3-Raul Steuber',
    date: 'Wed 22/03',
    time: '9:30 PM',
    price: '30.00',
  },
];
const yourEvents = [
  {
    image: require('../../assets/your-event1.png'),
    title: 'GENfest Music Festival 2024 - Multi - sensorial Audio Interface',
    date: 'Wed 22/03',
    time: '8:30 PM',
    price: '40.00',
  },
  {
    image: require('../../assets/your-event1.png'),
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
  {title: 'House Parties', value: 1},
  {title: 'Club Parties', value: 2},
  {title: 'Beach Parties', value: 3},
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [showAllTrendingEvents, setShowAllTrendingEvents] = useState(false);
  const [showAllUpcomingEvents, setShowAllUpcomingEvents] = useState(false);
  const [showAllYourEvents, setShowAllYourEvents] = useState(false);
  const [showAllTrendingOrganizers, setShowAllTrendingOrganizers] =
    useState(false);

  const toggleAllTrendingEvents = () => {
    // setShowAllTrendingEvents(!showAllTrendingEvents);
    navigation.navigate(ROUTES.VIEW_ALL_EVENT_SCREEN, {
      events: trendingEvents,
      type: 'trendingEvents',
    });
  };
  const toggleAllUpcomingEvents = () => {
    // setShowAllUpcomingEvents(!showAllUpcomingEvents);
    navigation.navigate(ROUTES.VIEW_ALL_EVENT_SCREEN, {
      events: upcomingEvents,
      type: 'upcomingEvents',
    });
  };
  const toggleAllYourEvents = () => {
    // setShowAllYourEvents(!showAllYourEvents);
    navigation.navigate(ROUTES.VIEW_ALL_EVENT_SCREEN, {
      events: yourEvents,
      type: 'yourEvents',
    });
  };
  const toggleAllTrendingOrganizers = () => {
    // setShowAllTrendingOrganizers(!showAllTrendingOrganizers);
    navigation.navigate(ROUTES.VIEW_ALL_EVENT_SCREEN, {
      events: trendingOrganizer,
      type: 'trendingOrganizer',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Hi, Chineme!</Text>
        <View style={styles.mailIcon}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.CHAT_NAVIGATOR, {
                screen: ROUTES.CHAT_HOME_SCREEN,
              })
            }>
            <Image
              style={styles.mailImage}
              source={require('../../assets/mail.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.SEARCH_NAVIGATOR)}
          style={styles.searchInputContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/search.png')}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor={colors.secondaryTextColor}
            placeholder="Search on Faji"
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#282828',
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate(ROUTES.SEARCH_NAVIGATOR, {
              screen: ROUTES.FILTER_SCREEN,
            })
          }>
          <Image
            style={styles.filterIcon}
            source={require('../../assets/filter-icon.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Trending Parties</Text>
          <TouchableOpacity onPress={toggleAllTrendingEvents}>
            <Text style={styles.viewAllText}>
              {showAllTrendingEvents ? 'Hide All' : 'View All'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalListContainer}>
          <FlatList
            horizontal={showAllTrendingEvents ? false : true}
            data={trendingEvents}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  // navigation.navigate(ROUTES.EVENT_PROFILE, {
                  //   eventDetails: item,
                  // })
                  navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                    screen: ROUTES.EVENT_PROFILE,
                    params: {eventDetails: item, type: 'trendingEvents'},
                  })
                }>
                <TrendingEventCard item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.filtersContainer}>
          <FlatList
            horizontal
            data={filters}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() =>
                  // navigation.navigate(ROUTES.EVENT_PROFILE, {
                  //   eventDetails: item,
                  // })
                  navigation.navigate(ROUTES.PARTIES_MAP_VIEW)
                }
                // style={{backgroundColor: 'red'}}
              >
                <FilterCard item={item} index={index} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.upcomingContainer}>
          <Text style={styles.trendingText}>Upcoming Parties</Text>
          <TouchableOpacity onPress={toggleAllUpcomingEvents}>
            <Text style={styles.viewAllText}>
              {showAllUpcomingEvents ? 'Hide All' : 'View All'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalListContainer}>
          <FlatList
            horizontal={showAllUpcomingEvents ? false : true}
            data={upcomingEvents}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  // navigation.navigate(ROUTES.EVENT_PROFILE, {
                  //   eventDetails: item,
                  // })
                  navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                    screen: ROUTES.EVENT_PROFILE,
                    params: {eventDetails: item, type: 'upcomingEvents'},
                  })
                }>
                <UpcomingEventCard item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <View style={styles.upcomingContainer}>
          <Text style={styles.trendingText}>Flash Deals</Text>
          <Text style={[styles.viewAllText, {color: colors.primary}]}>
            03 : 09 : 24
          </Text>
        </View>
        <View style={styles.flashDealsContainer}>
          <View style={styles.flashDealTextContainer}>
            <View style={styles.flashDealTitleContainer}>
              <Image
                style={styles.greenTickIcon}
                source={require('../../assets/greentick.png')}
              />
              <Text style={styles.promoCodeText}>Promocode</Text>
            </View>
            <Text style={styles.tapForText}>Tap for $20</Text>
            <Text style={styles.flashDealDescription}>
              Ipsa ut dolore. Impedit hic quis. Vel aspernatur deleniti unde nam
              quisquam et rerum ass menda. Nam quo eos.
            </Text>
          </View>
          <Image
            source={require('../../assets/deal-box.png')}
            style={styles.dealBoxImage}
          />
        </View> */}
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Your Parties</Text>
          <TouchableOpacity onPress={toggleAllYourEvents}>
            <Text style={styles.viewAllText}>
              {showAllYourEvents ? 'Hide All' : 'View All'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalListContainer}>
          <FlatList
            horizontal={showAllYourEvents ? false : true}
            data={yourEvents}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  // navigation.navigate(ROUTES.EVENT_PROFILE, {
                  //   eventDetails: item,
                  // })
                  navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                    screen: ROUTES.EVENT_PROFILE,
                    params: {eventDetails: item, type: 'yourEvents'},
                  })
                }>
                <TrendingEventCard item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Trending Organizers</Text>
          <TouchableOpacity onPress={toggleAllTrendingOrganizers}>
            <Text style={styles.viewAllText}>
              {showAllTrendingOrganizers ? 'Hide All' : 'View All'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.horizontalListContainer, {marginBottom: 120}]}>
          <FlatList
            horizontal={showAllTrendingOrganizers ? false : true}
            data={trendingOrganizer}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  // navigation.navigate(ROUTES.EVENT_PROFILE, {
                  //   eventDetails: item,
                  // })
                  navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                    screen: ROUTES.EVENT_PROFILE,
                    params: {eventDetails: item, type: 'trendingOrganizer'},
                  })
                }>
                <TrendingOrganizerCard item={item} />
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
  titleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    // marginTop: 40,
  },
  titleText: {
    fontSize: 34,
    color: colors.white,
    fontFamily: 'NeueHaasDisplay-Bold',
  },
  trendingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
  },
  trendingText: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'NeueHaasDisplay-Light',
  },
  viewAllText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    marginRight: 15,
  },
  mailIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.mailIconBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  mailImage: {
    width: 16,
    height: 16,
    paddingHorizontal: 10,
  },
  searchContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    backgroundColor: colors.searchContainerBackground,
    height: 70,
    borderRadius: 35,
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  searchInput: {
    marginLeft: 5,
    width: '90%',
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 18,
  },
  filterIcon: {
    width: 16,
    height: 16,
    paddingHorizontal: 10,
  },
  horizontalListContainer: {
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
  },
  upcomingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
  },
  flashDealsContainer: {
    marginTop: 10,
    // marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  flashDealTextContainer: {
    width: '50%',
  },
  flashDealTitleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenTickIcon: {
    height: 15,
    width: 15,
  },
  promoCodeText: {
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 14,
    marginLeft: 5,
  },
  tapForText: {
    color: colors.primary,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 10,
  },
  flashDealDescription: {
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 14,
    textAlign: 'justify',
  },
  dealBoxImage: {
    width: 140,
    height: 140,
  },
});
