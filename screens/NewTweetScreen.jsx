import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, ActivityIndicator, Alert } from 'react-native'
import Button from '../components/Button'
import Avatar from "../components/Avatar";
import { useTailwind } from 'tailwind-rn';
import axios from 'axios';

export default function NewTweetScreen({ navigation }) {
    let tailwind = useTailwind();
    let [tweet, setTweet] = useState('');
    let [isLoading, setIsLoading] = useState(false);

    let textMaxLength = 280;

    let postTweet = async () => {
        setIsLoading(true);
        if (!tweet.length) {
            Alert.alert('please write some tweet first.');
        }
        let res = await axios.post('http://localhost:3000/tweets', {
            description: tweet
        })

        if (res.data) {
            setIsLoading(false);
            navigation.navigate('Home 1', {
                newTweetAdded: true
            })
        }
    }

    return (
        <View style={tailwind('bg-white h-full')}>
            <View style={tailwind('flex-row items-center justify-between p-3')}>
                <View>
                    <Text style={tailwind(`${tweet.length > 250 ? 'text-red-500' : 'text-gray-500 '}`)}>Characters left - {textMaxLength - tweet.length}</Text>
                </View>
                <View style={tailwind('flex-row justify-center')}>
                    {isLoading && <ActivityIndicator size="small" color="gray" style={tailwind('mr-1')} />}
                    <Button disabled={isLoading} tBgColor="bg-blue-500" onPress={postTweet}>Tweet</Button>
                </View>
            </View>
            <View style={tailwind('flex-row')}>
                <Avatar size={3} style={tailwind('ml-3 mr-1')} />
                <TextInput multiline maxLength={textMaxLength} onChangeText={setTweet} value={tweet} placeholder="What's Happening" style={tailwind('w-full h-full pb-10 flex-wrap pr-28')} ></TextInput>
            </View>
        </View >
    )
}
