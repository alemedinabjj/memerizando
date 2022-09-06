import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`

export const Button = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  color: red;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;

  &:hover {
    filter: brightness(0.6);
  }
`
