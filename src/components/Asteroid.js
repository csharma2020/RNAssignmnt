import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Asteroid extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.detailStyle}>
                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>Planet Details</Text>
                    <View style={styles.textstyle}>
                        <Text>
                            Name:
                        </Text>
                        <Text>
                            {this.props.navigation.getParam('astData').name}
                        </Text>
                    </View>
                    <View style={styles.textstyle}>
                        <Text>
                            Potentially Hazardous :
                    </Text>
                        <Text>
                            {this.props.navigation.getParam('astData').is_potentially_hazardous_asteroid ? "true" : "false"}
                        </Text>
                    </View>
                    <View style={styles.textstyle}>
                        <Text>
                            NASA JPL URL :
                    </Text>
                        <Text>
                            {this.props.navigation.getParam('astData').nasa_jpl_url}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    detailStyle: {
        width: '80%',
        height: 300,
        backgroundColor: 'grey',
        borderRadius: 20,
        // justifyContent:'center',
        alignItems: 'center'
    },
    textstyle: {
        marginTop: 20,
        flexDirection: 'row'
    }
})

export default Asteroid;