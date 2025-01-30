import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Header from '../../components/Header/Header';
import colors from '../../utils/colors';

export default function PartiesMapView({route}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Header onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={require('../../assets/party-map-view.jpeg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  titleContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
    width: '90%',
    alignSelf: 'center',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: '100%', height: '100%'},
});
