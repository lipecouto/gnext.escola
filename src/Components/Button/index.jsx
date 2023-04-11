import styled from "styled-components";
import { Button as Btn, Icon}  from "react-materialize";

export function Button(props) {
  return <StyledButton onClick={props.onClick} className="waves-light waves-effect" type="submit">{props.content}</StyledButton>;
}

export function ButtonCancel( props ) {
  return <StyledButtonCancel className="waves-light waves-effect" type="buttom" onClick={props.onClick}>{props.content} </StyledButtonCancel>;
}

export function RMButton ( props ){
  return <Btn id={props.id} onClick={props.onClick} floating className={props.className} icon={<Icon>add</Icon>} node="button" waves="light" tooltip={props.tooltip}>{props.content}</Btn> 
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