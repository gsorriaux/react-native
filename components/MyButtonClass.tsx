import React from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
    label: string,
    onPress: () => void
}

class MyButtonClass extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props)
    }

    render(){
        const {label, onPress} = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}>
                    <Text>{label}</Text>
                </TouchableOpacity>
        )
    }
}

export default MyButtonClass;