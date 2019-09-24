import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Input, Icon } from 'react-native-elements'

export default class Login extends Component {
    //metodo que se ejecuta al iniciar la pantalla
    componentDidMount() {
        console.log(this.props);
    }

    //creamos la función para darle acciones a nuestro boton de registro
    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen);
    };

    render() {
        return (
            <View style={styles.viewBody}>
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.subtitle}>Escribe tu nombre</Text>
                <Input
                    placeholder='nombre'
                    leftIcon={{ type: 'material-community', name: 'account' }}
                />
                <Text style={styles.subtitle}>Escribe tu contraseña</Text>
                <Input
                    placeholder='contraseña'
                    leftIcon={{ type: 'material-community', name: 'lock' }}
                    secureTextEntry
                />
                <Button
                    title="Entrar"
                    color="#f194ff"
                    onPress={() => this.goToScreen("Home")}
                />
                <Button
                    title="Registro"
                    color="#f194ff"
                    onPress={() => this.goToScreen("Register")}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
    },
});