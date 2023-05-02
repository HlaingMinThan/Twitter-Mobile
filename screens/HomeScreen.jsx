import React, { useEffect, useRef } from 'react'
import { View, Pressable, ActivityIndicator } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import TweetsList from '../components/TweetsList';
import useTweets from '../hooks/useTweets';

export default function HomeScreen({ navigation, route }) {
    let tweetListRef = useRef()
    const tailwind = useTailwind();
    const { isLoading, tweets, isRefreshing, refreshHandler, handleEndReaching, isEndLoading, getRefreshTweets } = useTweets('http://localhost:3000/tweets')
    useEffect(() => {
        if (route.params?.newTweetAdded) {
            tweetListRef.current.scrollToOffset({ offset: 0 });
            getRefreshTweets()
        }
    }, [route.params]);

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
