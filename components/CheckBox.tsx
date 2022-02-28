import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class CheckBox extends React.Component<any> {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked,
        }
        
    }

    render(){
        return (
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: this.state.checked ? "skyblue" : "transparent",
                  borderWidth: 0.5,
                }}
                onPress={() => {
                    this.state.checked ? this.setState({checked: false}) : this.setState({checked: true});
                }}
              >
                {this.state.checked && (
                  <Ionicons name="md-checkmark" size={15} color="white" />
                )}
              </TouchableOpacity>
              <Text style={{ marginLeft: 5 }}>{this.props.label}</Text>
            </View>
          );
    }
} 

export default CheckBox;