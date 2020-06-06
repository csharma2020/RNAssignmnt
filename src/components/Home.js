import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,BackHandler } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { searchAstAction,resetAstAction } from '../actions/index';


class Home extends Component {

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener("didFocus", () => {
            BackHandler.addEventListener(
                "hardwareBackPress",
                this.resetData,
            );
        });
    }
    resetData=()=>{
        //alert('alerted')
        this.setState({
            enterAstId: '',
            searchDisabled: true
        });
        this.props.resetAstData()
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    constructor(props) {
        super(props);
        this.state = {
            enterAstId: '',
            searchDisabled: true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtStyle}>Asteroid Details</Text>
                <TextInput
                    style={styles.inpStyle}
                    placeholder="Enter Asteroid ID"
                    underlineColorAndroid='transparent'
                    value={this.state.enterAstId}
                    onChangeText={(text) => {
                        let searchD = text != '' ? false : true;
                        this.setState({
                            enterAstId: text,
                            searchDisabled: searchD
                        })
                    }
                    }
                />
                <TouchableOpacity style={styles.toStyle} disabled={this.state.searchDisabled} onPress={() => this.props.searchAstData(this.state.enterAstId)}>
                    <View style={styles.btnStyle}>
                        <Text>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toStyle} onPress={()=>this.randomAsteroidSearch()}>
                    <View style={styles.btnStyle}>
                        <Text>
                            Random Asteroid
                        </Text>
                    </View>
                </TouchableOpacity>
                {this.props.searchError != "" && <View><Text style={styles.errorStyle}>{this.props.searchError}</Text></View>}
                <Spinner
                    visible={this.props.searching}
                    textContent={'Searching asteroid data...'}
                    textStyle={styles.spinnerTextStyle}
                />
                {this.props.searchCompleted && !this.props.searching && this.props.searchError == "" && this.props.navigation.navigate('Asteroid', {
                    astData: this.props.searchResult
                })}
            </View>
        )
    }

    randomAsteroidSearch=()=>{
        let randomId=Math.floor(Math.random()*(1+4000000-3000000))+3000000;
        this.props.searchAstData(randomId)
        // alert('search random'+randomId)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    inpStyle: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        backgroundColor: 'white',
        height: 50
    },
    btnStyle: {
        backgroundColor: 'grey',
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '50%'
    },
    toStyle: {
        width: '100%',
        alignItems: 'center'
        // flex:1
    },
    txtStyle: {
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    spinnerTextStyle: {
        color: '#fff'
    },
    errorStyle: {
        color: 'red',
        marginTop: 10
    }
})

const mapStateToProps = (state) => {
    return {
        searchError: state.searchError,
        searchResult: state.searchResult,
        searching: state.searching,
        searchCompleted: state.searchCompleted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchAstData: (id) => {
            dispatch(searchAstAction(id))
        },
        resetAstData:()=>{
            dispatch(resetAstAction());
        }
    }
}


export default HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);