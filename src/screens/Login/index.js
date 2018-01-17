import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

export default class Login extends Component{
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight 
                    style={styles.button}
                    overlayColor={'#666'}
                    onPress={()=>Actions.home()}
                >
                    <Text style={styles.textButton}>
                        Sign in
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

