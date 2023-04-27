import React, { useState } from 'react'
import TweetsList from '../components/TweetsList';
import ProfileHeader from '../components/ProfileHeader';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function ProfileScreen({ route }) {
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
        <TweetsList tweets={user.tweets} ListHeaderComponent={<ProfileHeader user={user} />} />
    )
}
