import React from 'react'
import { View } from 'react-native'
import TweetsList from '../components/TweetsList';
import ProfileHeader from '../components/ProfileHeader';
import { useTailwind } from 'tailwind-rn';

export default function ProfileScreen() {
    let tailwind = useTailwind();

    return (
        <View style={tailwind('bg-white')}>

            {/* tweets */}
            <View style={tailwind('mt-3')}>
                <TweetsList ListHeaderComponent={ProfileHeader} />
            </View>
        </View>
    )
}
