import Avatar from '../components/Avatar';
import profile from '../assets/react.jpg';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, Pressable, Image, View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

export default function TweetsList({ ListHeaderComponent, tweets }) {
    let navigation = useNavigation();

    const tailwind = useTailwind();

    const TweetItem = ({ item }) => (
        <View style={tailwind('border-b-2 border-gray-100 w-full bg-white')}>
            <View style={tailwind('p-2 flex-row  w-80')}>
                <View>
                    <Avatar user={item.author} />
                </View>
                <Pressable onPress={() => navigation.navigate('Tweet', {
                    id: item.id
                })} HitRect={3}>
                    <View style={tailwind('flex-row mb-1')}>
                        <Text style={tailwind('mr-2 font-bold')} numberOfLines={1}>{item.title}</Text>
                        <Text style={tailwind('mr-2 text-gray-500')} numberOfLines={1}>@{item.author.username}</Text>
                        <Text style={tailwind('text-gray-500')}>. {moment(item.createdAt).fromNow(true)}</Text>
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
        <FlatList data={tweets} renderItem={TweetItem} ListHeaderComponent={ListHeaderComponent}
            keyExtractor={item => item.id}>
        </FlatList>
    )
}
