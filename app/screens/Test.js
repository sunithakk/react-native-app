import React from "react";
import {View,Text,Button} from 'react-native';
import LocalStorage from '../service/LocalStorage'
export  class Test extends React.Component {
   constructor(){
     super();
     this.state = { username : "" };  // this is your initial state
     LocalStorage.retrieveData().then(data=>{
       console.log(data,"succsess")
      console.log(this,"****")
    console.log(data.current_page,"+++")
      this.setState({
        username:data.current_page,
      });
      console.log(this.state.username,"123")
    })
   }
  static navigationOptions= {
    title: 'Test'
    };
  render() {
    return (
     <View>
     <Text>sunitha</Text>
    {/* <Text>{this.state.username}</Text> */}
    <Test>TestApp</Test>
     </View>
    );
  }
  }
  


