import React from "react";

import {View,Text,Button} from 'react-native';
import Netinformation from '../service/Netinformation'
import LocalStorage from '../service/LocalStorage'
export  class offlinepage extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions= {
    title: 'offlinepage'
    };
  render() {
    return (
     <View>
     <Button
 onPress =  { () => this._test()} 
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
     </View>
     
    );
  }
  _test(){
    console.log("inside test function")
    console.log(Netinformation._getnetinfo())
    if(Netinformation._getnetinfo()){
      alert("You r offline please turn on mobile data/ wifi" )
    }
const url = 'http://chatbot.creatise.in/claprslap_api/polls'
    fetch(url, {
      method: 'GET', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }) 
    .then((response) => response.text())
    .then((responseText) => {
      console.log('testing-----');
       console.log(JSON.parse(responseText),"sunitha");
       var result = JSON.parse(responseText);
       if (result['responseStatus']=='failure'){
         msg =result['responseData'].message;
        alert(msg);
       }else {
        profiledata = result['responseData'].data;
        LocalStorage._storeData(profiledata)
        this.props.navigation.navigate('test');
       }
      
    })
    .catch((error) => {
       console.log("reset client error-------",error);
    });
   
  }
  
  }
  


