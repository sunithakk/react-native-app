import React,{Component} from 'react';
import {AppRegistry, Text,View,Switch} from 'react-native';
import Localstorage from '../service/LocalStorage';
import Relationaldb from '../service/Relationaldb';
export default class Demo extends Component{
    constructor(){
   super()
this.state = { username : "" };  // this is your initial state

Relationaldb._getdata().then(data=>{
    console.log("inside getadata")
    console.log(JSON.stringify(data),"****")
    console.log(JSON.parse(data),"++++")
    console.log(this,"123456789")
})
    }
    render(){
        return(
            <View>
                <Text>inside Demo.js</Text>
                <Text>{this.state.username}</Text>
            </View>
        );
    }
 }
 AppRegistry.registerComponent(AppRegistry,(Demo)=>Demo);