import { Image, Pressable, Text, View } from "react-native";
import Avatar from "./Avatar";
import { EvilIcons } from '@expo/vector-icons';
import cover from '../assets/cover.png';
import profile from '../assets/react.jpg';
import { useTailwind } from 'tailwind-rn';
import Button from './Button';

export default function ProfileHeader() {
    let tailwind = useTailwind();

    return (
        <>
            {/* cover photo */}
            <View style={tailwind('relative')}>
                <Image source={cover} style={tailwind('w-full h-32')}></Image>
            </View>
            {/* profile & follow */}
            <View style={tailwind('flex-row justify-between items-center w-full')}>
                <View>
                    <Avatar user={{ profile }} size={5} style={tailwind('absolute -bottom-4 ml-3')} />
                </View>
                <Button>Follow</Button>
            </View>
            {/* infos */}
            <View style={tailwind('ml-2 border-b-2 border-gray-100 pb-2')}>
                <Text style={tailwind('font-bold text-2xl')}>Hlaing Min Than</Text>
                <Text style={tailwind('text-gray-500 text-xs')}>@hlaingminthan</Text>
                <Text style={tailwind(' text-xs mt-2')}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                <View style={tailwind('flex-row items-center mt-2')}>
                    <EvilIcons name="location" size={20} color="gray" />
                    <Text style={tailwind('text-gray-500')}>Yangon,Myanmar</Text>
                </View>
                <View style={tailwind('flex-row items-center mt-2')}>
                    <EvilIcons name="link" size={20} color="gray" />
                    <Text style={tailwind('text-blue-500 text-xs mr-3')}>creativecodermm.com</Text>
                    <EvilIcons name="calendar" size={20} color="gray" />
                    <Text style={tailwind('text-xs text-gray-500')}>Joined March 2009</Text>
                </View>
            </View>
        </>
    )
}
