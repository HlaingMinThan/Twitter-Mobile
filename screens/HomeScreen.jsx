import React from 'react'
import { View, Pressable } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import TweetsList from '../components/TweetsList';

export default function HomeScreen({ navigation }) {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('relative')}>
            <TweetsList navigation={navigation} />
            <Pressable onPress={() => navigation.navigate('New Tweet')} style={tailwind('bg-blue-500 items-center justify-center w-12 h-12 rounded-full absolute bottom-6 right-5')}>
                <AntDesign name="plus" size={20} color="white" />
            </Pressable>
        </View>
    )
}
