import styled from 'styled-components'

export const Heading = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: 400;
`

export const Score = styled.p`
  margin: 0;
  color: #223a5f;
  font-size: 55px;
  font-family: 'Roboto';
  font-weight: 700;
`

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fff;
  background-color: transparent;
  font-family: 'Bree Serif';
  padding: 16px 26px;
  border-radius: 16px;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  height: 130px;
  min-width: 130px;
  border-radius: 14px;
`

export const ScoreText = styled.p`
  margin: 0;
  color: #223a5f;
  font-size: 28px;
  font-weight: 700;
`
