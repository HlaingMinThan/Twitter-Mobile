import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TweetScreen from './screens/TweetScreen';
import NewTweetScreen from './screens/NewTweetScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import InboxScreen from './screens/InboxScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import { AuthContext } from './contexts/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Home 1" component={HomeScreen}
        options={{
          tabBarIcon: (({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ))
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarIcon: (({ color, size }) => (
            <Ionicons name="search" size={24} color={color} />
          ))
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen}
        options={{
          tabBarIcon: (({ color, size }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ))
        }}
      />
      <Tab.Screen name="Inbox" component={InboxScreen}
        options={{
          tabBarIcon: (({ color, size }) => (
            <FontAwesome name="envelope" size={24} color={color} />
          ))
        }}
      />
    </Tab.Navigator>
  )
}

const CustomDrawerContent = (props) => {

  let { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile 2" options={{ title: "Profile" }} component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={({ route }) => (
      {
        headerShown: route.name !== 'Home 2',
        title: "",
        headerBackTitleVisible: false
      }
    )}>
      {/* show drawer first , if user click on apart of DrawerNavigator routes, it'll hide drawer */}
      <Stack.Screen name="Home 2" component={DrawerNavigator} />
      <Stack.Screen name="Tweet" component={TweetScreen} />
      <Stack.Screen name="New Tweet" component={NewTweetScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
const AuthStackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={() => (
      {
        headerShown: false,
        title: "",
        headerBackTitleVisible: false
      }
    )}>
      {/* show drawer first , if user click on apart of DrawerNavigator routes, it'll hide drawer */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default function Root() {
  let [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    //simulate connection to backend
    setIsLoading(true);
    SecureStore.getItemAsync('user').then(user => {
      setUser(JSON.parse(user))
      setIsLoading(false);
    }).catch(e => {
      console.log(e)
      setIsLoading(false);
    })

  }, []);
  if (isLoading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    )
  }

  return (
    user ? (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    )
  );
}
