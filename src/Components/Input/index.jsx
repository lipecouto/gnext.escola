import styled from "styled-components";

export default function Input({ type, placeholder, id, iconName }) {
  return (
    <InputDiv className="input-field">
      <StyledInput type={type} id={id}/>
      <InputLabel htmlFor={id}>{placeholder}</InputLabel>
    </InputDiv>);
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: normal;

  &:focus{
    box-shadow: none !important;
  }
`;

const InputDiv = styled.div`
  width: 100%
`

const InputLabel = styled.label`
  height: 10px;
`

