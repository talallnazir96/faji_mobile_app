import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../utils/constants';
import {Image} from 'react-native';

const {width, height} = Dimensions.get('window');

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      navigation.replace(ROUTES.AUTH);
    }, 2500);
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/splash-background.png')}>
      <View style={styles.centeredView}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../assets/splashLogo.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    width: 100,
    height: 150,
  },
  logo: {width: '100%', height: '100%'},
});

export default SplashScreen;
