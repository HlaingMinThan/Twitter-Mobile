import React, { useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import Button from '../components/Button'
import Avatar from "../components/Avatar";
import { useTailwind } from 'tailwind-rn';
import profile from '../assets/react.jpg';

export default function NewTweetScreen() {
    let tailwind = useTailwind();
    let [tweet, setTweet] = useState('');

    let textMaxLength = 280;

    return (
        <View style={tailwind('bg-white h-full')}>
            <View style={tailwind('flex-row items-center justify-between p-3')}>
                <View>
                    <Text style={tailwind(`${tweet.length > 250 ? 'text-red-500' : 'text-gray-500 '}`)}>Characters left - {textMaxLength - tweet.length}</Text>
                </View>
                <View><Button tBgColor="bg-blue-500">Tweet</Button></View>
            </View>
            <View style={tailwind('flex-row')}>
                <Avatar user={{ profile, }} size={3} style={tailwind('ml-3 mr-1')} />
                <TextInput multiline maxLength={textMaxLength} onChangeText={setTweet} value={tweet} placeholder="What's Happening" style={tailwind('w-full h-full pb-10 flex-wrap pr-28')} ></TextInput>
            </View>
        </View >
    )
}
