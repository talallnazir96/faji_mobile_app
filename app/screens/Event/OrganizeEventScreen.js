import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import InputField from '../../components//InputField/InputField';
import colors from '../../utils/colors';

export default function OrganizeEventScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Organize an event</Text>
        <Text style={styles.descriptionText}>
          Fill out the fields below to host an event
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.inputContainer}>
        <Text style={styles.textInputTitle}>Add Title</Text>
        <InputField placeholder="Add title of your event" />
        <Text style={styles.textInputTitle}>Add Cover photos </Text>
        <View style={styles.searchContainer}>
          <Text style={styles.organizeTxt}>It shows on your event profile</Text>
          <TouchableOpacity
          // onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
          >
            <Image
              style={styles.addEvntIcon}
              source={require('../../assets/add-event.png')}
            />
          </TouchableOpacity>
        </View>
        {/* <InputField placeholder="It shows on your event profile" /> */}
        <Text style={styles.textInputTitle}>Description</Text>
        {/* <InputField placeholder="Add description about your event. " /> */}
        <View style={styles.descriptionView}>
          <TextInput
            style={styles.descriptionTextInput}
            placeholderTextColor="#A1A1A1"
            placeholder="Add description about your event."
          />
          <Text style={styles.descriptionTextBottom}>0-500 words</Text>
        </View>
        <Text style={styles.textInputTitle}>Add event date </Text>
        {/* <InputField placeholder="Choose date from the calendar " /> */}
        <View style={styles.searchContainer}>
          <Text style={styles.organizeTxt}>Choose date from the calendar </Text>
          <TouchableOpacity
          // onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
          >
            <Image
              style={styles.addEvntIcon}
              source={require('../../assets/calender.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.textInputTitle}>Add event time</Text>
        <InputField placeholder="Add time" />
        <Text style={styles.textInputTitle}>Add event seats</Text>
        <InputField placeholder="Add total available seats" />
        <Text style={styles.textInputTitle}>Add event location </Text>
        {/* <InputField placeholder="Get a location" /> */}
        <View style={styles.searchContainer}>
          <Text style={styles.organizeTxt}>Get a location</Text>
          <TouchableOpacity
          // onPress={() => navigation.navigate(ROUTES.TICKET_NAVIGATOR)}
          >
            <Image
              style={styles.locationIcon}
              source={require('../../assets/location.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.textInputTitle}>Add ticket price</Text>
        <InputField placeholder="Add ticket price" />
      </ScrollView>
      <View style={styles.btnContainer}>
        <AppButton
          //   onPress={() => navigation.navigate(ROUTES.PASSWORD)}
          title={'Organize an event '}
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
