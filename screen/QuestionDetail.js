import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { colors, screens } from '../constants'

const QuestionDetail = ({ handleMoveScreen }) => {
  const [checked, setChecked] = React.useState();
  function goBack() {
    handleMoveScreen(screens.questionList)
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../images/login-bg.png')}
      >
        <View style={styles.navBar}>
          <TouchableOpacity
            onPress={goBack}
          >
            {/* TODO: update style */}
            <Text style={{ marginTop: 30 }}>GO BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={menu}
          >
            <Text>menu</Text>
            {/* TODO: add menu icon and update style */}
          </TouchableOpacity>
        </View>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>
            There is an electronic file that needs to be made confidential. Which of the following is the appropriate security technology to use in order to ensure the confidentiality of this file?
        </Text>
        </View>
        <TouchableOpacity style={styles.answer}>
          {/* <RadioButton
        value= "a"
        status = {checked === "a" ? 'checked' : 'unchecked'}
        onPress={() => setChecked('a') }/> */}
          <View style={styles.answerRadio}>
            <Text style={styles.answerLetter}>A</Text>
          </View>
          <Text style={styles.answerText}>Answer A</Text>

        </TouchableOpacity>
        <View style={styles.answer}>
          {/* <RadioButton
        value= "b"
        status = {checked === "b" ? 'checked' : 'unchecked'}
        onPress={() => setChecked('b') }/> */}
          <Text style={styles.answerText}>Answer B</Text>
        </View>
        <View style={styles.answer}>
          {/* <RadioButton
        value= "c"
        status = {checked === "c" ? 'checked' : 'unchecked'}
        onPress={() => setChecked('c') }/> */}
          <Text style={styles.answerText}>Answer C</Text>
        </View>
        <View style={styles.answer}>
          {/* <RadioButton
        value= "d"
        status = {checked === "d" ? 'checked' : 'unchecked'}
        onPress={() => setChecked('d') }/> */}
          <Text style={styles.answerText}>Answer D</Text>
        </View>
        <View style={styles.changeQuestionNo}>
          <View style={styles.items}>
            <TouchableOpacity style={styles.backQuesBtn}>
              <Text>{'<'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemMid}>
            <Text style={styles.quesNo}>Question: 1/20</Text>
          </View>
          <View style={styles.items}>
            <TouchableOpacity style={styles.forwardQuesBtn}>
              <Text>{'>'}</Text>
            </TouchableOpacity>
          </View>
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
  questionBox: {
    marginTop: 40,
    marginBottom: 40,
    padding: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: '93%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 18,
    textAlign: 'justify',
    color: '#000000'
  },
  answer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: '93%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  answerText: {
    flex: 1,
    textAlign: 'center',
  },
  changeQuestionNo: {
    padding: 20,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.white,
    width: '100%',
    height: 98,
    backgroundColor: colors.sweetpurple,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center'
  },
  quesNo: {
    textAlign: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20

  },
  backQuesBtn: {
    borderRadius: 50,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.white,
    width: 40,
    height: 40,
    paddingTop: 10,
    alignItems: 'center',
    textAlign: 'center'

  },
  forwardQuesBtn: {
    borderRadius: 50,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.white,
    width: 40,
    height: 40,
    paddingTop: 10,
    alignItems: 'center',
    textAlign: 'center'

  },
  items: {
    width: '10%',
    alignItems: 'center',
  },
  itemMid: {
    width: '80%',
    textAlign: 'center',
    alignItems: 'center'
  },
  answerRadio: {
    borderRadius: 50,
    backgroundColor: colors.smoke,
    borderWidth: 2,
    borderColor: colors.smoke,
    width: 30,
    height: 30,
    paddingTop: 2,
    alignItems: 'center',
    textAlign: 'center'
  },
  answerLetter: {
   display: 'flex',
   textAlign: 'center',
   alignItems: 'center'

  }
})

export default QuestionDetail

