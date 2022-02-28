import React from "react";
import {Text} from "react-native";

type HelloProps = {
    firstname: string,
    age?: string,
    city?: string
}

class HelloClass extends React.Component<HelloProps> {
    constructor(props: HelloProps) {
        super(props)
    }

    render(){
        const {firstname, age, city} = this.props;
        return (
            <Text>
                Je suis {firstname}, j'ai {age} ans et je suis né à {city}.
                Ce paragraphe est ma description mais n'a pas été passé par les props.
            </Text>
        )
    }
}

export default HelloClass;