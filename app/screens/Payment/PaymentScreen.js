import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppButton from '../../components/Button/AppButton';
import PayCard from '../../components/Card/PayCard';
import PaymentCard from '../../components/Card/PaymentCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

const paymentMethods = [
  {
    id: 1,
    image: require('../../assets/master.png'),
    number: 'Mastercard ***** 3276',
  },
  {
    id: 2,
    image: require('../../assets/visa.png'),
    number: 'Visa ***** 3276',
  },
];
const payMethods = [
  {
    id: 3,
    image: require('../../assets/apple-pay.png'),
    name: 'Apple Pay',
  },
  {
    id: 4,
    image: require('../../assets/paypal.png'),
    name: 'PayPal',
  },
];
export default function PaymentScreen() {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const refMessage = useRef();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 40,
          alignSelf: 'center',
        }}>
        <AppHeader
          title={'Payment Method'}
          rightIconSource={require('../../assets/upload-icon.png')}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>Saved cards</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.detailsText, {color: colors.primary}]}>
              + New Card
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.mainContainer}>
            {paymentMethods.map(card => (
              <PaymentCard
                key={card.id}
                card={card}
                selectedId={selectedId}
                onPress={() => setSelectedId(card.id)}
              />
            ))}
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    textAlign: 'center',
                    fontWeight: '600',
                    fontFamily: 'PP Neue Montreal',
                  },
                ]}>
                Or
              </Text>
            </View>
            {payMethods.map(card => (
              <PayCard
                key={card.id}
                card={card}
                selectedId={selectedId}
                onPress={() => setSelectedId(card.id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => refMessage.current.open()}
          title={'Confirm Payment'}
        />
      </View>

      <RBSheet
        ref={refMessage}
        openDuration={150}
        closeDuration={100}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding a semi-transparent black background for blur effect
          },
          container: {
            borderTopLeftRadius: 20, // Optional: Adjust border radius of the sheet
            borderTopRightRadius: 20, // Optional: Adjust border radius of the sheet
            height: 350,
          },
        }}>
        <View style={styles.messageContainer}>
          <Image
            style={styles.successIcon}
            source={require('../../assets/success.png')}
            resizeMode="contain"
          />
          <Text style={[styles.title, {textAlign: 'center', padding: 10}]}>
            Payment Successful
          </Text>
          <Text style={[styles.detailsText, {textAlign: 'center'}]}>
            You have successfully purchased a ticket for the event.
          </Text>
          <View
            style={[styles.btnContainer, {width: '100%', marginBottom: 18}]}>
            <AppButton
              onPress={() => {
                refMessage.current.close();
                navigation.navigate(ROUTES.BOTTOM_TAB_NAVIGATOR);
              }}
              title={'View Tickets'}
            />
            <TouchableOpacity
              onPress={() => {
                refMessage.current.close();
                navigation.reset({
                  index: 0, // the index of the screen to navigate to
                  routes: [{name: ROUTES.BOTTOM_TAB_NAVIGATOR}], // the route(s) you want to navigate to
                });
              }}>
              <Text
                style={{
                  color: '#F8F8F8',
                  fontWeight: '600',
                  fontFamily: 'Neue Haas Grotesk Display Pro',
                  textAlign: 'center',
                  padding: 10,
                }}>
                Go to homepage
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
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
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  detailsText: {
    fontSize: 16,
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
  // Alert Message
  messageContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIcon: {
    width: 72,
    height: 72,
  },
});
