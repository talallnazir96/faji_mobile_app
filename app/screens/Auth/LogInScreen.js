import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import InputField from '../../components//InputField/InputField';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function LogInScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />

      <Text style={styles.headText}>Login</Text>

      <View style={styles.inputContainer}>
        <InputField placeholder="Email" />
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
          onPress={() => {
            console.log('hi');
            navigation.replace(
              ROUTES.BOTTOM_TAB_NAVIGATOR,
              //   {
              //   screen: 'Home',
              // }
            );
          }}
          title={'Login'}
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
  headText: {
    fontSize: 26,
    marginTop: 20,
    marginBottom: 25,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'NeueHaasDisplay-Bold',
  },
  inputContainer: {marginTop: 15},
  eyeIcon: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
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
