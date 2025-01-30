import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import TicketCard from '../../components/Card/TicketCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function FestivalScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/ticket-thumnail.png')}
          style={styles.imageBackground}>
          <View style={styles.imageOverlay}>
            <Image
              style={{width: 140, height: 140}}
              source={require('../../assets/logo.png')}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 40,
          alignSelf: 'center',
        }}>
        <AppHeader
          title={'Ticket Information'}
          rightIconSource={require('../../assets/upload-icon.png')}
        />
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          {/* Event Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>GENfest Music Festival</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>
              Nesciunt alias a. Nihil sint et nihil atque. Omnis quis rerum.
              Quibusdam ex excepturi est ex aliquam quasi. Assumenda amet ut
              cumque et cumque.
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TicketCard title={'Tickets left'} value={'104'} />
            <TicketCard title={'Tickets Price'} value={'$40'} />
            <TicketCard
              title={'Rating'}
              value={'4.9'}
              image={require('../../assets/star.png')}
            />
          </View>
          <View style={styles.btnContainer}>
            <AppButton
              onPress={() => navigation.navigate(ROUTES.MAP)}
              title={'Continue'}
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
  imageOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
