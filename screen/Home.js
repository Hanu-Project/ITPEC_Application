import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

import { colors, screens, exams } from '../constants'

const Home = ({ handleMoveScreen }) => {
  let [fontsLoaded] = useFonts({
        
    'Poppins-Bold' : require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-BLack' : require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium' : require('../assets/fonts/Poppins-Medium.ttf')
});

  function handleTakeTest(exam) {
    handleMoveScreen(screens.questionDetail, { exam: exam })
  }

  function goBack() {
    handleMoveScreen(screens.welcome)
  }


  if (!fontsLoaded) {
    return <AppLoading />;
} else {


  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../images/login-bg.png')}
      >
        <View style={styles.goBackBtn}>
          <TouchableOpacity 
           style={styles.goBackSize}
          onPress={goBack}>
            <Image
              style={styles.goBack}
              source={require('../images/arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headingForm}>
          <Image
            style={styles.logo}
            source={require('../images/app_logo.png')}
          />
          <View style={styles.headingFormText}>
            <Text style={styles.heading}>ITPECT</Text>
            <Text style={styles.infoLine1}>Information Technology</Text>
            <Text style={styles.infoLine2}>Professional Examination Council</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => handleTakeTest(exams.fundamentalInformationTechnologyEnginner)}
          style={styles.boxTest}
        >
          <View>
            <Text style={styles.boxFormText}>Fundamental Information</Text>
            <Text style={styles.boxFormText}>Technology Engineer</Text>
            <Text style={styles.boxFormText}>Passport Examnination</Text>
          </View>
          <Text style={styles.boxFormNoQuestion}>20 Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTakeTest(exams.informationTechnologyPassport)}
          style={styles.boxTest}
        >
          <View>
            <Text style={styles.boxFormText}>Information Technology</Text>
            <Text style={styles.boxFormText}>Passport Examnination</Text>
          </View>
          <Text style={styles.boxFormNoQuestion}>20 Questions</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
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
  logo: {
    width: 79,
    height: 79,
    marginTop: 61
  },
  headingForm: {
    marginTop: 61,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  headingFormText: {
    marginTop: 55,
    marginLeft: 5,
    marginBottom: 45
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'red'
  },
  infoLine1: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.primary,
    
  },
  infoLine2: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.primary
  },
  boxTest: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingLeft: 54,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.white,
    width: '90%',
    height: 133,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 15,
    
  },
  boxFormText: {
    fontFamily: 'Poppins-Regular'
  },
  boxFormNoQuestion: {
    marginBottom: 20,
    marginRight: 25,
    textAlign: 'right',
    fontSize: 10
  },
  goBack: {
    width: 20,
    height: 20,
  },
  goBackBtn: {
    position: 'absolute',
    top: 70,
    left: 34,
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
  }
})

export default Home
