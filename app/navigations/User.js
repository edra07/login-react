import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    createAppContainer,
} from "react-navigation";
import {
    createStackNavigator,
} from "react-navigation-stack";
import {
    createBottomTabNavigator,
} from "react-navigation-tabs";
import { Icon } from 'react-native-elements'


//Agregamos las pantallas de nuestra app
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/MyAccount/Login";
import RegisterScreen from "../screens/MyAccount/Register";

//Creamos los stacks
//Los stacks se refieren a las pantallas y sus "sub" pantallas internas
const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Home"
        })
    }
});
const loginScreenStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Login"
        })
    },
    //Agregamos la pantalla de registro al stack de mi cuenta
    Register: {
        screen: RegisterScreen
    }
});

//Creamos el Route Stack, que se refuere al componente de menú que se mostrara en la
//parte inferior de la App
const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack, //homeScreenStack se refiere al stack que acabamos de crear
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    type="material-community"
                    size={22}
                    color={tintColor} //se muestra azul porque es el color default
                />
            )
        })
    },
    Login: {
        screen: loginScreenStack, //homeScreenStack se refiere al stack que acabamos de crear
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Login",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="login"
                    type="material-community"
                    size={22}
                    color={tintColor} //se muestra azul porque es el color default
                />
            )
        })
    }
},
    {
        //Agregamos la pantalla inicial y modificamos el orden del menu
        //Que se mostrará en la parte inferior del menú
        initialRouteName: "Login",
        order: ["Login", "Home"],
        //Modificamos los valores por default para tintColor
        tabBarOptions: {
            inactiveTintColor: "#2e2e2e",
            activeTintColor: "#c1001c",
        }
    });
export default createAppContainer(RootStack);

// define your styles
const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
    }
});
