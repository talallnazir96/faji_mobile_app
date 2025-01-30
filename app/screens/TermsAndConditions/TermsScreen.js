import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';

export default function TermsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AppHeader />
        <View style={styles.bodyContainer}>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>Terms & Conditions</Text>
            <Text
              style={[styles.detailsText, {fontSize: 16, fontWeight: '100'}]}>
              Last updated Mar 10, 2024
            </Text>
            <Text style={styles.detailsText}>
              Repellat eos fuga eveniet. Inventore aperiam expedita vero a iusto
              eveniet qui. Et libero ipsa ut velit nobis. Est animi earum
              eveniet atque velit. Est voluptatum rerum maxime odit nesciunt
              ipsum inventore molestiae inventore. Blanditiis eos ut.
            </Text>
            <Text style={styles.subHeading}>1 - Conditions of use</Text>
            <Text style={styles.detailsText}>
              Repellat eos fuga eveniet. Inventore aperiam expedita vero a iusto
              eveniet qui. Et libero ipsa ut velit nobis. Est animi earum
              eveniet atque velit. Est voluptatum rerum maxime odit nesciunt
              ipsum inventore molestiae inventore. Blanditiis eos ut. eos fuga
              eveniet. Inventore aperiam expedita vero a usto eveniet qui. Et
              eveniet atque velit.
            </Text>
            <Text style={styles.subHeading}>2 - Privacy Policy</Text>
            <Text style={styles.detailsText}>
              Repellat eos fuga eveniet. Inventore aperiam expedita vero austo
              eveniet qui. Et libero ipsa ut velit nobis. Est animi earum
              eveniet atque velit. Est voluptatum rerum maxime odit nesciunt
              ipsum inventore molestiae inventore. Blanditiis eos ut. eos fuga
              eveniet. Inventore aperiam expedita vero a usto eveniet qui.
            </Text>
            <Text style={styles.subHeading}>3 - Intellectual Property</Text>
            <Text style={styles.detailsText}>
              Repellat eos fuga eveniet. Inventore aperiam expedita vero austo
              eveniet qui. Et libero ipsa ut velit nobis. Est animi earum
              eveniet atque velit. Est voluptatum rerum maxime odit nesciunt
              ipsum inventore molestiae inventore. Blanditiis eos ut. eos fuga
              eveniet. Inventore aperiam expedita vero a usto eveniet qui.
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <AppButton title={'Accept'} onPress={() => navigation.goBack()} />
          <Text style={styles.declineBtn}>Decline</Text>
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
    marginTop: 100,
    paddingHorizontal: 20,
  },
  mainContainer: {
    marginTop: 20,
    gap: 10,
  },
  heading: {
    fontSize: 25,
    color: colors.primaryTextColor,
    fontWeight: '500',
    fontFamily: 'Neue Haas Grotesk Display Pro',
  },
  subHeading: {
    fontSize: 16,
    color: colors.primaryTextColor,
    fontWeight: '400',
    fontFamily: 'PP Neue Montreal',
  },
  detailsText: {
    fontSize: 13,
    color: '#AAA9A9',
    paddingBottom: 20,
    fontFamily: 'ppneuemontreal-book',
  },
  btnContainer: {
    marginTop: 'auto',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  declineBtn: {
    fontSize: 18,
    color: '#A1A1A1',
    alignSelf: 'center',
    fontWeight: '600',
    paddingVertical: 10,
    fontFamily: 'Neue Haas Grotesk Display Pro',
  },
});
