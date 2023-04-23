import React from 'react'
import { Button, Text, View } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate('New Tweet')} title='New Tweet'></Button>
            <Button onPress={() => navigation.navigate('Tweet')} title='Tweet'></Button>
        </View>
    )
}
