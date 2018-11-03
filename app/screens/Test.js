import React from "react";

import {View,Text,Button} from 'react-native';

import LocalStorage from '../service/LocalStorage'
export  class Test extends React.Component {
  constructor(props){
    super(props)
    LocalStorage.retrieveData().then(data=>{
        console.log(data,"success")
    })
  }
  static navigationOptions= {
    title: 'Test'
    };
  render() {
    return (
     <View>
    <Text>sunitha</Text>
     </View>
     
    );
  }
  
  
  }
  


