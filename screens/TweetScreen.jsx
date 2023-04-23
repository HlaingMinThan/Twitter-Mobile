import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import profile from '../assets/react.jpg';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TweetScreen({ route, navigation }) {
    let tailwind = useTailwind()
    let item = {
        id: route.id,
        title: "Single Tweet",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
    return (
        <View style={tailwind("bg-white h-full  p-2")}>
            <View style={tailwind('border-b-2 border-gray-100 w-full bg-white pb-3')}>
                <View style={tailwind('flex-row  w-80')}>
                    <View>
                        <Pressable onPress={() => navigation.navigate('Profile')}><Image style={tailwind('w-12 h-12 rounded-full mr-3')} source={profile} alt="" /></Pressable>
                    </View>
                    <View>
                        <View style={tailwind('mb-1')}>
                            <Text style={tailwind('font-bold')} numberOfLines={1}>{item.title}</Text>
                            <Text style={tailwind('mt-1 text-gray-500')} numberOfLines={1}>@hlaingminthan</Text>
                        </View>
                    </View>
                </View>
                <Text style={tailwind('text-gray-700 text-lg mt-1')}>{item.description}</Text>
            </View>
            <View style={tailwind('flex-row mt-2 items-center border-b-2 border-gray-100 pb-3')}>
                <View style={tailwind('flex-row items-center mr-6')}>
                    <Text style={tailwind('font-bold mr-1')}>600</Text>
                    <Text style={tailwind('text-gray-500')}>Retweets</Text>
                </View>
                <View style={tailwind('flex-row items-center mr-6')}>
                    <Text style={tailwind('font-bold mr-1')}>600</Text>
                    <Text style={tailwind('text-gray-500')}>Quote Tweets</Text>
                </View>
                <View style={tailwind('flex-row items-center mr-6')}>
                    <Text style={tailwind('font-bold mr-1')}>600</Text>
                    <Text style={tailwind('text-gray-500')}>Likes</Text>
                </View>
            </View>
            <View style={tailwind('flex-row mt-2 items-center justify-around border-b-2 border-gray-100 pb-2')}>
                <EvilIcons name="comment" size={30} color="gray" />
                <EvilIcons name="retweet" size={30} color="gray" />
                <MaterialIcons name="favorite-outline" size={24} color="gray" />
                <EvilIcons name="share-google" size={30} color="gray" />
            </View>
        </View>
    )
}
