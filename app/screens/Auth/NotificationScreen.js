import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Header from '../../components/Header/Header';
import colors from '../../utils/colors';

import {ROUTES} from '../../utils/constants';

export default function NotificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.headTextContainer}>
        <Text style={styles.headText}>Don’t miss a beat</Text>
        <Text style={styles.descriptionText}>
          Get notified about upcoming events, trending events, so you’re always
          in the know
        </Text>
      </View>

      {/* Main content with overlapping images */}
      <View style={styles.mainContent}>
        <ImageBackground
          source={require('../../assets/iphone-frame.png')}
          style={styles.imageBackground}
          resizeMode="contain">
          <View style={styles.imageOverlay}>
            <Image
              source={require('../../assets/frame-overlap.png')}
              style={styles.smallImage}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </View>
      {/* <View style={styles.btnContainer}>
        <AppButton
          // onPress={() => navigation.navigate(ROUTES.OTP_VERIFY)}
          title={'Enabled Push notifications'}
        />
        <Text
          onPress={() => navigation.navigate(ROUTES.HOME_NAVIGATOR)}
          style={styles.notNowText}>
          Not Now
        </Text>
      </View> */}

      <ImageBackground
        source={require('../../assets/gradient.png')}
        style={styles.bottomGradientImg}
        resizeMode="cover">
        <View style={styles.btnContainer}>
          <AppButton
            onPress={() =>
              navigation.navigate(ROUTES.BOTTOM_TAB_NAVIGATOR, {
                screen: 'Home',
              })
            }
            title={'Enabled Push notifications'}
          />
        </View>
        <Text
          style={styles.notNowText}
          onPress={() => {
            console.log('hi');
            navigation.navigate(ROUTES.BOTTOM_TAB_NAVIGATOR, {
              screen: 'Home',
            });
          }}>
          Not Now
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
    position: 'relative',
  },
  headTextContainer: {
    marginLeft: 5,
    marginTop: 20,
  },
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
  mainContent: {
    flex: 1,
    marginTop: 20,
  },
  imageBackground: {
    flex: 1,
  },
  imageOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImage: {
    width: '100%',
    height: 100,
  },
  bottomGradientImg: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    right: '5%',
    width: '100%',
    height: 400,
  },
  btnContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  notNowText: {
    fontSize: 18,
    color: '#A1A1A1',
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: 'NeueHaasDisplay-Bold',
  },
});
