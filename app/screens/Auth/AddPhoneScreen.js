import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function EmailScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Add your phone</Text>
        <Text style={styles.descriptionText}>
          Enter your phone number to get yourself verified and increase account
          security.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <PhoneInput
          containerStyle={{
            backgroundColor: '#282828',
            borderRadius: 35,
            width: '100%',
            alignItems: 'center',
          }}
          flagButtonStyle={{marginLeft: 10}}
          defaultCode="US"
          textContainerStyle={{
            backgroundColor: '#282828',
            borderRadius: 35,
            alignItems: 'center',
          }}
          codeTextStyle={{color: 'white'}}
          countryPickerButtonStyle={{backgroundColor: 'transparent'}}
          textInputStyle={{color: 'white'}}
          textInputProps={{
            placeholderTextColor: '#A1A1A1',
          }}
        />
      </View>

      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => navigation.navigate(ROUTES.NAME)}
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

  btnContainer: {
    marginTop: 'auto',
    marginBottom: 50,
  },
});
