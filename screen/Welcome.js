import React, { useState } from 'react';
import { Text, StyleSheet, Image, ImageBackground, View, TouchableOpacity } from 'react-native';

import { colors, screens } from '../constants';

function Welcome({ handleMoveScreen }) {
  function handleStartBtnClick() {
    handleMoveScreen(screens.login)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../images/login-bg.png')}
      >
        <View style={styles.header}>
          <Text style={styles.heading}>Welcome!</Text>
          <Text style={styles.info}>ITPEC Mockup Test</Text>
        </View>

        <Image
          style={styles.logo}
          source={require('../images/app_logo.png')}
        />

        <TouchableOpacity
          style={styles.startBtn}
          onPress={handleStartBtnClick}
        >
          <Text style={styles.startBtnText}>Let’s go</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  background: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
  header: {
  },
  heading: {
    marginLeft: -105,
    fontSize: 45,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center'
  },
  info: {
    color: colors.primary,
    fontSize: 30,
    marginLeft: 40
  },
  logo: {
    width: 192,
    height: 192
  },
  startBtnText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  startBtn: {
    display: 'flex',
    alignItems: 'center',
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 2,
    paddingLeft: 37,
    paddingRight: 37,
    paddingBottom: 8,
    paddingTop: 8,
    // height: 62,
    width: 252,
    // textAlign: 'center'
  }
})

export default Welcome
