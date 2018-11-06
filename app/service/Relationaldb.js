import React from 'react';
import { AsyncStorage, Text, View, TextInput} from 'react-native'
var SQLite = require('react-native-sqlite-storage')

var db=SQLite.openDatabase({name :'test.db', createFromLocation :'~test.db'},this.openCB,this.errorCB)

  
const Relationaldb = {

  tablecreation:async()=>{
    console.log("testcreation")
    db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS user (username text, email text, password text)');

  });
  },
 _getdata : async () => {
    console.log("testinglocalstorage")
    db.transaction((tx) => {
        console.log(tx)
        console.log("test", tx)
        var sql = 'SELECT * FROM user' ;
      console.log(sql)
        tx.executeSql(sql,[],(tx,results) =>{
          console.log(tx,"tx")
          console.log(results,"results")
          console.log(results.rows,"result.row")
          console.log(JSON.stringify(results.rows.item),"-------------->");
          var len = results.rows.length;
          console.log(len,"len")
          if(len == 0){
            console.log("inside if condition: length is zero")
          }else{
            console.log("inside else condition")
            for(let i=0;i< len;i++){
                let row=results.rows.item(i)
                console.log('row number '+ i);
                console.log(`name : ${row.username} , Password: ${row.password} `)
            }
            console.log(JSON.stringify(results));
            var row = results.rows.item(0);
            console.log(row.password);
            console.log(row,"xyz")
            return row
          }
        });
        
      })
      return row
  },  
  _insert:async(data)=>{
    console.log(data,"inside")
    console.log(data.email,"email")
    console.log(data.username,"username")
    console.log(data.loginsource,"loginsource")
   
    db.transaction((tx) => {
      console.log(tx," ")
      tx.executeSql("INSERT INTO user (`username`, `email`, `password`) VALUES (?,?,?)", 
      ['suni','bsvjsa',12345678], function(tx, res) { 
         console.log('inside insert 123')
        console.log(tx);
        console.log(res);
    });
   
 },
 function(e) {
console.log(e, 'inside error----');
 });
}  ,


}
Relationaldb.tablecreation();


module.exports = Relationaldb;
