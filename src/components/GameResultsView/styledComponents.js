import styled from 'styled-components'
// import {
//   GameBgContainer,
//   GameOptionsContainer,
//   CustomButton,
//   Image,
// } from '../PlayGameView/styledComponents'

export const ResultsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ResultsOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultsChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const ResultsChoiceContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PersonText = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const ResultsImage = styled.img`
  width: 100%;
`

export const GameStatus = styled.p`
  font-size: 36px;
  color: #fff;
`

export const PlayAgainButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 220px;
  padding: 16px 0;
  border-radius: 10px;
  background-color: #fff;
  color: #223a5f;
  font-size: 18px;
  font-family: 'Bree Serif';
  font-weight: 700;
`
