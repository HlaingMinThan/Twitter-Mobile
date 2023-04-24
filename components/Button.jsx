import { Pressable, Text } from "react-native";
import { useTailwind } from 'tailwind-rn';

export default function Button({ children, onPress, style = '', disabled, tBgColor = "bg-black" }) {
    let tailwind = useTailwind();

    return (
        <Pressable disabled={disabled} onPress={onPress} style={tailwind(` w-20 px-4  mr-3 py-2 rounded-full ${tBgColor} ${style}`)}><Text style={tailwind('text-white font-bold')}>{children}</Text></Pressable>
    )
}
