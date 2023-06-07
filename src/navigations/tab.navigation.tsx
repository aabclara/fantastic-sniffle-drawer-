import React from "react";
import {BottomTabNavigationProp, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { ScreenCamera, ScreenOpcoes } from "../screens"
import { colors } from "../styles/colors";
import { FontAwesome } from '@expo/vector-icons'

type TabParamList = {
    Opcoes: undefined | { photo: string }
    Camera: undefined
}
type TabScreenNav = BottomTabNavigationProp<TabParamList, 'Opcoes' >
export type TabTypes = {
    navigation: TabScreenNav
}

export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveBackgroundColor: colors.primaryLight,
                tabBarActiveTintColor: colors.white,
                headerStyle: {
                    backgroundColor: colors.primaryLight
                },
                headerTintColor: colors.white,
                tabBarInactiveBackgroundColor: colors.primary
            }}
        >
            <Tab.Screen name="Opcoes" component={ScreenOpcoes} 
                options={{
                    tabBarIcon:() => (
                        <FontAwesome name="file-text" size={24} color={colors.white} />
                    ),
                }}
            />
            <Tab.Screen name="Camera" component={ScreenCamera}
                options={{
                    tabBarIcon:() => (
                        <FontAwesome name="camera" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}