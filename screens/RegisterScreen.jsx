import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, Button } from 'react-native'
import { useTailwind } from 'tailwind-rn'

export default function Register({ navigation }) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let tailwind = useTailwind();

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={tailwind('text-2xl font-bold')}>Register To Join</Text>
            <TextInput value={email} onChangeText={setEmail} style={tailwind('border w-80 my-3 border-gray-400 p-2')} placeholder='Email'></TextInput>
            <TextInput value={password} onChangeText={setPassword} style={tailwind('border w-80 my-3 border-gray-400 p-2')} placeholder='Password'></TextInput>
            <Pressable style={tailwind('bg-blue-500 px-6 py-2 rounded-full')}>
                <Text style={tailwind('text-white text-lg')}>Log In</Text>
            </Pressable>
            <View style={tailwind('flex-row items-center justify-center mt-3')}>
                <Text>Already have an account ?</Text>
                <Text style={tailwind('text-blue-500 ml-2 underline')} onPress={() => navigation.navigate('Login')}>Login Here</Text>
            </View>
        </View>
    )
}
