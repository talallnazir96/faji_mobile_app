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
import React, {useState} from 'react';
import colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

export default function ChatScreen() {
  const navigation = useNavigation();
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        text: messageInput,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        sender: 'user', // or whatever you use to identify the sender
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };
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
        <View style={{marginTop: 20, marginLeft: 20}}>
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

        <View style={{marginVertical: 20, marginRight: 20}}>
          <Image
            source={require('../../assets/userProfile1.png')}
            style={{width: 48, height: 48, marginLeft: 'auto'}}
          />
          <View style={[styles.chatBoxContainer, {marginLeft: 'auto'}]}>
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
        {messages.map((msg, index) => (
          <View key={index} style={{marginVertical: 15}}>
            {/* Render message based on sender */}
            {msg.sender === 'user' ? (
              <Image
                source={require('../../assets/userProfile1.png')}
                style={{width: 48, height: 48, marginLeft: 'auto'}}
              />
            ) : (
              <Image
                source={require('../../assets/eventDP1.png')}
                style={{width: 48, height: 48}}
              />
            )}
            <View
              style={[
                styles.chatBoxContainer,
                msg.sender === 'user' ? {marginLeft: 'auto'} : null,
              ]}>
              <Text
                style={[
                  styles.chatBoxTitle,
                  msg.sender === 'user' ? {color: '#FEB822'} : null,
                ]}>
                {msg.sender === 'user' ? 'You' : 'Rolling 5T0NES'}
              </Text>
              <Text style={styles.chatBoxText}>{msg.text}</Text>
              <Text style={[styles.chatBoxText, {marginLeft: 'auto'}]}>
                {msg.timestamp}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <View>
          <Image
            style={styles.icon}
            source={require('../../assets/chat-emoji.png')}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 1, marginLeft: 5}}>
          <TextInput
            style={styles.chatBoxText}
            value={messageInput}
            onChangeText={text => setMessageInput(text)}
            onSubmitEditing={sendMessage}
            multiline
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={[styles.icon, {marginRight: 15}]}
            source={require('../../assets/chat-link.png')}
            resizeMode="contain"
          />
          <Image
            style={[styles.icon, {marginRight: 10}]}
            source={require('../../assets/chat-camera.png')}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.micContainer} onPress={sendMessage}>
            {/* <View style={styles.micContainer}> */}
            <Image
              style={styles.icon}
              // source={require('../../assets/chat-mic.png')}
              source={require('../../assets/next-icon.png')}
              resizeMode="contain"
            />
            {/* </View> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    // paddingHorizontal: 20,
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
