import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../../screens/profile/SettingsScreen';
import ActionItemsScreen from '../../screens/retro/detail/ActionItemsScreen';
import {themeColors} from '../../styles/theme';
import RetroListScreen from "../../screens/retro/list/RetroListScreen";

const Tab = createMaterialBottomTabNavigator();

export default function HomeNav() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{backgroundColor: themeColors.blue800}}
            activeColor={themeColors.violet200}
            inactiveColor={themeColors.blue300}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Retro-Übersicht"
                component={RetroListScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="format-list-bulleted"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Aktuelle Maßnahmen"
                component={ActionItemsScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="clock" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
