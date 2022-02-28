import react from "react";
import { Text, View, StyleSheet } from 'react-native';

type HelloProps = {
    firstname: string,
    age?: string,
    city?: string,
}
const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    quote: {
        color: 'gray',
        borderLeftWidth: 3,
        paddingLeft: 10,
        borderLeftColor: 'gray'
    },
    flexCentered: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexAround: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    blue1: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 20,
        backgroundColor: '#4A91FF'
    },
    blue2: {
        borderWidth: 2,
        borderColor: 'black',
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: '#33AAD0'
    },
    blue3: {
        borderWidth: 2,
        borderColor: 'black',
        paddingTop: 100,
        paddingBottom: 60,
        backgroundColor: '#69BAD4'
    },
})

const Hello:React.FC<HelloProps> = (props) => {
    const {firstname, age, city, children} = props;


    return (
        <View>
            <View style={styles.blue1}>
                <View style={styles.flexCentered}>
                    <Text style={styles.bold}>
                        Je suis
                    </Text>
                    <Text>
                        {firstname}
                    </Text>
                </View>
                <View style={styles.flexAround}>
                    <Text style={styles.bold}>
                        j'ai
                    </Text>
                    <Text>
                        {age} ans
                    </Text>
                </View>
            </View>
            <View style={styles.blue2}>
                <View style={styles.flexBetween}>
                    <Text style={styles.bold}>
                        et je suis né à
                    </Text>
                    <Text>
                        {city}
                    </Text>
                </View>
            </View>
            <View style={styles.blue3}>
                <Text style={styles.bold}>
                    Description
                </Text>
                <Text style={styles.quote}>
                    Ce paragraphe est ma description mais n'a pas été passé par les props.
                </Text>
            </View>
        </View>
    )
}

export default Hello;