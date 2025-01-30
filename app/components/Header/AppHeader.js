import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../utils/colors';

export default function AppHeader({
  title,
  onPressBack,
  rightIconSource,
  onPressRightIcon,
}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer]}>
      <TouchableOpacity
        onPress={onPressBack ? onPressBack : () => navigation.goBack()}
        style={styles.backButtonContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/back-btn-icon.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text
        style={[
          {
            fontWeight: '600',
            fontSize: 25,
            color: colors.white,
            fontFamily: 'Neue Haas Grotesk Display Pro',
          },
        ]}>
        {title ?? ' '}
      </Text>

      <TouchableOpacity
        style={styles.actionButtonsContainer}
        onPress={
          onPressRightIcon ? onPressRightIcon : () => navigation.goBack()
        }>
        <View style={styles.actionButton}>
          {rightIconSource ? (
            <Image
              style={styles.icon}
              source={rightIconSource}
              resizeMode="contain"
            />
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: colors.white,
                fontFamily: 'PP Neue Montreal',
              }}>
              ?
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '90%',
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  backButtonContainer: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: 'rgba(40, 40, 40, 0.81)',
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
