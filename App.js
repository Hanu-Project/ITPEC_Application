import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { screens } from './constants'
import Home from './screen/Home.js'
import Welcome from './screen/Welcome'
import Login from './screen/Login'
import QuestionList from './screen/QuestionList'
import QuestionDetail from './screen/QuestionDetail'
import Result from './screen/Result'
import ResultDetail from './screen/ResultDetail'


const  App = () => {
  const [currentScreen, setCurrentScreen] = useState(screens.welcome)
  const [currentAccount, setCurrentAccount] = useState(null)

  function handleMoveScreen(screen, options) {
    setCurrentScreen(screen)
    console.log(options)
  }


  function renderScreen() {
    switch (currentScreen) {
      case screens.welcome:
        return <Welcome handleMoveScreen={handleMoveScreen} />
      case screens.login:
        return (
          <Login
            handleMoveScreen={handleMoveScreen}
            currentAccount={currentAccount}
            setCurrentAccount={setCurrentAccount}
          />
        )
      case screens.home:
        return <Home handleMoveScreen={handleMoveScreen} />
      case screens.questionList:
        return <QuestionList handleMoveScreen={handleMoveScreen} />
      case screens.questionDetail:
        return <QuestionDetail handleMoveScreen={handleMoveScreen} />
      case screens.result:
        return <Result handleMoveScreen={handleMoveScreen} />
      case screens.resultDetail:
        return <ResultDetail handleMoveScreen={handleMoveScreen} />
    }
  }

  return (
    <View>
      {renderScreen()}
    </View>
  )
}

export default App;