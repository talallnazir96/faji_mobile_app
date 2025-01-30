import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppButton from '../../components/Button/AppButton';
import ReviewCard from '../../components/Card/ReviewCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function WithdrawalReview() {
  const navigation = useNavigation();
  const refMessage = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <AppHeader
          title={'Withdrawals'}
          rightIconSource={require('../../assets/bell.png')}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter Withdrawal amount</Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.bankInfoContainer}>
              <View style={styles.bankLogoContainer}>
                <Image
                  style={styles.bankLogo}
                  source={require('../../assets/bank.png')}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.bankDetailsContainer}>
                <Text style={styles.bankName}>Republic Bank</Text>
                <Text style={styles.bankAccount}>John Doe ********454</Text>
              </View>
            </View>
            <ReviewCard />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.transactionContainer}>
            <View style={styles.transactionRow}>
              <Text style={styles.transactionLabel}>Transaction fee</Text>
              <Text style={styles.transactionValue}>USD$ 10.00</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.transactionRow}>
              <Text style={styles.transactionLabel}>Amount You Get</Text>
              <Text style={styles.transactionValue}>USD$ 220.00</Text>
            </View>
          </View>
          <AppButton
            title={'Withdaw'}
            onPress={() => refMessage.current.open()}
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
              Withdraw Successful
            </Text>
            <Text style={[styles.detailsText, {textAlign: 'center'}]}>
              You have successfully withdraw USD$ 230.00 to your Republic bank
              account. *** *** 454
            </Text>
            <View
              style={[
                styles.btnContainer,
                {width: '100%', marginBottom: 18, marginTop: 10},
              ]}>
              <AppButton
                onPress={() => {
                  refMessage.current.close();
                  navigation.navigate(ROUTES.BOTTOM_TAB_NAVIGATOR);
                }}
                title={'Done'}
              />
            </View>
          </View>
        </RBSheet>
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
    fontSize: 20,
    color: colors.white,
    fontFamily: 'PP Neue Montreal',
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: -1,
  },
  bodyContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  mainContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  bankInfoContainer: {
    width: '100%',
    height: 83,
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 35,
    flexDirection: 'row',
    overflow: 'hidden',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  bankLogoContainer: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828CF',
    borderRadius: 55,
  },
  bankLogo: {
    width: 26,
    height: 26,
  },
  bankDetailsContainer: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  bankName: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'ppneuemontreal-book',
    fontWeight: '500',
  },
  bankAccount: {
    fontSize: 15,
    color: colors.secondaryTextColor,
  },
  transactionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  transactionLabel: {
    fontSize: 16,
    color: colors.white,
  },
  transactionValue: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    borderStyle: 'dashed',
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 'auto',
    paddingHorizontal: 20,
    marginBottom: 50,
  },

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
  detailsText: {
    fontSize: 16,
    color: '#AAA9A9',
    fontFamily: 'ppneuemontreal-book',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
