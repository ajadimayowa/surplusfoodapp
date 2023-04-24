import React from "react";
import { Home } from "./Home";
import { Saved } from "./Saved";
import { Sell } from "./Sell";
import { Messages } from "./Messages";
import { Profile } from "./Profile";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../assets/constants/colors";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export function TabNavs(){
    const tab = createBottomTabNavigator();
    return(
<tab.Navigator screenOptions={{
        tabBarShowLabel : false,
        
      }}>
        <tab.Screen options={{
          tabBarIcon : ({focused,color, size})=> <Ionicons name="ios-home-outline" size={size} color={focused? '#0E6C4D':'grey'} />
        }} name='home' component={Home}/>
        
        <tab.Screen options={{
          tabBarIcon : ({focused,color, size})=> <Ionicons name="document-text-outline" size={size} color={focused? '#0E6C4D':'grey'} />
        }} name='saved' component={Saved}/>
        <tab.Screen options={{
          tabBarIcon : ({focused,color, size})=> <Entypo name="shop" size={size} color={focused? '#0E6C4D':'grey'}/>
        }} name='sell' component={Sell}/>
        
        <tab.Screen options={{
          tabBarIcon : ({focused,color, size})=> <Ionicons name="chatbubble-ellipses-outline" size={size} color={focused? '#0E6C4D':'grey'}/>
        }} name='messages' component={Messages}/>
        
        <tab.Screen options={{
          tabBarIcon : ({focused,color, size})=> <Ionicons name="md-person-circle-outline" size={size} color={focused? '#0E6C4D':'grey'}/>
        }}  name='profile' component={Profile}/>
      </tab.Navigator>
    )
}