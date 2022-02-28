import React from "react";
import {TouchableOpacity, Text} from "react-native";

type ButtonProps = {
    label: string,
    onPress: ()=>void
}

const Button:React.FC<ButtonProps> = (props) => {
    const {onPress, label} = props;
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button;