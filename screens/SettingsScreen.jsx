import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../contexts/AuthProvider'

export default function Settings() {
    let { user } = useContext(AuthContext);
    console.log(typeof user)
    return (
        <View>
            <Text>Username - {user.username}</Text>
            <Text>Settings</Text>
        </View>
    )
}
