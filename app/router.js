import React from 'react';
import { StackNavigator } from 'react-navigation';
import {offlinepage} from '../app/screens/offlinepage'
import {animation} from '../app/component/animation'
import {Test} from '../app/screens/Test'
export const Root = StackNavigator({
    offline: {
        screen: offlinepage,
        navigationOptions: { header: null }
    },
    ani:{
        screen:animation,
        navigationOptions:{header:null}
    },
    test:{
        screen:Test,
        navigationOptions:{header:null}
    }
    
});

