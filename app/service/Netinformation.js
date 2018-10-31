import React from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';
import Toast from 'react-native-simple-toast';
// import Offlinepage from '../components/offlinepage/Offlinepage'

var Netinformation = {
  _getnetinfo:function (){
 
  var res = false;
  NetInfo.getConnectionInfo().then((connectionInfo) => {
     
      NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);
     if(connectionInfo.type == 'none') {
     const msg = "you r offline"
     Toast.show(msg, Toast.LONG);
    //  Actions.navigate({ routeName: 'Offlinepage'})
    // this.props.navigation.dispatch(navigateAction);
     } else {
     } 
    console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  });
  function handleFirstConnectivityChange(connectionInfo) {
      console.log("++++++++++++++++++++++")
    console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    NetInfo.removeEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }
  NetInfo.addEventListener(
  
    'connectionChange',
    handleFirstConnectivityChange
  );
  
    return NetInfo;
  },

}

module.exports = Netinformation;
