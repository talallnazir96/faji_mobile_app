import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import InputField from '../../components//InputField/InputField';
import colors from '../../utils/colors';

export default function AccountSetting() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Account Setting</Text>
        <Text style={styles.descriptionText}>Edit your Account Details</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.inputContainer}>
        <Text style={styles.textInputTitle}>Name</Text>
        <InputField placeholder="Add your Name" />

        {/* <InputField placeholder="It shows on your event profile" /> */}
        <Text style={styles.textInputTitle}>Email</Text>
        <InputField placeholder="Add your Email" />
        <Text style={styles.textInputTitle}>Number</Text>
        <InputField placeholder="Add your Number" />

        <Text style={styles.textInputTitle}>Photo </Text>
        <View style={styles.searchContainer}>
          <Text style={styles.organizeTxt}>Add your Photo</Text>
          <TouchableOpacity
          // onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
          >
            <Image
              style={styles.addEvntIcon}
              source={require('../../assets/add-event.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <AppButton
          //   onPress={() => navigation.navigate(ROUTES.PASSWORD)}
          style={styles.button}
          titleStyle={{
            color: colors.white,
          }}
          title={'Delete Account '}
        />
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          //   onPress={() => navigation.navigate(ROUTES.PASSWORD)}
          title={'Update '}
          titleStyle={{
            color: colors.white,
          }}
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
  button: {
    height: 60,
    backgroundColor: '#CA4638',
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  inputContainer: {marginVertical: 20},
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
    marginBottom: 20,
  },
  textInputTitle: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'ppneuemontreal-medium',
    marginLeft: 20,
    marginVertical: 10,
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',

    backgroundColor: '#282828',
    height: 70,
    borderRadius: 37,
    paddingHorizontal: 25,
  },
  organizeTxt: {
    fontSize: 16,
    color: '#A1A1A1',
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '400',
  },
  addEvntIcon: {width: 28, height: 28, marginRight: 10, tintColor: '#FFFFFF'},
  descriptionView: {
    width: '100%',
    backgroundColor: '#282828CF',
    height: 180,
    borderRadius: 35,
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  descriptionTextInput: {
    // paddingHorizontal: 25,
    // paddingVertical: 10,
    color: '#A1A1A1',
    fontSize: 16,
    fontFamily: 'ppneuemontreal-thin',
    alignItems: 'flex-start',
    alignSelf: 'auto',
    // backgroundColor: 'red',
  },
  locationIcon: {
    width: 18,
    height: 20,
    marginRight: 15,
    tintColor: '#FFFFFF',
  },
  descriptionTextBottom: {
    color: '#A1A1A1',
    fontSize: 16,
    fontFamily: 'ppneuemontreal-thin',
    marginTop: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
  },
});
