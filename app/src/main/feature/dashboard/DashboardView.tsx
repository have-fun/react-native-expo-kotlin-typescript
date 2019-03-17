import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import Kotlin from "../../kotlin";

export interface Props {}

interface State {
    name: string,
    response: string
}

export default class DashboardView extends React.Component<Props, State> {
    earth = new Kotlin.Planet('Earth');

    state: State = {
        name: "Green Lantern",
        response: ""
    };

    render() {
        const onPressSendHello = () => {
            this.setState({
                response: this.earth.receiveHello(this.state.name)
            });
        };

        return (
            <View style={{ flex: 1, alignItems: 'center',  justifyContent:  'center' }}>
                <TextInput
                    style={{ height: 40, width: 200, padding: 10, borderColor: 'green', borderWidth: 1 }}
                    onChangeText={(name: string) => this.setState({name})}
                    value={this.state.name} />

                <View style={{ marginTop: 30, marginBottom: 30 }}>
                    <Button
                        onPress={onPressSendHello}
                        color='blue'
                        title="Send Hello" />
                </View>

                <Text>{this.state.response}</Text>
            </View>
        );
    }
}
