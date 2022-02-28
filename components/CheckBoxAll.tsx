import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import CheckBox from "./CheckBox";

class CheckBoxAll extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View>
                <CheckBox label='Select ALL' checked={false}></CheckBox>
                <CheckBox label='Checkbox 1' checked={false}></CheckBox>
                <CheckBox label='Checkbox 2' checked={false}></CheckBox>
                <CheckBox label='Checkbox 3' checked={false}></CheckBox>
                <CheckBox label='Checkbox 4' checked={false}></CheckBox>
                <CheckBox label='Checkbox 5' checked={false}></CheckBox>
            </View>
        )
    }
}

export default CheckBoxAll;