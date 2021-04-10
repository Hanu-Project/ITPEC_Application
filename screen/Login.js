import React,  { useState } from 'react';
import {
  Alert,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Dimensions
} from 'react-native';

import { accounts, colors, screens } from '../constants'

const  Login = ({ handleMoveScreen }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    const account = accounts.find(function(account) {
      return account.username === username
    })

    if (account && account.password === password) {
      handleMoveScreen(screens.home)
    } else {
      Alert.alert('Login failed', 'Wrong username or password')
    }
  }

  function handleUsernameInput(text) {
    setUsername(text)
  }

  function handlePasswordInput(text) {
    setPassword(text)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../images/login-bg.png')}
      >
        <Image
          style={styles.logo}
          source={require('../images/app_logo.png')}
        />

        <View style={styles.form}>
          <Text style={styles.formTitle}>
            Login
          </Text>

          <TextInput
            style={styles.formInput}
            placeholder='Username'
            onChangeText={handleUsernameInput}
          />

          <TextInput
            style={styles.formInput}
            placeholder='Password'
            onChangeText={handlePasswordInput}
          />
        </View>

        <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleLogin}
          >
            <Text style={styles.submitBtnText}>Go!</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  background:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  logo:{
    width: 100,
    height: 100
  },
  form:{
    paddingBottom: 105,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.white,
    width: '93%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  formTitle:{
    fontSize: 35,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 18,
    textAlign: 'center'
  },
  formInput:{
    marginTop: 75,
    marginRight: 50,
    marginLeft: 50,
    borderBottomColor: colors.white,
    borderBottomWidth: 1
  },
  submitBtn:{
    display: 'flex',
    alignItems: 'center',
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 2,
    paddingLeft: 37,
    paddingRight: 37,
    paddingBottom: 8,
    paddingTop: 8,
    width: 252
  },
  submitBtnText:{
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center'
  }
});

export default Login
