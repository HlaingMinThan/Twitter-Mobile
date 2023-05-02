import React, { useState } from 'react'
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import profile from '../assets/react.jpg';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import Avatar from '../components/Avatar';
import moment from 'moment';

export default function TweetScreen({ route, navigation }) {
    let tailwind = useTailwind();
    let [tweet, setTweet] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let { id } = route.params;
    let getTweet = async () => {
        setIsLoading(true);
        const res = await axios.get('http://localhost:3000/tweets/' + id);
        setTweet(res.data)
        setIsLoading(false);
    }
    useFocusEffect(
        React.useCallback(() => {
            getTweet()
        }, [id])
    );
    return (
        <View style={tailwind('h-full bg-white')}>
            {isLoading && <ActivityIndicator size="large" color="gray" style={tailwind('mt-3')} />}
            {!isLoading && (
                <View style={tailwind("p-2")}>
                    <View style={tailwind('border-b-2 border-gray-100 w-full bg-white pb-3')}>
                        <View style={tailwind('flex-row  w-80')}>
                            <View>
                                <Avatar user={tweet.author} />
                            </View>
                            <View>
                                <View style={tailwind('mb-1')}>
                                    <Text style={tailwind('font-bold')} numberOfLines={1}>{tweet.author.name}</Text>
                                    <Text style={tailwind('mt-1 text-gray-500')} numberOfLines={1}>@{tweet.author.username}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={tailwind('text-gray-700 text-lg mt-1')}>{tweet.description}</Text>
                        <View style={tailwind('flex-row mt-2 items-center')}>
                            <Text style={tailwind('text-gray-500 mr-3')}>{moment(tweet.createdAt).format('h:mm A')}</Text>
                            <Text style={tailwind('text-gray-500 mr-3')}>. {moment(tweet.createdAt).format('DD MMM YY')}</Text>
                            <Text style={tailwind('text-blue-500')}>Twitter for iphone</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row mt-2 items-center border-b-2 border-gray-100 pb-3')}>
                        <View style={tailwind('flex-row items-center mr-6')}>
                            <Text style={tailwind('font-bold mr-1')}>600</Text>
                            <Text style={tailwind('text-gray-500')}>Retweets</Text>
                        </View>
                        <View style={tailwind('flex-row items-center mr-6')}>
                            <Text style={tailwind('font-bold mr-1')}>600</Text>
                            <Text style={tailwind('text-gray-500')}>Quote Tweets</Text>
                        </View>
                        <View style={tailwind('flex-row items-center mr-6')}>
                            <Text style={tailwind('font-bold mr-1')}>600</Text>
                            <Text style={tailwind('text-gray-500')}>Likes</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row mt-2 items-center justify-around border-b-2 border-gray-100 pb-2')}>
                        <EvilIcons name="comment" size={30} color="gray" />
                        <EvilIcons name="retweet" size={30} color="gray" />
                        <MaterialIcons name="favorite-outline" size={24} color="gray" />
                        <EvilIcons name="share-google" size={30} color="gray" />
                    </View>
                </View>
            )}
        </View>
    )
}
