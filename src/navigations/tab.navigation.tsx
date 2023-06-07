import React from "react";
import {BottomTabNavigationProp, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { ScreenOpcoes } from "../screens"
import { colors } from "../styles/colors";
import { FontAwesome } from '@expo/vector-icons'

type TabParamList = {
    Opcoes: undefined
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
                headerTintColor: colors.white,
                headerStyle: {
                    backgroundColor: colors.primaryLight
                } 
            }}
        >
            <Tab.Screen name="Opcoes" component={ScreenOpcoes} 
                options={{
                    tabBarIcon:() => (
                        <FontAwesome name="file-text" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}