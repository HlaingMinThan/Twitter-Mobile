import React, { useEffect, useRef, useState } from 'react'
import { View, Pressable, ActivityIndicator } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import TweetsList from '../components/TweetsList';
import axios from 'axios';

export default function HomeScreen({ navigation, route }) {
    let tweetListRef = useRef()
    useEffect(() => {
        if (route.params?.newTweetAdded) {
            tweetListRef.current.scrollToOffset({ offset: 0 });
            getRefreshTweets()
        }
    }, [route.params]);

    let getRefreshTweets = () => {
        setPage(1);
        getTweets(false)
    }

    const tailwind = useTailwind();
    let [tweets, setTweets] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [isEndLoading, setIsEndLoading] = useState(false);
    let [isRefreshing, setIsRefreshing] = useState(false);
    let [page, setPage] = useState(1);

    let getTweets = async (isLoading = true) => {
        setIsLoading(isLoading);
        const res = await axios.get('http://localhost:3000/tweets?page=' + page);
        if (page === 1) {
            setTweets(res.data.data)
        } else {
            setTweets(prev => [...prev, ...res.data.data])
        }
        setIsLoading(false);
        setIsEndLoading(false);
    }

    let refreshHandler = async () => {
        setPage(1);
        setIsRefreshing(true);
        await getTweets(false);
        setIsRefreshing(false);
    }

    let handleEndReaching = () => {
        setIsEndLoading(true);
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        getTweets(false)
    }, [page]);

    return (
        <View style={tailwind('relative h-full bg-white')}>
            {isLoading && <ActivityIndicator size="large" color="gray" style={tailwind('mt-3')} />}
            {!isLoading && <TweetsList tweetListRef={tweetListRef} tweets={tweets} onRefresh={refreshHandler} refreshing={isRefreshing} onEndReached={handleEndReaching} ListFooterComponent={isEndLoading && <ActivityIndicator size="large" color="gray" style={tailwind('mt-3')} />} />}
            <Pressable onPress={() => navigation.navigate('New Tweet')} style={tailwind('bg-blue-500 items-center justify-center w-12 h-12 rounded-full absolute bottom-6 right-5')}>
                <AntDesign name="plus" size={20} color="white" />
            </Pressable>
        </View>
    )
}
