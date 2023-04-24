import { useNavigation } from "@react-navigation/native"
import { Image, Pressable } from "react-native";
import { useTailwind } from 'tailwind-rn';

export default function Avatar({ user = { profile: 'https://i.pravatar.cc/150?img=3' }, size = 3, style }) {
    let navigation = useNavigation();
    let tailwind = useTailwind();

    return (
        <Pressable onPress={() => navigation.navigate('Profile')} style={style}><Image style={tailwind(`w-${size * 4} h-${size * 4} rounded-full mr-3`)} source={{ uri: user.profile }} alt="" /></Pressable>
    )
}
