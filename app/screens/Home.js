import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';

function Separator() {
    return <View style={styles.separator} />;
}

export default class Home extends Component {
    render() {
        return (
            <View style={styles.viewBody}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.title}>Ramírez Molina Edin Miroslava</Text>
                <Avatar
                    rounded
                    size="xlarge"
                    source={{
                        uri:
                            "https://api.adorable.io/avatars/203/edina@adorable.io.png"
                    }}
                />
                <Separator />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});