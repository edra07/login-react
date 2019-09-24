import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../form/Register";

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            RegisterStruct: RegisterStruct,
            RegisterOptions: RegisterOptions,
            //creamos estructura que recibirá los datos del formulario
            formData: {
                name: "",
                email: "",
                password: "",
                passwordConfirmation: "",
            }
        };
    }
    register = () => {
        //agregamos validación del formulario
        const validate = this.refs.registerForm.getValue();
        console.log("intento de registro");
        console.log(this.state.formData);
        const { password, passwordConfirmation } = this.state.formData;
        if (password === passwordConfirmation) {
            this.props.navigation.push("Home", { name: this.state.formData.name })
            console.log("Ok! Las contraseñas coinciden");
        } else {
            console.log("Error, password no son iguales");
        }
        console.log(this.state.formData);
    };

    onChangeFormRegister = formValue => {
        console.log("cambio...");
        this.setState({
            formData: formValue
        });
        console.log(this.state.formData);
    }

    render() {
        const { RegisterOptions, RegisterStruct } = this.state;
        return (
            <View style={styles.viewBody}>
                <Text>Registro</Text>
                <Form
                    ref="registerForm"
                    type={RegisterStruct}
                    options={RegisterOptions}
                    //asociamos el formulario a los valores del state
                    value={this.state.formData}
                    //agregamos la función que detecta el cambio en el formulario
                    onChange={formValue => this.onChangeFormRegister(formValue)}
                />
                <Button title="Registarme" onPress={() => this.register()} color="#f194ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
});