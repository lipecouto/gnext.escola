import styled from "styled-components";

export function Button({ content }) {
  return <StyledButton className="waves-light waves-effect" type="submit">{content}</StyledButton>;
}

export function ButtonCancel({ content }) {
  return <StyledButtonCancel className="waves-light waves-effect" type="buttom">{content}</StyledButtonCancel>;
}


export const ButtomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  aling-content: center;
`

const StyledButton = styled.button`
  background-color: #445ecd;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 3rem;
  border: none;
  color: white;
  cursor: pointer;
  
  transition: all 1s;
  &:hover{
    background-color: #44cd6f;
  }

  &:focus{
    background-color: #44cd6f;
  }
`

const StyledButtonCancel = styled.button`
  background-color: #cd4444;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 3rem;
  border: none;
  color: white;
  cursor: pointer;
  
  transition: all 1s;
  &:hover{
    background-color: #6a1313;
  }

  &:focus{
    background-color: #6a1313;
  }


`;