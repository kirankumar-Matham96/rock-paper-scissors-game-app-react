import {
  NavContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <NavContainer>
      <Heading>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </Heading>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreContainer>
    </NavContainer>
  )
}

export default Header
