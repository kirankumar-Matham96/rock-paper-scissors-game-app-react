import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import {
  PopupBgContainer,
  PopupContentContainer,
  PopupRulesBgContainer,
  PopupRulesContainer,
  PopupImage,
  CustomTriggerButton,
  CustomCloseButton,
} from './styledComponents'

const RulesButtonPopup = () => (
  <PopupBgContainer>
    <Popup
      trigger={<CustomTriggerButton type="button">Rules</CustomTriggerButton>}
      model
      position="center center"
    >
      {close => (
        <PopupContentContainer>
          <PopupRulesBgContainer>
            <PopupRulesContainer>
              <CustomCloseButton
                type="button"
                onClick={() => {
                  close()
                }}
              >
                <RiCloseLine />
              </CustomCloseButton>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupRulesContainer>
          </PopupRulesBgContainer>
        </PopupContentContainer>
      )}
    </Popup>
  </PopupBgContainer>
)

export default RulesButtonPopup
