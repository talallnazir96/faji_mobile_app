import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/Button/AppButton';
import Button from '../../components/Button/Button';
import BalanceCard from '../../components/Card/BalanceCard';
import BankCard from '../../components/Card/BankCard';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

const paymentMethods = [
  {
    id: 1,
    image: require('../../assets/bank.png'),
    title: 'Republic Bank',
    subTitle: 'John Doe ********454',
  },
  {
    id: 2,
    image: require('../../assets/bank.png'),
    title: 'PayPal',
    subTitle: 'John Doe ********454',
  },
];
export default function BalanceDetail() {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <AppHeader
          title={'Balance Detail'}
          rightIconSource={require('../../assets/bell.png')}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <BalanceCard balance={'230.00'} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Withdraw to Bank.</Text>
            <Text style={styles.detailsText}>Select your Bank</Text>
          </View>
          <View style={styles.mainContainer}>
            {paymentMethods.map(card => (
              <BankCard
                key={card.id}
                card={card}
                selectedId={selectedId}
                onPress={() => setSelectedId(card.id)}
              />
            ))}
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Button title={'Add New Bank'} style={{width: 150}} />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            title={'Review'}
            onPress={() => {
              navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                screen: ROUTES.WITHDRAWAL,
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '700',
    lineHeight: 35,
    letterSpacing: -1,
  },
  bodyContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  detailsText: {
    fontSize: 16,
    color: '#AAA9A9',
    fontFamily: 'ppneuemontreal-book',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  btnContainer: {
    marginTop: 'auto',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});
