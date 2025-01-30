import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function OtpVerifyScreen({route}) {
  const navigation = useNavigation();
  //   const {email} = route.params;
  const initialValues = {
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  };
  const [OtpValues, SetOtpValues] = useState({...initialValues});
  const [focusedInput, setFocusedInput] = useState(null);
  const [Timer, SetTimer] = useState(300);
  //References
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  useEffect(() => {
    inputRef1.current.focus();
  }, []);
  //   useEffect(() => {
  //     setTimeout(CountDown, 1000);
  //   }, [Timer]);

  const handleFocus = inputRef => {
    setFocusedInput(inputRef);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Enter 6-digit code</Text>
        <Text style={styles.descriptionText}>
          We sent a verification code to your email chineme@gmail.com
        </Text>
      </View>
      <View style={styles.Cards}>
        <TextInput
          style={[
            styles.textinputStyle,
            focusedInput === inputRef1 ? {borderColor: colors.primary} : null,
          ]}
          onFocus={() => handleFocus(inputRef1)}
          onBlur={handleBlur}
          ref={inputRef1}
          maxLength={1}
          value={OtpValues.pin1}
          keyboardType={'number-pad'}
          onChangeText={pin1 => {
            SetOtpValues({...OtpValues, pin1});
            if (pin1 != '') {
              inputRef2.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.textinputStyle,
            focusedInput === inputRef2 ? {borderColor: colors.primary} : null,
          ]}
          onFocus={() => handleFocus(inputRef2)}
          onBlur={handleBlur}
          ref={inputRef2}
          maxLength={1}
          value={OtpValues.pin2}
          keyboardType={'number-pad'}
          onKeyPress={pin2 => {
            if (pin2 != '' && OtpValues.pin2 == '') {
              inputRef1.current.focus();
            }
          }}
          // onChangeText={pin2 => {
          //   SetOtpValues({...OtpValues, pin2});
          //   if (pin2 != '') {
          //     inputRef3.current.focus();
          //   }
          // }}
          onChangeText={pin2 => {
            SetOtpValues({...OtpValues, pin2});
            if (pin2 === '' && OtpValues.pin2 !== '') {
              inputRef1.current.focus();
            } else {
              inputRef3.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.textinputStyle,
            focusedInput === inputRef3 ? {borderColor: colors.primary} : null,
          ]}
          onFocus={() => handleFocus(inputRef3)}
          onBlur={handleBlur}
          ref={inputRef3}
          maxLength={1}
          value={OtpValues.pin3}
          keyboardType={'number-pad'}
          onKeyPress={pin3 => {
            if (pin3 != '' && OtpValues.pin3 == '') {
              inputRef2.current.focus();
            }
          }}
          // onChangeText={pin3 => {
          //   SetOtpValues({...OtpValues, pin3});
          //   if (pin3 != '') {
          //     inputRef4.current.focus();
          //   }
          // }}
          onChangeText={pin3 => {
            SetOtpValues({...OtpValues, pin3});
            if (pin3 === '' && OtpValues.pin3 !== '') {
              inputRef2.current.focus();
            } else {
              inputRef4.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.textinputStyle,
            focusedInput === inputRef4 ? {borderColor: colors.primary} : null,
          ]}
          onFocus={() => handleFocus(inputRef4)}
          onBlur={handleBlur}
          ref={inputRef4}
          maxLength={1}
          value={OtpValues.pin4}
          keyboardType={'number-pad'}
          onKeyPress={pin4 => {
            if (pin4 != '' && OtpValues.pin4 == '') {
              inputRef3.current.focus();
            }
          }}
          // onChangeText={pin4 => {
          //   SetOtpValues({...OtpValues, pin4});
          //   if (pin4 != '') {
          //     inputRef5.current.focus();
          //   }
          // }}
          onChangeText={pin4 => {
            SetOtpValues({...OtpValues, pin4});
            if (pin4 === '' && OtpValues.pin4 !== '') {
              inputRef3.current.focus();
            } else {
              inputRef5.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.textinputStyle,
            focusedInput === inputRef5 ? {borderColor: colors.primary} : null,
          ]}
          onFocus={() => handleFocus(inputRef5)}
          onBlur={handleBlur}
          ref={inputRef5}
          maxLength={1}
          value={OtpValues.pin5}
          keyboardType={'number-pad'}
          onKeyPress={pin5 => {
            if (pin5 != '' && OtpValues.pin5 == '') {
              inputRef4.current.focus();
            }
          }}
          // onChangeText={pin5 => {
          //   SetOtpValues({...OtpValues, pin5});
          //   if (pin5 != '') {
          //     inputRef6.current.focus();
          //   }
          // }}
          onChangeText={pin5 => {
            SetOtpValues({...OtpValues, pin5});
            if (pin5 === '' && OtpValues.pin5 !== '') {
              inputRef4.current.focus();
            } else {
              inputRef6.current.focus();
            }
          }}
        />
        <TextInput
          style={[
            styles.textinputStyle,
            focusedInput === inputRef6 ? {borderColor: colors.primary} : null,
          ]}
          onFocus={() => handleFocus(inputRef6)}
          onBlur={handleBlur}
          ref={inputRef6}
          maxLength={1}
          value={OtpValues.pin6}
          keyboardType={'number-pad'}
          // onChangeText={pin6 => {
          //   SetOtpValues({...OtpValues, pin6});
          // }}
          onChangeText={pin6 => {
            SetOtpValues({...OtpValues, pin6});
            if (pin6 === '' && OtpValues.pin6 !== '') {
              inputRef5.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Didn’t receive code?{'  '}
          <Text
            onPress={() => {
              console.log('Sign In Pressed');
            }}
            style={styles.signInLink}>
            Request again
          </Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          onPress={() => navigation.navigate(ROUTES.ADD_PHONE)}
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
  signInContainer: {
    marginTop: 30,
    width: 280,
    // alignSelf: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: colors.secondaryTextColor,

    textAlign: 'center',
    fontFamily: 'NeueHaasDisplayMediu',
  },
  signInLink: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'NeueHaasDisplayMediu',
  },
  btnContainer: {
    marginBottom: 50,
    marginTop: 'auto',
  },
  Cards: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
  },
  textinputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    borderBottomStartRadius: 4,
    borderBottomEndRadius: 4,
    borderBottomWidth: 2,
    borderColor: '#BBBFCC',
    alignSelf: 'center',
    height: 48,
    width: 35,
    color: 'white',
  },
});
