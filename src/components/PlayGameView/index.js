import {
  GameBgContainer,
  GameOptionsContainer,
  CustomButton,
  Image,
} from './styledComponents'

const PlayGameView = props => {
  const {choicesList, onSelectingChoice} = props

  const onClickOptionButton = id => {
    onSelectingChoice(id)
  }

  return (
    <GameBgContainer>
      <GameOptionsContainer>
        {choicesList.map(eachChoice => (
          <CustomButton
            type="button"
            data-testid={eachChoice.testId}
            key={eachChoice.id}
            onClick={() => onClickOptionButton(eachChoice.id)}
          >
            <Image src={eachChoice.imageUrl} alt={eachChoice.id} />
          </CustomButton>
        ))}
      </GameOptionsContainer>
    </GameBgContainer>
  )
}

export default PlayGameView
