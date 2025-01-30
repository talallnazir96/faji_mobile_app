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
import ChatCard from '../../components/Card/ChatCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

const chats = [
  {
    image: require('../../assets/user-profile.png'),
    name: 'GENfest',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '5',
  },
  {
    image: require('../../assets/userProfile1.png'),
    name: 'Generator Man',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '5',
  },
  {
    image: require('../../assets/userProfile2.png'),
    name: 'Matthew Boyle',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '3',
  },
  {
    image: require('../../assets/userProfile1.png'),

    name: 'Neil Collins',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '2',
  },
  {
    image: require('../../assets/user-profile.png'),
    name: 'Neil Collins',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '1',
  },
  {
    image: require('../../assets/userProfile1.png'),

    name: 'Neil Collins',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '8',
  },
  {
    image: require('../../assets/user-profile.png'),
    name: 'Neil Collins',
    description: 'asperiores laboriosam volup...',
    time: '17:36',
    messageCount: '2',
  },
];
export default function ChatHomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <AppHeader
          title={'Chat'}
          rightIconSource={require('../../assets/chat-filter.png')}
          onPressRightIcon={() =>
            // navigation.navigate(ROUTES.FILTER_SCREEN)
            // console.log('hi foom search')
            navigation.navigate(ROUTES.SEARCH_NAVIGATOR, {
              screen: ROUTES.FILTER_SCREEN,
              // params: {eventDetails: item},
            })
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
          <Text style={styles.organizeTxt}>Search Chat</Text>
        </View>
        <TouchableOpacity
        //   onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
        >
          <Text style={styles.cancelTxt}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectorContainer}>
        <View style={styles.selectorContentContainer}>
          <Text style={styles.selectorContentTxt}>Parties Chat</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.USER_CHAT_SCREEN)}
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
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 20}}>
        <FlatList
          data={chats}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.CHAT_SCREEN)}>
              <ChatCard item={item} />
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
});
