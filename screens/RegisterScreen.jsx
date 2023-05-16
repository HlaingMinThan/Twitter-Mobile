import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, Pressable, Button } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { AuthContext } from '../contexts/AuthProvider';

export default function Register({ navigation }) {
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let tailwind = useTailwind();
    let { register, error, setError } = useContext(AuthContext);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={tailwind('text-2xl font-bold')}>Register To Join</Text>
            <TextInput value={username} onChangeText={setUsername} style={tailwind('border w-80 my-3 border-gray-400 p-2')} placeholder='Username'></TextInput>
            {(error && error.username) && <Text style={tailwind('text-red-500')}>{error.username}</Text>}
            <TextInput value={email} onChangeText={setEmail} style={tailwind('border w-80 my-3 border-gray-400 p-2')} placeholder='Email'></TextInput>
            {(error && error.email) && <Text style={tailwind('text-red-500')}>{error.email}</Text>}
            <TextInput value={password} onChangeText={setPassword} style={tailwind('border w-80 my-3 border-gray-400 p-2')} placeholder='Password'></TextInput>
            {(error && error.password) && <Text style={tailwind('text-red-500 mb-2')}>{error.password}</Text>}
            <Pressable style={tailwind('bg-blue-500 px-6 py-2 rounded-full')} onPress={() => register(username, email, password)}>
                <Text style={tailwind('text-white text-lg')}>Register Now</Text>
            </Pressable>
            <View style={tailwind('flex-row items-center justify-center mt-3')}>
                <Text>Already have an account ?</Text>
                <Text style={tailwind('text-blue-500 ml-2 underline')} onPress={() => { navigation.navigate('Login'); setError(null); }}>Login Here</Text>
            </View>
        </View>
    )
}
