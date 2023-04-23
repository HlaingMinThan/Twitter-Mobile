import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TweetScreen from './screens/TweetScreen';
import NewTweetScreen from './screens/NewTweetScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import InboxScreen from './screens/InboxScreen';
import SettingsScreen from './screens/SettingsScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel:false
    }}>
      <Tab.Screen name="Home 1" component={HomeScreen} 
        options={{
          tabBarIcon : (({color,size}) => (
            <Ionicons name="home" size={24} color={color} />
          ) )
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} 
        options={{
          tabBarIcon : (({color,size}) => (
            <Ionicons name="search" size={24} color={color} />
          ) )
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} 
        options={{
          tabBarIcon : (({color,size}) => (
            <Ionicons name="notifications" size={24} color={color} />
          ) )
        }}
      />
      <Tab.Screen name="Inbox" component={InboxScreen} 
        options={{
          tabBarIcon : (({color,size}) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ) )
        }}
      />
    </Tab.Navigator>
  )
}

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator initialRouteName='Home' >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const StackNavigator = () => {

  return (
      <Stack.Navigator screenOptions={({route}) => (
        {
          headerShown : route.name !== 'Home 2',
          title : "",
          headerBackTitleVisible : false
        }
      )}>
        {/* show drawer first , if user click on apart of DrawerNavigator routes, it'll hide drawer */}
        <Stack.Screen name="Home 2" component={DrawerNavigator} />
        <Stack.Screen name="Tweet" component={TweetScreen} />
        <Stack.Screen name="New Tweet" component={NewTweetScreen} />
      </Stack.Navigator>
  )
}

export default function App() {

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </TailwindProvider>
  );
}
