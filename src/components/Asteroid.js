import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Asteroid extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.detailStyle}>
                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>Asteroid Details</Text>
                    <View style={styles.textstyle}>
                        <Text style={[styles.txtActualStyle, { marginLeft: 20 }]}>
                            Name
                        </Text>
                        <Text style={styles.txtActualStyle}>
                            {this.props.navigation.getParam('astData').name}
                        </Text>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={[styles.txtActualStyle, { marginLeft: 20 }]}>
                            Potentially Hazardous
                    </Text>
                        <Text style={styles.txtActualStyle}>
                            {this.props.navigation.getParam('astData').is_potentially_hazardous_asteroid ? "true" : "false"}
                        </Text>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={[styles.txtActualStyle, { marginLeft: 20 }]}>
                            NASA JPL URL
                    </Text>
                        <Text style={styles.txtActualStyle}> 
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent:'flex-end',
        // alignItems:'stretch'
    },
    txtActualStyle: { flex: 1 }

})

export default Asteroid;