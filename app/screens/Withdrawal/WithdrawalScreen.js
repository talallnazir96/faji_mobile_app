import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function WithdrawalScreen() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
            <View style={styles.textFiledContainer}>
              <TextInput
                ref={inputRef}
                style={[
                  styles.textinputStyle,
                  {borderBottomColor: amount ? 'transparent' : 'white'},
                ]}
                value={amount}
                keyboardType={'number-pad'}
                onChangeText={value => setAmount(value)}
              />
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 18,
                  paddingBottom: 20,
                  color: colors.white,
                }}>
                USD$
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            title={'Review'}
            onPress={async () => {
              await Keyboard.dismiss();
              navigation.navigate(ROUTES.WITHDRAWAL_REVIEW);
            }}
          />
        </View>
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
  textFiledContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 20,
    paddingHorizontal: 40,
  },
  mainContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  textinputStyle: {
    fontWeight: '500',
    fontSize: 50,
    color: '#FEB822',
    borderWidth: 1,
    minWidth: 100,
    borderColor: 'transparent',
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
