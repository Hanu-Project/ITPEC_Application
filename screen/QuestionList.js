import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import { colors, screens } from '../constants'

const QuestionList = ({ handleMoveScreen }) => {
  function goBack() {
    handleMoveScreen(screens.home)
  };
  function handleDetailTap() {
    handleMoveScreen(screens.questionDetail)
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
        </View>
        <View style={styles.testTitle}>
          <Text style={styles.testTitleText}>IT Passport Examination</Text>
          <Text style={styles.testNo}> TEST 01</Text>
        </View>
        <View style={styles.noQuesBox}>
          <View style={styles.row}>
            <View style={styles.items}>
              <TouchableOpacity
               style={styles.no}
               onPress= {handleDetailTap}
               >
                <Text style={styles.noText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>4</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>8</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>10</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>11</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>12</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>13</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>14</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>15</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>16</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>17</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>18</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>19</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.items}>
              <TouchableOpacity style={styles.no}>
                <Text style={styles.noText}>20</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.submitView}>
          <TouchableOpacity
            style={styles.submitBtn}
          // onPress={handleSubmitBtnClick}
          >
            <Text style={styles.submitBtnText}>SUBMIT</Text>
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
  testTitle: {
    marginTop: 40,
    marginBottom: 40,
    padding: 4,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  testTitleText: {
    textAlign: 'center'
  },
  testNo: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  noQuesBox: {
    paddingBottom: 90,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: colors.white,
    width: '93%',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 70
  },
  items: {
    width: '25%',
    alignItems: 'center',
    marginTop: '-10%'
  },
  no: {
    borderRadius: 50,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    width: 50,
    height: 50,
    paddingTop: 15
  },
  noText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  submitView: {
    padding: 20,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.white,
    width: '100%',
    height: 98,
    backgroundColor: colors.sweetpurple,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#8893CD',
    borderColor: '#8893CD',
    borderRadius: 50,
    borderWidth: 2,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 4,
    paddingTop: 4,
  },
  submitBtnText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 26,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
  }
})
export default QuestionList
