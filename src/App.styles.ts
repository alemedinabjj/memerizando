import styled from 'styled-components';


export const Container = styled.div`

  background: linear-gradient(
    90deg,
    rgba(2,0,36,1) 0%,
    rgba(9,9,121,1) 0%,
    rgba(0,212,255,1) 100%

  );
  color: #fff;
  height: 100%;
  min-height: 100vh;

`;

export const Area = styled.div`

  margin: auto;
  max-width:980px;	
  padding: 30px 0;

`;

export const Header = styled.h1`

  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;

`;

export const ScreenWarning = styled.div`

  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }

`;

export const PhotoList = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

`;


export const UploadForm = styled.form`

  background: radial-gradient(
    circle,
    rgba(2,0,36,1) 0%,
    rgba(9,9,121,1) 0%,
    rgba(0,212,255,1) 100%

  );
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  input[type=submit] {
    display: none;
  }

  input[type=file]{
    display: none;
  }

  label {
  
    cursor: pointer;
    transition: .1s ease;

    &:hover {
      filter: brightness(.9);
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }


`; 