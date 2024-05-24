import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import InputField from '../../components//InputField/InputField';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function PasswordScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Create password</Text>
        <Text style={styles.descriptionText}>
          Create a password with at least 6 letters or numbers. It should be
          something others can’t guess.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField placeholder="Password" secureTextEntry={!showPassword} />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={togglePasswordVisibility}>
          <Icon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={23}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
        <AppButton
          onPress={async () => {
            await Keyboard.dismiss();
            navigation.navigate(ROUTES.NOTIFICATION);
          }}
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
  inputContainer: {marginTop: 40, position: 'relative'},
  textInput: {
    backgroundColor: '#282828CF',
    borderRadius: 35,
    height: 70,
    padding: 15,
    color: '#A1A1A1',
  },
  eyeIcon: {
    position: 'absolute',
    top: 25,
    right: 25,
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
