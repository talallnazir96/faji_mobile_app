import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';

export default function SupportScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AppHeader
          title={'Support'}
          rightIconSource={require('../../assets/bell.png')}
        />
        <View style={styles.bodyContainer}>
          <Image
            source={require('../../assets/support.png')}
            style={styles.supportIcon}
          />
          <Text style={styles.details}>Hello, how can we help you?</Text>
          <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.labelText}>Contact live chat</Text>
            <View>
              <Image
                source={require('../../assets/next-icon.png')}
                style={styles.nextIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.labelText}>Send us an email</Text>
            <View>
              <Image
                source={require('../../assets/next-icon.png')}
                style={styles.nextIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.labelText}>FAQs</Text>
            <View>
              <Image
                source={require('../../assets/next-icon.png')}
                style={styles.nextIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  bodyContainer: {
    marginTop: 80,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    width: '90%',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 50,
    fontFamily: 'PP Neue Montreal',
    color: colors.white,
  },
  supportIcon: {
    width: 278,
    height: 200,
  },
  cardContainer: {
    height: 70,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#282828',
    marginTop: 10,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  labelText: {
    color: colors.primaryTextColor,
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'PP Neue Montreal',
  },
  nextIcon: {
    width: 17,
    height: 17,
    marginRight: 15,
  },
});
