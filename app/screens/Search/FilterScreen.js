import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/Button/AppButton';
import FilterCard from '../../components/Card/FilterCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';

const filters = [
  {title: '$10', value: 0},
  {title: '$20', value: 1},
  {title: '$30', value: 2},
  {title: '$40', value: 3},
  {title: '$50', value: 4},
  {title: '$60', value: 5},
  {title: '$70', value: 6},
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
export default function FilterScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <AppHeader
          title={'Sort and Filters'}
          rightIconSource={require('../../assets/filter-icon.png')}
          // onPressRightIcon={
          //   () => navigation.navigate(ROUTES.FILTER_SCREEN)
          //   // console.log('hi foom search')
          //   //   navigation.navigate(ROUTES.SEARCH_NAVIGATOR, {
          //   //     screen: ROUTES.FILTER_SCREEN,
          //   //     // params: {eventDetails: item},
          //   //   });
          // }
        />
      </View>

      <ScrollView>
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingText}>Sort by</Text>
          {/* <Text style={styles.viewAllText}>Clear All</Text> */}
        </View>
        <View style={styles.sortByContainer}>
          <Text style={styles.popularTxt}>Most Popular</Text>
          <MaterialIcon
            name={'checkbox-blank-circle'}
            color={colors.primary}
            size={19}
          />
        </View>
        <View style={styles.sortByContainer}>
          <Text style={styles.popularTxt}>Price - Low to High</Text>
          <MaterialIcon
            name={'checkbox-blank-circle-outline'}
            color={'#FFFFFF33'}
            size={19}
          />
        </View>
        <View style={styles.sortByContainer}>
          <Text style={styles.popularTxt}>Price - High to low</Text>
          <MaterialIcon
            name={'checkbox-blank-circle-outline'}
            color={'#FFFFFF33'}
            size={19}
          />
        </View>
        <View style={[styles.trendingContainer, {marginTop: 20}]}>
          <Text style={styles.trendingText}>Price</Text>
          {/* <Text style={styles.viewAllText}>Clear All</Text> */}
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
        <View style={[styles.trendingContainer, {marginTop: 20}]}>
          <Text style={styles.trendingText}>Distance away</Text>
          <Text style={styles.viewAllText}>10Km</Text>
        </View>
        <Text style={[styles.popularTxt, {marginLeft: 20}]}>
          See events based on your current location
        </Text>
        <View style={[styles.trendingContainer, {marginTop: 20}]}>
          <Text style={styles.trendingText}>Event Date</Text>
          {/* <Text style={styles.viewAllText}>Clear All</Text> */}
        </View>
        <View style={styles.sortByContainer}>
          <Text style={styles.popularTxt}>Any Time</Text>
          <MaterialIcon
            name={'checkbox-blank-circle'}
            color={colors.primary}
            size={19}
          />
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <AppButton
          //   onPress={() => navigation.navigate(ROUTES.PASSWORD)}
          title={'Continue'}
        />
      </View>
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

  trendingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: 50,
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
  sortByContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#282828',
    height: 70,
    borderRadius: 37,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  popularTxt: {
    fontSize: 18,
    color: '#B9B9B9',
    fontFamily: 'ppneuemontreal-thin',
    marginRight: 15,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: 'auto',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
});
