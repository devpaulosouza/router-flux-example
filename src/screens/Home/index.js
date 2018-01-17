import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

export default class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight 
                    style={styles.button}
                    overlayColor={'#666'}
                    onPress={()=>Actions.about()}
                >
                    <Text style={styles.textButton}>
                        About
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

