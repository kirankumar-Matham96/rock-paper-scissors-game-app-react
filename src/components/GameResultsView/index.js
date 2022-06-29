import {
  ResultsBgContainer,
  ResultsOptionsContainer,
  ResultsChoiceContainer,
  PersonText,
  ResultsImage,
  GameStatus,
  PlayAgainButton,
  ResultsChoicesContainer,
} from './styledComponents'
// import './index.css'

const GameResultsView = props => {
  const {gameResults, choicesList, onReplay} = props
  const {playerChoice, opponentChoice, playerResults} = gameResults

  //   console.log({playerChoice, opponentChoice})

  const playerResultChoice = choicesList.filter(
    eachOption => eachOption.id === playerChoice,
  )

  //   console.log('playerResultChoice: ', playerResultChoice[0])

  const opponentResultChoice = choicesList.filter(
    eachOption => eachOption.id === opponentChoice,
  )
  //   console.log('opponentResultChoice: ', opponentResultChoice[0])

  const onClickPlayAgain = () => {
    onReplay()
  }

  return (
    <ResultsBgContainer>
      <ResultsOptionsContainer>
        <ResultsChoicesContainer>
          <ResultsChoiceContainer>
            <PersonText>YOU</PersonText>
            <ResultsImage
              src={playerResultChoice[0].imageUrl}
              alt="your choice"
            />
          </ResultsChoiceContainer>
          <ResultsChoiceContainer>
            <PersonText>OPPONENT</PersonText>
            <ResultsImage
              src={opponentResultChoice[0].imageUrl}
              alt="opponent choice"
            />
          </ResultsChoiceContainer>
        </ResultsChoicesContainer>
        <GameStatus>{playerResults}</GameStatus>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultsOptionsContainer>
    </ResultsBgContainer>
  )
}

export default GameResultsView
