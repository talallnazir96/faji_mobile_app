import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import colors from '../../utils/colors';
import {StackActions, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../utils/constants';

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.navigate(ROUTES.EMAIL);
  };
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.93;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          {width: imageWidth, height: imageWidth},
        ]}>
        <Image
          source={require('../../assets/getstartbg.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Voyage through</Text>
        <Text style={[styles.title, styles.virtual]}>
          virtual <Text style={styles.primaryText}>tickets</Text>
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Register for events subscribe to calendars and manage events you’re
          going to
        </Text>
      </View>
      <TouchableOpacity onPress={handleGetStarted} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.LOGIN);
            }}> */}
          <Text
            onPress={() => {
              navigation.navigate(ROUTES.LOGIN);
            }}
            style={styles.signInLink}>
            Sign in
          </Text>
          {/* </TouchableOpacity> */}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  imageContainer: {
    width: 375,
    height: 375,
    alignSelf: 'center',
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    color: colors.white,
    fontFamily: 'NeueHaasDisplay-Bold',
  },
  virtual: {
    fontSize: 33,
  },
  primaryText: {
    color: colors.primary,
  },
  descriptionContainer: {
    marginTop: 10,
    width: 280,
    alignSelf: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.secondaryTextColor,
    textAlign: 'center',
    fontFamily: 'ppneuemontreal-thin',
  },
  button: {
    width: 190,
    height: 60,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.backgroundColor,
    fontSize: 18,
    fontWeight: '600',
  },
  signInContainer: {
    marginTop: 15,
    width: 280,
    alignSelf: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: colors.secondaryTextColor,

    textAlign: 'center',
    fontFamily: 'ppneuemontreal-thin',
  },
  signInLink: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: 'ppneuemontreal-medium',
  },
});

export default GetStartedScreen;
