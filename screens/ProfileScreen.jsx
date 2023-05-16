import React, { useState } from 'react'
import TweetsList from '../components/TweetsList';
import ProfileHeader from '../components/ProfileHeader';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import useTweets from '../hooks/useTweets';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';

export default function ProfileScreen({ route }) {
    let { id } = route.params;
    let [user, setUser] = useState(null);
    let getUser = async () => {
        let res = await axios.get('http://localhost:3000/users/' + id);
        setUser(res.data)
    }
    const { tweets, isRefreshing, refreshHandler, handleEndReaching, isEndLoading } = useTweets(`http://localhost:3000/users/${id}/tweets`)

    useFocusEffect(
        React.useCallback(() => {
            getUser()
        }, [])
    );

    return !!user &&
        <View>
            <TweetsList
                ListHeaderComponent={<ProfileHeader user={user} />}
                ListFooterComponent={isEndLoading && <ActivityIndicator size="large" color="gray" />}
                tweets={tweets}
                onRefresh={refreshHandler}
                refreshing={isRefreshing}
                onEndReached={handleEndReaching}
            />
        </View>
}
