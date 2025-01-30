import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import AppHeader from '../../components/Header/AppHeader';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FeedBackScreen() {
    const navigation = useNavigation();
    const [rating, setRating] = useState(0);

    const handleStarPress = (index) => {
        setRating(index + 1);
    };

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader
                title={'Feedback'}
                rightIconSource={require('../../assets/bell.png')}
            />
            <View style={styles.bodyContainer}>
                <View style={styles.starsContainer}>
                    {[0, 1, 2, 3, 4].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                            <Icon
                                name="star"
                                size={30}
                                color={index < rating ? "#ffd700" : "#ffffff"}
                                style={styles.star}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Write your feedback here..."
                    placeholderTextColor={colors.primaryTextColor}
                    multiline
                />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    bodyContainer: {
        paddingTop: 100,
        marginTop: 80,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    star: {
        marginHorizontal: 5,
    },
    input: {
        height: 100,
        width: '100%',
        backgroundColor: '#282828',
        borderRadius: 10,
        padding: 15,
        color: colors.primaryTextColor,
        marginBottom: 30,
        fontFamily: 'PP Neue Montreal',
    },
    submitButton: {
        backgroundColor: '#ffd700',
        borderRadius: 35,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    submitButtonText: {
        color: colors.backgroundColor,
        fontSize: 17,
        fontFamily: 'PP Neue Montreal',
    },
});