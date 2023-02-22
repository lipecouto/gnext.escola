import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton className="waves-light waves-effect">{content}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: #44cd6f;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 3rem;
  border: none;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #44cd6f;
  }
  &:focus{
    background-color: #44cd6f;
  }
`;