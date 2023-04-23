import React from 'react'
import { Text, View, TextInput } from 'react-native'
import Button from '../components/Button'
import Avatar from "../components/Avatar";
import { useTailwind } from 'tailwind-rn';
import profile from '../assets/react.jpg';

export default function NewTweetScreen() {
    let tailwind = useTailwind();

    return (
        <View style={tailwind('bg-white h-full')}>
            <View style={tailwind('flex-row items-center justify-between p-3')}>
                <View>
                    <Text style={tailwind('text-gray-500')}>Characters left - 280</Text>
                </View>
                <View><Button tBgColor="bg-blue-500">Tweet</Button></View>
            </View>
            <View style={tailwind('flex-row')}>
                <Avatar user={{ profile, }} size={3} style={tailwind('ml-3 mr-1')} />
                <TextInput placeholder="What's Happening" style={tailwind('w-full')} ></TextInput>
            </View>
        </View>
    )
}
