
import * as React from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, Alert } from 'react-native'

import { colors, screens } from '../constants'

const Result = ({ handleMoveScreen }) => {
  const showDialog = () =>
    Alert.alert(
      "Do you want to go back Homepage ?",
      "All recent chosen answers will not be saved",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => { console.log("OK Pressed") }
        }
      ],
      { cancelable: false }
    );
  function goBack() {
    handleMoveScreen(screens.questionDetail)
  };
  function viewResultList() {
    handleMoveScreen(screens.questionList)
  };
 
  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../images/login-bg.png')}
        style={styles.background}
      >
        <View styles={styles.navBar}>
          <View
            style={styles.goBackBtn}>
            <TouchableOpacity
              title='cancle'
              style={styles.goBackSize}
              onPress={showDialog}>
              <Image
                style={styles.goBack}
                source={require('../images/error.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.countDownContainer}>
            <Image
              style={styles.arlamImg}
              source={require('../images/alarm-clock.png')}
            />
            <Text style={styles.countdownText}>Time up!</Text>
          </View>
        </View>
        <View style={styles.testTitle}>
          <Text style={styles.testTitleText}>IT Passport Examination</Text>
          <Text style={styles.testNo}> TEST 01</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.resultBoxTitle}>Your Result:</Text>
          <Text style={styles.resultScoreText}>2/20</Text>
          <Text style={styles.resultScoreText}>10%</Text>
          <View style={styles.timeLineResult}>
            <Text style={styles.timeTitle}>Time: </Text>
            <Text style={styles.timeResult}>10'20s</Text>
          </View>
          <Text style={styles.resultComment}>Practice more to improve it!</Text>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity 
          onPress={ viewResultList }
          style={styles.viewResultBtn}>
            <Text style={styles.viewResultBtnText}>VIEW RESULT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tryAgainBtn}
            onPress={goBack}
          >
            <Text style={styles.tryAgainBtnText}>TRY AGAIN</Text>
          </TouchableOpacity>
        </View>
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
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
  },
  goBack: {
    width: 20,
    height: 20,
    marginTop: 80
  },
  goBackBtn: {
    position: 'absolute',
    top: 0,
    left: -90,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  goBackSize: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,

  },
  countDownContainer: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: 210,
    height: 55,
    backgroundColor: '#F86C6C',
    marginTop: 40
  },
  arlamImg: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 7,
  },
  testTitle: {
    marginTop: 30,
    marginBottom: 30,
    padding: 4,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  testTitleText: {
    textAlign: 'center',
  },
  testNo: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  resultBox: {
    marginTop: 20,
    marginBottom: 20,
    padding: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    justifyContent: 'space-around'
  },
  timeLineResult: {
    flexDirection: 'row'
  },
  countdownText: {
    marginTop: 10,
    textAlign: 'center',
    paddingLeft: 40,
  },
  resultBoxTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.primary 
  },
  resultScoreText: {
    fontSize: 24,
    fontWeight: '700'
  },
  timeResult: {
    fontSize: 24,
    fontWeight: '700'
  },
  resultComment: {
    fontSize: 20,
  },
  timeTitle: {
    fontSize: 20,
  },
  btnBox:{
    display: 'flex',
    alignItems: 'center',
    borderColor: colors.white,
    flexDirection: 'row',
    marginBottom: 20,
  },
  tryAgainBtn:{
    display: 'flex',
    alignItems: 'center',
    borderColor: colors.white,
    borderRadius: 20,
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    paddingTop: 8,
    width: '40%',
    backgroundColor: '#75D2E5'
  },
  tryAgainBtnText:{
    color: colors.smoke,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  viewResultBtn:{
    display: 'flex',
    alignItems: 'center',
    borderColor: '#75D2E5',
    borderRadius: 20,
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    paddingTop: 8,
    width: '40%', 
    marginRight: '5%',
    backgroundColor: colors.white
  },
  viewResultBtnText:{
    color: '#75D2E5',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default Result
