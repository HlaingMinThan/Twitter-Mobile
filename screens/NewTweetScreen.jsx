import React, { useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import Button from '../components/Button'
import Avatar from "../components/Avatar";
import { useTailwind } from 'tailwind-rn';
import profile from '../assets/react.jpg';

export default function NewTweetScreen() {
    let tailwind = useTailwind();
    let [tweet, setTweet] = useState('');
    let [error, setError] = useState('');

    let textMaxLength = 280;

    return (
        <View style={tailwind('bg-white h-full')}>
            <View style={tailwind('flex-row items-center justify-between p-3')}>
                <View>
                    <Text style={tailwind('text-gray-500')}>Characters left - {textMaxLength - tweet.length}</Text>
                </View>
                <View><Button tBgColor="bg-blue-500">Tweet</Button></View>
            </View>
            <View style={tailwind('flex-row')}>
                <Avatar user={{ profile, }} size={3} style={tailwind('ml-3 mr-1')} />
                <TextInput maxLength={textMaxLength} onChangeText={setTweet} value={tweet} placeholder="What's Happening" style={tailwind('w-full')} ></TextInput>
                {error && <Text style={tailwind('text-red-500 text-xs mt-1')}>{error}</Text>}
            </View>
        </View >
    )
}
