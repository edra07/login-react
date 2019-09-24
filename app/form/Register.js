import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/Validation";

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
    fields: {
        name: {
            label: "Nombre(*)",
            placeholder: "Escribe tu nombre",
            error: "Nombre invalido"
        },
        email: {
            label: "Email(*)",
            placeholder: "Escribe tu correo",
            error: "Correo invalido"
        },
        password: {
            label: "Contraseña(*)",
            placeholder: "Escribe tu contraseña",
            error: "Password invalido",
            password: true,
            secureTextEntry: true,
        },
        passwordConfirmation: {
            label: "Confirma tu contraseña",
            placeholder: "Escribe de nuevo tu contraseña",
            error: "Password invalido",
            password: true,
            secureTextEntry: true,
        }
    }
};
