import React from "react";

import {View,Text,Button} from 'react-native';
import Netinformation from '../service/Netinformation'
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
   
  }
  
  }
  


