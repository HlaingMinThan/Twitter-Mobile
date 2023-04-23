import React from 'react'
import { FlatList, View, Text, Image, Pressable } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import profile from '../assets/react.jpg';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    const tailwind = useTailwind();
    const tweets = [
        {
            id: 1,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 2,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 3,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 4,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 5,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 6,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 7,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 8,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            id: 9,
            title: "Hello world",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
    ]

    const TweetItem = ({ item }) => (
        <View style={tailwind('border-b-2 border-gray-100 w-full bg-white')}>
            <View style={tailwind('p-2 flex-row  w-80')}>
                <View>
                    <Pressable onPress={() => navigation.navigate('Profile')}><Image style={tailwind('w-10 h-10 rounded-full mr-3')} source={profile} alt="" /></Pressable>
                </View>
                <Pressable onPress={() => navigation.navigate('Tweet', {
                    id: item.id
                })} HitRect={3}>
                    <View style={tailwind('flex-row mb-1')}>
                        <Text style={tailwind('mr-2 font-bold')} numberOfLines={1}>{item.title}</Text>
                        <Text style={tailwind('mr-2 text-gray-500')} numberOfLines={1}>@hlaingminthan</Text>
                        <Text style={tailwind('text-gray-500')}>. 9m</Text>
                    </View>
                    <Text style={tailwind('text-gray-700')} numberOfLines={4}>{item.description}</Text>
                    <View style={tailwind('flex-row mt-2 items-center')}>
                        <View style={tailwind('flex-row items-center mr-6')}>
                            <EvilIcons name="comment" size={24} color="gray" />
                            <Text style={tailwind('text-gray-500')}>12</Text>
                        </View>
                        <View style={tailwind('flex-row items-center mr-6')}>
                            <EvilIcons name="retweet" size={24} color="gray" />
                            <Text style={tailwind('text-gray-500')}>12</Text>
                        </View>
                        <View style={tailwind('flex-row items-center mr-6')}>
                            <MaterialIcons name="favorite-outline" size={20} color="gray" />
                            <Text style={tailwind('text-gray-500')}>12</Text>
                        </View>
                        <View>
                            <EvilIcons name="share-google" size={24} color="gray" />
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={tailwind('relative')}>
            <FlatList data={tweets} renderItem={TweetItem}
                keyExtractor={item => item.id}>
            </FlatList>
            <Pressable onPress={() => navigation.navigate('New Tweet')} style={tailwind('bg-blue-500 items-center justify-center w-12 h-12 rounded-full absolute bottom-6 right-5')}>
                <AntDesign name="plus" size={20} color="white" />
            </Pressable>
        </View>
    )
}
