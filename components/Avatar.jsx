import { useNavigation } from "@react-navigation/native"
import { Image, Pressable } from "react-native";
import { useTailwind } from 'tailwind-rn';

export default function Avatar({ user = { profile: 'https://i.pravatar.cc/150?img=3' }, size = 'sm', style }) {
    let navigation = useNavigation();
    let tailwind = useTailwind();
    let sizeClasses;
    if (size === 'sm') {
        sizeClasses = "w-12 h-12"
    }
    if (size === 'lg') {
        sizeClasses = "w-24 h-24"
    }

    return (
        <Pressable onPress={() => navigation.navigate('Profile', {
            id: user.id
        })} style={style}><Image style={tailwind(`${sizeClasses} rounded-full mr-3`)} source={{ uri: user.profile ?? 'https://img.freepik.com/free-icon/user_318-563642.jpg' }} alt="" /></Pressable>
    )
}
