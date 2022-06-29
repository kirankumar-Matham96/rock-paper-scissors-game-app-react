import styled from 'styled-components'

export const PopupBgContainer = styled.div`
  align-self: flex-end;
`

export const PopupContentContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 26px;
  background-color: rgba(0, 0, 0, 0.7);
`

export const PopupRulesBgContainer = styled.div`
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupRulesContainer = styled.div`
  //   border: 1px solid green;
  background-color: #fff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomTriggerButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  background-color: #fff;
  color: #223a5f;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Bree Serif';
  border-radius: 5px;
  line-height: 1;
`
export const CustomCloseButton = styled.button`
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  font-weight: 700;
  //   background-color: gray;
`

export const PopupImage = styled.img`
  width: 100%;
  //   margin: 16px;
  padding: 16px;
`
