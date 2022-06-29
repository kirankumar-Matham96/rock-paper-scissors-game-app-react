import styled from 'styled-components'

export const GameBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`

export const GameOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const CustomButton = styled.button`
  width: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const Image = styled.img`
  width: 100%;
`
