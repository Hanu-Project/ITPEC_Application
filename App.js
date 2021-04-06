import React,  { useState } from 'react';
import {StyleSheet } from 'react-native';
import { Homepage } from './screen/Homepage.js';

import Login from './screen/Login';



const  App = () => {
  const [login,setLogin] = useState(false);
  return (
  <>
    {login?<Login login={login} setLogin={setLogin}></Login>:<Homepage></Homepage>}
  </>
    
  );
  
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1'
   
    
    
  },
  inputView : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '80%',
    height: '40%',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,

  }
  ,
  input: {
    
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    width: '70%',
    height: 60,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: 'rgba(255, 255, 255, 0)',
    borderBottomColor: 'white',
  
    borderWidth: 2,
    marginBottom: 10,
   
    
  },
  loginBackground: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    // justifyContent: 'center'
  },

  loginButton: {
    color: 'blue',
    width: "60%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor:'rgba(255, 255, 255, 0.4)',
  },

  loginText: {
     
    fontSize: 18,
    color: '#614AD3',
    fontWeight: 'bold'
  }


 
});

export default App;