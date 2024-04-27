import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStorage  from "expo-secure-store";
import {useSelector} from "react-redux";
import SplashScreen from "../Screens/SlashScreen";
import {Login} from "../Screens/Login";
import React from "react";
import {Home} from "../Screens/Home";
import {About} from "../Screens/About";
import {Register} from "../Screens/Register";
import {TransactionList} from "../Screens/TransactionList";
import {TransactionForm} from "../Screens/TransactionForm";
import {Profile} from "../Screens/Profile";
import {Text, View} from "react-native";
import {Entypo, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import { Platform } from "react-native";
import {TransactionDetail} from "../Screens/TransactionDetail";

export const Router = () => {
    const stack = createNativeStackNavigator();
    const token = SecureStorage.getItem("token");
    const isAuthenticated =  useSelector((state) => state.auth.isAuthenticated);

    return(
        <stack.Navigator>
            {/*<stack.Screen name="Login" component={Login} />*/}
            {isAuthenticated ? (
                <>
                    <stack.Screen name="myTab" component={MyTab} options={{headerShown: false}} />
                    <stack.Screen name={"List"} component={TransactionList} options={{headerShown: false}} />
                    <stack.Screen name={'TransactionDetail'} component={TransactionDetail} options={{headerShown: false}} />
                </>
            ) : (
                <>
                    <stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                    <stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
                    <stack.Screen name={"RegisterScreen"} component={Register} options={{ headerShown: false }} />
                </>
            )}
        </stack.Navigator>
    )
}

function MyTab() {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 60,
                background: "#fff"
            }
        }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Entypo name="home" size={24} color={focused ? '#378CE7' : 'black'} />
                                <Text style={{fontSize: 12, color:focused ? '#378CE7' : 'black'}}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="List"
                component={TransactionList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Entypo name="list" size={24} color={focused ? '#378CE7' : 'black'} />
                                <Text style={{fontSize: 12, color:focused ? '#378CE7' : 'black'}}>List</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen
                name="Add"
                component={TransactionForm}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{
                                top: Platform.OS === "ios" ? -10 : -20,
                                width: Platform.OS === "ios" ? 50 : 60,
                                height: Platform.OS === "ios" ? 50 : 60,
                                borderRadius: Platform.OS === "ios" ? 25 : 30,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? "#0E46A3" : "#40A2D8"
                            }}>
                                <MaterialIcons name="add" size={32} color="white" />
                            </View>
                        )
                    }
                }}

            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Entypo name="info" size={24} color={focused ? '#378CE7' : 'black'} />
                                <Text style={{fontSize: 12, color:focused ? '#378CE7' : 'black'}}>About</Text>
                            </View>
                        )
                    }
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <MaterialCommunityIcons name="account" size={24} color={focused ? '#378CE7' : 'black'} />
                                <Text style={{fontSize: 12, color:focused ? '#378CE7' : 'black'}}>Profile</Text>
                            </View>
                        )
                    }
                }} />
        </Tab.Navigator>
    )
}

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: "#fff"
    }
}

