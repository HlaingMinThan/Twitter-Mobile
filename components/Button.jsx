import { Pressable, Text } from "react-native";
import { useTailwind } from 'tailwind-rn';

export default function Button({ children, onPress }) {
    let tailwind = useTailwind();

    return (
        <Pressable onPress={onPress} style={tailwind('bg-black px-4  mt-4 mr-3 py-2 rounded-full')}><Text style={tailwind('text-white font-bold')}>{children}</Text></Pressable>
    )
}
