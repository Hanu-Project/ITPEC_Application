import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, ImageBackground, Image } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
     
    const { username, password } = this.state;
   
    Alert.alert('No', `${username} + ${password}`);
    
  }

  render() {
    return (
      <View style={styles.container} >
        <ImageBackground source={require('./images/login-bg.png')} style={styles.loginBackground}>
          <Image source={require('./images/app_logo.png')}/>
        <View>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        </View>  
        <Button
          title={'Login'}
          style={styles.loginButton}
          onPress={this.onLogin.bind(this)}
        />

    </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1'
   
    
    
  },
  input: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    width: 350,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 30,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1,
    
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
    backgroundColor: '#e1e1e1',
    width: 100,
    height: 60

  }


 
});
