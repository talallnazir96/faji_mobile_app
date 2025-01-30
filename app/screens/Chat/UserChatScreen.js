import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

export default function UserChatScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/back-btn-icon.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.actionButtonsContainer}>
          {/* <View style={styles.actionButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/chat-video.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.actionButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/chat-phone.png')}
              resizeMode="contain"
            />
          </View> */}
          <View style={styles.actionButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/chat-filter.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={styles.chatOwnerContainer}>
        <View>
          <Image
            source={require('../../assets/eventDP1.png')}
            style={styles.chatOwnerDP}
          />
        </View>
        <View style={{marginLeft: 7}}>
          <Text style={styles.chatOwnerName}>Rolling Stones</Text>
          <Text style={styles.chatOwnerRole}>Organizers</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{marginTop: 20, width: '90%', alignSelf: 'center'}}>
          <Image
            source={require('../../assets/eventDP1.png')}
            style={{width: 48, height: 48}}
          />
          <View style={styles.chatBoxContainer}>
            <Text style={styles.chatBoxTitle}>Rolling 5T0NES</Text>
            <Text style={styles.chatBoxText}>
              Libero voluptas et est est. Sit sint in dolorem expedita. Et
              dignissimos sed cupiditate.
            </Text>
            <Text
              style={[
                styles.chatBoxText,
                {
                  marginLeft: 'auto',
                },
              ]}>
              4:32 PM
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20, width: '90%', alignSelf: 'center'}}>
          <Image
            source={require('../../assets/eventDP1.png')}
            style={{width: 48, height: 48}}
          />
          <View style={styles.chatBoxContainer}>
            <Text style={styles.chatBoxTitle}>Rolling 5T0NES</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {/* 2 imgs */}
              <Image
                source={require('../../assets/chat-demo-image.png')}
                style={{width: 120, height: 120, marginRight: 5}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/chat-demo-image.png')}
                style={{width: 120, height: 120}}
                resizeMode="contain"
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* 2 imgs */}
              <Image
                source={require('../../assets/chat-demo-image.png')}
                style={{width: 120, height: 120, marginRight: 5}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/chat-demo-image.png')}
                style={{width: 120, height: 120}}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../assets/userProfile1.png')}
            style={{width: 48, height: 48}}
          />
          <View style={[styles.chatBoxContainer]}>
            <Text style={[styles.chatBoxTitle, {color: '#FEB822'}]}>
              Lola Schmidt
            </Text>
            <Text style={styles.chatBoxText}>Libero voluptas et est est :</Text>
            <Text
              style={[
                styles.chatBoxText,
                {
                  marginLeft: 'auto',
                },
              ]}>
              4:32 PM
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text
          style={{
            fontSize: 15,
            color: colors.secondaryTextColor,
            fontFamily: 'ppneuemontreal-thin',
          }}>
          Only <Text style={{color: colors.primary}}>admins</Text> can send
          messages
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
  },
  imageContainer: {
    height: 350,
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '90%',

    // marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButtonContainer: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  titleContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
    // paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    fontFamily: 'ppneuemontreal-thin',
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'justify',
    letterSpacing: -1,
  },
  chatOwnerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  chatOwnerDP: {width: 54, height: 54},
  chatOwnerName: {
    fontSize: 15,
    color: '#F8F8F8',
    fontFamily: 'ppneuemontreal-medium',
  },
  chatOwnerRole: {
    fontSize: 13,
    color: '#616161',
    fontFamily: 'ppneuemontreal-medium',
  },
  footerContainer: {
    width: '90%',
    height: 70,
    backgroundColor: '#282828',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 15,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  micContainer: {
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 24,
    marginLeft: 10,
  },
  chatBoxContainer: {
    width: '80%',
    height: 'auto',
    padding: 15,
    backgroundColor: '#282828',
    borderRadius: 20,
    marginTop: 10,
    overflow: 'hidden',
  },
  chatBoxTitle: {
    fontSize: 15,
    color: colors.primary,
    fontFamily: 'ppneuemontreal-medium',
  },
  chatBoxText: {
    fontSize: 14,
    color: colors.secondaryTextColor,
    fontFamily: 'ppneuemontreal-thin',
    marginTop: 5,
  },
});
