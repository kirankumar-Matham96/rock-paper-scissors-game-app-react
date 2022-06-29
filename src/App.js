import {Component} from 'react'

import Header from './components/Header'

import PlayGameView from './components/PlayGameView'

import GameResultsView from './components/GameResultsView'

import RulesButtonPopup from './components/RulesButtonPopup'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class App extends Component {
  state = {
    playerChoice: '',
    opponentChoice: '',
    isGamePlayed: false,
    playerResults: '',
    score: 0,
  }

  calculateResults = () => {
    const {playerChoice, opponentChoice} = this.state

    if (playerChoice === opponentChoice) {
      //   console.log('draw')
      this.setState({playerResults: 'IT IS DRAW', isGamePlayed: true})
    } else if (
      (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (playerChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER')
    ) {
      //   console.log('won')
      this.setState(prevState => ({
        playerResults: 'YOU WON',
        isGamePlayed: true,
        score: prevState.score + 1,
      }))
    } else {
      //   console.log('loss')

      this.setState(prevState => ({
        playerResults: 'YOU LOSE',
        isGamePlayed: true,
        score: prevState.score > 0 ? prevState.score - 1 : 0,
      }))
    }
  }

  opponentChoiceSelection = () => {
    const opponentChoice = Math.floor(Math.random() * 3)
    switch (opponentChoice) {
      case 0:
        return 'ROCK'
      case 1:
        return 'SCISSORS'
      case 2:
        return 'PAPER'
      default:
        return ''
    }
  }

  onSelectingChoice = id => {
    // console.log({id})
    const opponentChoice = this.opponentChoiceSelection()
    this.setState({playerChoice: id, opponentChoice}, this.calculateResults)
  }

  onReplay = () => {
    this.setState({
      playerChoice: '',
      opponentChoice: '',
      isGamePlayed: false,
      playerResults: '',
    })
  }

  render() {
    const {
      playerChoice,
      opponentChoice,
      isGamePlayed,
      playerResults,
      score,
    } = this.state
    const gameResults = {playerChoice, opponentChoice, playerResults}

    return (
      <div className="bg-container">
        <Header score={score} />
        {!isGamePlayed ? (
          <PlayGameView
            choicesList={choicesList}
            onSelectingChoice={this.onSelectingChoice}
          />
        ) : (
          <GameResultsView
            gameResults={gameResults}
            choicesList={choicesList}
            onReplay={this.onReplay}
          />
        )}
        <RulesButtonPopup />
      </div>
    )
  }
}
export default App
