import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert, ScrollView } from 'react-native';
import moment from "moment";

import { colors, screens, questions } from '../constants'
import { useState } from 'react';

const QuestionDetail = ({ handleMoveScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const questionArray =  questions.itpassport;
  
  







  const showDialog = () =>
    Alert.alert(
      "Do you want to finish your test now ?",
      "All recent chosen answers will not be saved",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {console.log("OK Pressed");}
        }
      ],
      { cancelable: false }
    );
  function goToHomePage() {
    
    handleMoveScreen(screens.home);
  }
  function menu() {
    handleMoveScreen(screens.questionList);

  }

  const onPrevPress = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex -1)
    console.log('prev done');
    }
  };
  const onNextPress = () => {
    if( currentIndex < questionArray.length ) {
      setCurrentIndex(currentIndex +1)
      console.log('next done');
    }
  };


 
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../images/login-bg.png')}
      >
        <View style={styles.navBar}>
          <View
            style={styles.goBackBtn}>
            <TouchableOpacity
              title='cancel'
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
          </View>
          <View style={styles.menuBtn}>
            <TouchableOpacity
              style={styles.menuSize}
              onPress={menu}>
              <Image
                style={styles.menu}
                source={require('../images/list.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      

       <ScrollView style={styles.ScrollView}>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>
          {questionArray[currentIndex].text}
          </Text>
        </View>
        <TouchableOpacity style={styles.answer}>
         
         
          <View style={styles.answerRadio}>
            <Text style={styles.answerLetter}>A</Text>
          </View>
          <Text style={styles.answerText}>
            {questionArray[currentIndex].answers[0]}
          </Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.answer}>
        
        
          <View style={styles.answerRadio}>
            <Text style={styles.answerLetter}>B</Text>
          </View>
          <Text style={styles.answerText}>
          {questionArray[currentIndex].answers[1]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answer}>
         
          <View style={styles.answerRadio}>
            <Text style={styles.answerLetter}>C</Text>
          </View>
          <Text style={styles.answerText}>
          {questionArray[currentIndex].answers[2]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answer}>
         
         
          <View style={styles.answerRadio}>
            <Text style={styles.answerLetter}>D</Text>
          </View>
          <Text style={styles.answerText}>
          {questionArray[currentIndex].answers[3]}
          </Text>
        </TouchableOpacity>
        </ScrollView>
      
        <View style={styles.changeQuestionNo}>
          <View style={styles.items}>
            <TouchableOpacity style={styles.backQuesBtn}
                onPress= { onPrevPress }
                >
            <Image
                style={styles.leftArrowImg}
                source={require('../images/left-arrow-ques.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemMid}>
            <Text style={styles.quesNo}>Question: {currentIndex+1}/20</Text>
          </View>
          <View style={styles.items}>
            <TouchableOpacity style={styles.forwardQuesBtn}
             onPress= { onNextPress }>
            <Image
                style={styles.rightArrowImg}
                source={require('../images/right-arrow-ques.png')}
               
              />
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
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    width: '93%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    color: '#000000'
  },
  answer: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
    padding: 20
  },
  changeQuestionNo: {
    padding: 20,
    paddingBottom: 60,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.white,
    width: '100%',
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
    paddingTop: 8,
    paddingRight: 4,
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
    paddingTop: 8,
    paddingLeft: 4,
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

  },

  countDownContainer: {
    marginTop: 40,
    marginBottom: 0,
    padding: 4,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: '50%',
    height: 55,
    backgroundColor: '#B4BEF1',
  },
  arlamImg: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 7,
  },
  menu: {
    width: 20,
    height: 20,
  },
  menuBtn: {
    position: 'absolute',
    top: 0,
    left: 250,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  menuSize: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  countDownContainer: {

    padding: 4,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    width: 210,
    height: 55,
    backgroundColor: '#B4BEF1',
  },
  navBar: {
    marginTop: 40,
    marginBottom: 20,
   
    flex: 1,
    flexDirection: 'row',

  },
  goBack: {
    width: 20,
    height: 20,
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
  leftArrowImg: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightArrowImg: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollView: {
    marginTop: 50,
    width: '100%',
    marginLeft: "7%"
    

  }
 
})

export default QuestionDetail

