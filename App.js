import React,  { useState } from 'react';
import { Alert, TouchableOpacity, TextInput, View, StyleSheet, ImageBackground, Image, Text } from 'react-native';




const  App = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   




  
  const onLogin = () => {
     
    const loginInfo = {username, password};
    if (loginInfo.username === 'admin' && loginInfo.password === '123'){
      Alert.alert('Welcome!', `${loginInfo.username} + ${loginInfo.password}`);
    } else {Alert.alert('No', `${loginInfo.username} + ${loginInfo.password}`);}
   
    
    
  }

 
    return (
      <View style={styles.container} >
        <ImageBackground source={require('./images/login-bg.png')} style={styles.loginBackground}>
          <Image source={require('./images/app_logo.png')}/>
        <View style={styles.inputView}>
          <Text style={styles.loginText}>Login</Text>
        <TextInput
          value = {username}
          onChangeText={(username) => setUsername(username)}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        </View>  
        <TouchableOpacity
          title={'Login'}
          style={styles.loginButton}
         onPress={onLogin}
        ><Text style={styles.loginText}>GO!</Text></TouchableOpacity>

    </ImageBackground>
      </View>
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