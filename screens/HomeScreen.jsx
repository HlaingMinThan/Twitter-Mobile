import React from 'react'
import { Button, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';

export default function HomeScreen({ navigation }) {
    const tailwind = useTailwind();
    return (
        <View style={tailwind('justify-center items-center h-full')}>
            <Text style={tailwind('text-blue-600')}>Home</Text>
            <Button onPress={() => navigation.navigate('New Tweet')} title='New Tweet'></Button>
            <Button onPress={() => navigation.navigate('Tweet')} title='Tweet'></Button>
        </View>
    )
}
