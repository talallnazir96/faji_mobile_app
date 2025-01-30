import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import InputField from '../../components//InputField/InputField';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function EmailScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>What is your name?</Text>
        <Text style={styles.descriptionText}>
          What do your friend call you?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField placeholder="First name" />
        {/* </View> */}
        {/* <View style={styles.inputContainer}> */}
        <InputField style={{marginTop: 15}} placeholder="Last name" />
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => navigation.navigate(ROUTES.PASSWORD)}
          title={'Continue'}
        />
      </View>
    </View>
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
    padding: 15,
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
    marginTop: 'auto',
    marginBottom: 50,
  },
});
