import t from "tcomb-form-native";

export default (formValidation = {
    //validamos el email que traiga @
    email: t.refinement(t.String, value => {
        return /@/.test(value);
    }),
    password: t.refinement(t.String, value => {
        return value.length >= 4;
    })
});