import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import {About, Home, Login} from './src/screens/';

import {Actions, Stack, Scene, Router} from 'react-native-router-flux';


export default App = () => (
    <Router>
         <Stack key='root'>
            <Scene key='login' title={'Login'} component={Login} />
            <Scene key='about' title={'About'}  component={About} />
            <Scene key='home' direction={'rightToLeft'} title={'Home'} component={Home} />
        </Stack>
    </Router>
) 
