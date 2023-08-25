import React from "react";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../assets/constants/colors";
import { Messages } from "../screens/tabs/Messages";
import { Sell } from "../screens/tabs/Sell";
import { Saved } from "../screens/tabs/Saved";
import { Home } from "../screens/tabs/Home";
import { Profile } from "../screens/tabs/Profile/Profile";

export function TabNavs() {
    const tab = createBottomTabNavigator();
    const goToProfile = (e) => {
        e.preventDefault();
        console.log('ok now');

    }
    return (
        <tab.Navigator screenOptions={{
            tabBarShowLabel: false,

        }}>
            <tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => <Ionicons name="ios-home-outline" size={size} color={focused ? '#0E6C4D' : 'grey'} />
            }} name='home' component={Home} />

            <tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => <Ionicons name="document-text-outline" size={size} color={focused ? '#0E6C4D' : 'grey'} />
            }} name='saved' component={Saved} />
            <tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => <Entypo name="shop" size={size} color={focused ? '#0E6C4D' : 'grey'} />
            }} name='sell' component={Sell} />

            <tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => <Ionicons name="chatbubble-ellipses-outline" size={size} color={focused ? '#0E6C4D' : 'grey'} />
            }} name='messages' component={Messages} />

            <tab.Screen options={{
                tabBarIcon: ({ focused, color, size }) => <Ionicons name="md-person-circle-outline" size={size} color={focused ? '#0E6C4D' : 'grey'} />
            }} name='profile' component={Profile} />
        </tab.Navigator>
    )
}