import React, { useState } from 'react'
import { View } from 'react-native'
import TweetsList from '../components/TweetsList';
import ProfileHeader from '../components/ProfileHeader';
import { useTailwind } from 'tailwind-rn';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function ProfileScreen({ route }) {
    let tailwind = useTailwind();
    let { id } = route.params;
    let [user, setUser] = useState(null);
    let getUser = async () => {
        let res = await axios.get('http://localhost:3000/users/' + id);
        setUser(res.data)
    }
    useFocusEffect(
        React.useCallback(() => {
            getUser()
        }, [])
    );

    return !!user && (
        <View style={tailwind('bg-white')}>
            <TweetsList ListHeaderComponent={<ProfileHeader user={user} />} />
        </View>
    )
}
