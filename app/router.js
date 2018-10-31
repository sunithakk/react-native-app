import React from 'react';
import { StackNavigator } from 'react-navigation';
import {offlinepage} from '../app/screens/offlinepage'
import {animation} from '../app/component/animation'

export const Root = StackNavigator({
    offline: {
        screen: offlinepage,
        navigationOptions: { header: null }
    },
    ani:{
        screen:animation,
        navigationOptions:{header:null}
    }
    
});

