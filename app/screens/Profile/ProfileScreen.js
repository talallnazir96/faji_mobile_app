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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/Header/AppHeader';
import SettingTab from '../../components/Tab/SettingTab';
import colors from '../../utils/colors';
import {ROUTES} from '../../utils/constants';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <AppHeader
          title={' '}
          rightIconSource={require('../../assets/bell.png')}
          onPressRightIcon={() =>
            navigation.navigate(ROUTES.CHAT_NAVIGATOR, {
              screen: ROUTES.CHAT_HOME_SCREEN,
            })
          }
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/eventDP1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Rolling 5T0NES</Text>
        <Text style={styles.profileEmail}>rolling5tones@gmail.com</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
            screen: ROUTES.BALANCE_DETAIL,
          });
        }}
        style={styles.balanceContainer}>
        <View style={styles.balanceTextContainer}>
          <Text style={styles.balanceLabelText}>Current Balance</Text>
          <Text style={styles.balanceAmount}>$230.00</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/next-icon.png')}
            style={styles.nextIcon}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.tabContainer}>
          <Text style={styles.tabTitle}>Personal</Text>
          <SettingTab
            onPress={() => {
              navigation.navigate(ROUTES.SETTING_NAVIGATOR, {
                screen: ROUTES.ACCOUNT_SETTINGS,
              });
            }}
            title={'Account setting'}
            Icon={
              <Ionicons name={'person-outline'} size={18} style={styles.icon} />
            }
          />
          <SettingTab
            onPress={() => {
              navigation.navigate(ROUTES.SETTING_NAVIGATOR, {
                screen: ROUTES.HISTORY,
              });
            }}
            title={'Parties history'}
            Icon={
              <MaterialIcons
                name={'event-note'}
                size={18}
                style={styles.icon}
              />
            }
          />
          <View style={styles.hr} />
          <Text style={styles.tabTitle}>Preferences</Text>
          <SettingTab
            onPress={() => {
              navigation.navigate(ROUTES.EVENT_NAVIGATOR, {
                screen: ROUTES.BALANCE_DETAIL,
              });
            }}
            title={'Payment Methods'}
            Icon={
              <MaterialIcons name={'payment'} size={18} style={styles.icon} />
            }
          />
          <SettingTab
            onPress={() =>
              navigation.navigate(ROUTES.CHAT_NAVIGATOR, {
                screen: ROUTES.CHAT_HOME_SCREEN,
              })
            }
            title={'Notifications'}
            Icon={
              <Ionicons
                name={'notifications-outline'}
                size={18}
                style={styles.icon}
              />
            }
          />
          {/* <SettingTab
            onPress={() => console.log('Pressed!')}
            title={'Subscriptions'}
            Icon={
              <FeatherIcons
                name={'dollar-sign'}
                size={18}
                style={styles.icon}
              />
            }
          /> */}
          <View style={styles.hr} />
          <Text style={styles.tabTitle}>Resources</Text>
          <SettingTab
            onPress={() =>
              navigation.navigate(ROUTES.SETTING_NAVIGATOR, {
                screen: ROUTES.SUPPORT,
              })
            }
            title={'Contact Support'}
            Icon={
              <FeatherIcons name={'headphones'} size={18} style={styles.icon} />
            }
          />
          <SettingTab
            onPress={() =>
              navigation.navigate(ROUTES.SETTING_NAVIGATOR, {
                screen: ROUTES.TERMS,
              })
            }
            title={'Terms & Conditions'}
            Icon={<AntDesign name={'profile'} size={18} style={styles.icon} />}
          />
          <SettingTab
            onPress={() => console.log('Pressed!')}
            title={'Rate in App Store'}
            Icon={<AntDesign name={'staro'} size={18} style={styles.icon} />}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.GET_STARTED)}
            style={styles.logoutBtn}>
            <AntDesign name={'poweroff'} size={18} color="#CA4638" />
            <Text
              style={{
                color: '#CA4638',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Logout
            </Text>
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
  profileContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  profileImage: {
    width: 110,
    height: 110,
  },
  profileName: {
    color: '#F8F8F8',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'ppneuemontreal-thin',
  },
  tabTitle: {
    color: '#F8F8F8',
    fontSize: 15,
    marginTop: 10,
    paddingBottom: 6,
    fontFamily: 'ppneuemontreal-thin',
  },
  profileEmail: {
    color: '#AAA9A9',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'ppneuemontreal-thin',
  },
  balanceContainer: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#282828',
    marginTop: 20,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  balanceTextContainer: {
    marginLeft: 10,
  },
  balanceLabelText: {
    color: '#AAA9A9',
    fontSize: 15,
    fontFamily: 'ppneuemontreal-thin',
  },
  balanceAmount: {
    color: '#FEB822',
    fontSize: 20,
    fontFamily: 'ppneuemontreal-thin',
  },
  nextIcon: {
    width: 17,
    height: 17,
    marginRight: 15,
  },
  titleContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },
  tabContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 200,
    paddingHorizontal: 5,
  },
  logoutBtn: {
    marginTop: 30,
    width: 130,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#282828',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  icon: {alignSelf: 'center', color: colors.white},
  hr: {
    margin: 10,
    borderWidth: 0.8,
    borderColor: '#282828',
    width: '73%',
    alignSelf: 'center',
  },
});
