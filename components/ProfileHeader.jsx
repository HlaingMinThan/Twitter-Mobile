import { Image, Pressable, Text, View } from "react-native";
import Avatar from "./Avatar";
import { EvilIcons } from '@expo/vector-icons';
import cover from '../assets/cover.png';
import { useTailwind } from 'tailwind-rn';
import Button from './Button';
import moment from "moment";

export default function ProfileHeader({ user }) {
    let tailwind = useTailwind();

    return (
        <View style={tailwind('bg-white')}>
            {/* cover photo */}
            <View style={tailwind('relative')}>
                <Image source={cover} style={tailwind('w-full h-32')}></Image>
            </View>
            {/* profile & follow */}
            <View style={tailwind('flex-row justify-between items-center w-full')}>
                <View>
                    <Avatar user={user} style={tailwind('absolute -bottom-4')} />
                </View>
                <Button style="mt-3">Follow</Button>
            </View >
            {/* infos */}
            <View style={tailwind('border-b-2 border-gray-100 pb-2')}>
                <Text style={tailwind('font-bold text-2xl')}>{user.name}</Text>
                <Text style={tailwind('text-gray-500 text-xs')}>@{user.username}</Text>
                <Text style={tailwind(' text-xs mt-2')}>{user.bio}</Text>
                <View style={tailwind('flex-row items-center mt-2')}>
                    <EvilIcons name="location" size={20} color="gray" />
                    <Text style={tailwind('text-gray-500')}>{user.location}</Text>
                </View>
                <View style={tailwind('flex-row items-center mt-2')}>
                    <EvilIcons name="link" size={20} color="gray" />
                    <Text style={tailwind('text-blue-500 text-xs mr-3')}>{user.website}</Text>
                    <EvilIcons name="calendar" size={20} color="gray" />
                    <Text style={tailwind('text-xs text-gray-500')}>Joined {moment(user.createdAt).format('MMM Y')}</Text>
                </View>
            </View>
        </View>
    )
}
