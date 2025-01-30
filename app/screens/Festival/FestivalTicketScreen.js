import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

const ticket = 40;
export default function FestivalTicketScreen() {
  const navigation = useNavigation();
  const [ticketCount, setTicketCount] = useState(3); // Initial count

  const incrementCount = () => {
    setTicketCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    if (ticketCount > 0) {
      setTicketCount(prevCount => prevCount - 1);
    }
  };

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
          {/* Event Tickets */}
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>
                {String(ticketCount)?.padStart(2, '0')} Tickets
              </Text>
              <Text style={styles.detailsText}>
                Nesciunt alias a nihil sint.
              </Text>
            </View>
            <View style={styles.countContainer}>
              <TouchableOpacity
                onPress={decrementCount}
                style={styles.countButton}>
                <Text style={styles.countButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.title}>
                {String(ticketCount)?.padStart(2, '0')}
              </Text>
              <TouchableOpacity
                onPress={incrementCount}
                style={styles.countButton}>
                <Text style={styles.countButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.searchInput}
                placeholderTextColor={colors.secondaryTextColor}
                placeholder="Promo Code"
              />
            </View>
            <View style={{width: '30%'}}>
              <AppButton
                // onPress={() => navigation.navigate(ROUTES.MAP)}
                title={'Apply'}
              />
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.title}>Total Price</Text>
            <Text style={styles.title}>
              $ {(ticket * ticketCount).toFixed(2)}
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <AppButton
              onPress={() => navigation.navigate(ROUTES.PAYMENT)}
              title={'Proceed to payment'}
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
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    width: '85%',
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '700',
    lineHeight: 35,
    letterSpacing: -1,
  },
  detailsText: {
    fontSize: 16,
    color: '#AAA9A9',
    fontFamily: 'ppneuemontreal-book',
  },
  btnContainer: {
    marginTop: 'auto',
    marginBottom: 50,
  },
  searchContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#282828CF',
    height: 70,
    borderRadius: 35,
    paddingLeft: 20,
    paddingRight: 5,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  searchInput: {
    marginLeft: 5,
    width: '100%',
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-thin',
    fontSize: 18,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  countButtonText: {
    fontSize: 20,
    color: 'black',
  },
});
