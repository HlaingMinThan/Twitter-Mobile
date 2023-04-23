import React from 'react'
import { Text, View } from 'react-native'

export default function TweetScreen({ route }) {
    let { id } = route.params;

    return (
        <View><Text>Tweet {id}</Text></View>
    )
}
