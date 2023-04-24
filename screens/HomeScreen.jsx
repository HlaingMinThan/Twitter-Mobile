import React, { useState } from 'react'
import { View, Pressable, ActivityIndicator } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import TweetsList from '../components/TweetsList';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
    const tailwind = useTailwind();
    let [tweets, setTweets] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

    let getTweets = async () => {
        setIsLoading(true);
        const res = await axios.get('http://localhost:3000/tweets');
        setTweets(res.data)
        setIsLoading(false);
    }

    useFocusEffect(
        React.useCallback(() => {
            getTweets()
        }, [])
    );

    return (
        <View style={tailwind('relative h-full bg-white')}>
            {isLoading && <ActivityIndicator size="large" color="gray" style={tailwind('mt-3')} />}
            {!isLoading && <TweetsList tweets={tweets} />}
            <Pressable onPress={() => navigation.navigate('New Tweet')} style={tailwind('bg-blue-500 items-center justify-center w-12 h-12 rounded-full absolute bottom-6 right-5')}>
                <AntDesign name="plus" size={20} color="white" />
            </Pressable>
        </View>
    )
}
