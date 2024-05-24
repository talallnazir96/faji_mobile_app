import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import InputField from '../../components//InputField/InputField';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function EmailScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>What is your email?</Text>
        <Text style={styles.descriptionText}>
          Enter your email address. We will send you a confirmation code there.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField placeholder="Email Address" />
      </View>
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>
          By tapping continue, you’re agreeing to our{' '}
          <Text style={{color: colors.primary}}> Terms & Condition </Text> and
          <Text style={{color: colors.primary}}> Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => navigation.navigate(ROUTES.OTP_VERIFY)}
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
    paddingHorizontal: 20,
  },
  headTextContainer: {marginLeft: 5, marginTop: 20},
  headText: {
    fontSize: 26,
    color: colors.white,
    fontFamily: 'NeueHaasDisplay-Bold',
  },
  descriptionText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    marginTop: 10,
  },
  inputContainer: {marginTop: 40},
  textInput: {
    backgroundColor: '#282828CF',
    borderRadius: 35,
    height: 70,
    padding: 25,
    color: '#A1A1A1',
  },
  footerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    marginTop: 10,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
});
