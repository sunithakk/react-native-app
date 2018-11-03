import React from 'react';
import { AsyncStorage, Text, View, TextInput} from 'react-native'

const LocalStorage = {


 _storeData : async (data) => {
    console.log(data)
    console.log('ssssssssssssssssss')
    try {
      await AsyncStorage.setItem('myKeySpl',JSON.stringify(data));
      console.log('gtgtgtgtgtgtgtgt')
    } catch (error) {
     console.log('error while setting data')
    }
    console.log(data,"after local setting")
  },
  retrieveData : async (value) => {
     console.log("ttttttttttttttttttt")
    try {
      console.log('tryinh yo hry')
      const value = await AsyncStorage.getItem('myKeySpl');
     
      console.log("data is retrived")
      console.log(value)
      if (value !== null) {
        console.log('data is here');
        console.log(value);
       
        return JSON.parse(value);
      
      }else{
        return false;
      }
     } catch (error) {
      return false; 
     }
  },
  _cleardata : async (value) => {
   console.log("inside clear localstorage")
 }
    
}


module.exports = LocalStorage;
