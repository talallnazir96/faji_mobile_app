import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EventDetailsCard from '../../components/Card/EventDetailCard';
import TicketInfoCard from '../../components/Card/TicketInfoCard';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';
const ticketInfo = [
  {
    title: 'GENfest Ticket',
    price: '40,00',
    seats: '100',
  },
  {
    title: '2-GENfest Ticket',
    price: '50,00',
    seats: '200',
  },
  {
    title: '3-GENfest Ticket',
    price: '60,00',
    seats: '300',
  },
];
export default function EventProfileScreen({route}) {
  const {eventDetails, type} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={eventDetails.image}
          style={[
            styles.image,
            {
              backgroundColor: type === 'trendingOrganizer' && colors.primary,
            },
          ]}
        />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/back-btn-icon.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/upload-icon.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.actionButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/heart-icon.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <ScrollView>
        {/* Event Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{eventDetails.title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            {eventDetails.date} &#8226; {eventDetails.time}
            <Text style={[styles.detailsText, {color: colors.primary}]}>
              {' '}
              &#8226; From ${eventDetails.price}
            </Text>
          </Text>
        </View>

        {/* Event Company */}
        <View style={styles.companyContainer}>
          <View style={styles.companyInfo}>
            <Image
              style={styles.companyImage}
              source={require('../../assets/eventDP1.png')}
            />
            <View style={styles.companyText}>
              <Text style={styles.companyName}>Rolling 5T0NES</Text>
              <Text style={styles.companyFollowers}>10M Followers</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.CHAT_NAVIGATOR)}
              style={[styles.button, {marginTop: 5}]}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.aboutTitle}>About the event</Text>
          <Text style={styles.aboutText}>
            Nesciunt alias a. Nihil sint et nihil atque. Omnis quis rerum.
            Quibusdam ex excepturi est ex aliquam quasi. Assumenda amet ut
            cumque et cumque.
          </Text>
        </View>

        {/* Event Details Card */}
        <EventDetailsCard />

        {/* Ticket Info */}
        <View style={[styles.titleContainer, {marginTop: 10}]}>
          <Text style={styles.aboutTitle}>Ticket Information</Text>
        </View>
        <View style={{marginHorizontal: 25, marginVertical: 10}}>
          <FlatList
            horizontal
            data={ticketInfo}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.FESTIVAL)}>
                <TicketInfoCard item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Participants */}
        <View style={[styles.titleContainer, {marginTop: 10}]}>
          <Text style={styles.aboutTitle}>Participants</Text>
        </View>
        <View style={styles.participantCard}>
          <View style={styles.partImgContainer}>
            <Image
              source={require('../../assets/participants.png')}
              style={{width: 90, height: 40}}
            />
            <Text style={styles.joinTxt}>+200 Joined</Text>
          </View>
          <Text
            style={[
              styles.joinTxt,
              {
                color: colors.primary,
                marginRight: 10,
              },
            ]}>
            View
          </Text>
        </View>

        {/* Reviews */}
        <View style={styles.reviewTitleContainer}>
          <Text style={styles.aboutTitle}>Reviews</Text>
          <Text
            style={[
              styles.aboutTitle,
              {fontSize: 14, color: colors.secondaryTextColor},
            ]}>
            200+ reviews
          </Text>
        </View>
        <View style={styles.reviewContainer}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <Image
              style={{width: 35, height: 35}}
              source={require('../../assets/userProfile1.png')}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.walterText}>Walter Kris</Text>
              <View
                style={[
                  styles.partImgContainer,
                  {
                    marginTop: 5,
                  },
                ]}>
                <Image
                  style={{width: 80, height: 13}}
                  source={require('../../assets/reviewStars.png')}
                />
                <Text
                  style={[
                    styles.walterText,
                    {
                      marginTop: 5,
                      marginLeft: 5,
                    },
                  ]}>
                  5.0
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.walterText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Rthr trsfk asdring ispum.
          </Text>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  imageContainer: {
    height: 350,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '90%',
    position: 'absolute',
    top: Platform.OS == 'ios' ? 40 : 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButtonContainer: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
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
    textAlign: 'justify',
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
  },
  companyContainer: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyImage: {
    width: 75,
    height: 75,
  },
  companyText: {
    marginLeft: 10,
  },
  companyName: {
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 18,
  },
  companyFollowers: {
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 14,
    marginTop: 5,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    width: 85,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#AAA9A9',
  },
  aboutTitle: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    // fontWeight: '700',
  },
  aboutText: {
    fontSize: 15,
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-book',
    textAlign: 'justify',
    lineHeight: 21,
    marginTop: 5,
    // fontWeight: '700',
  },
  participantCard: {
    backgroundColor: '#282828',
    width: '85%',
    height: 80,
    alignSelf: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  partImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinTxt: {
    fontSize: 14,
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-book',
    marginLeft: 10,
  },
  reviewTitleContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewContainer: {
    backgroundColor: '#282828',
    width: '85%',
    height: 130,
    alignSelf: 'center',
    borderRadius: 37,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginBottom: 40,
  },
  walterText: {
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-book',
    fontSize: 14,
  },
});
