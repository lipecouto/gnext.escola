import styled from "styled-components";
import { Button, Card, Row, Col } from 'react-materialize';

export default function Avatar({ content }) {
  return<> <AvatarContainer>
          
        </AvatarContainer>
        <FloatButtom 
                className="red"
                icon
                floating
                large>
                
              </FloatButtom>
        </>;
}
const FloatButtom = styled(Button)`
    position: relative;

`

const AvatarContainer = styled.div`
    background-color: #44cd6f;
    border-radius: 50%;
    width: 300px;
    height: 300px;

    @media only screen and (min-width: 360px) {
        width: 300px;
        height: 300px;
        align-self: center;
      }
    
    @media only screen and (min-width: 411px) {
        width: 300px;
        height: 300px;
        align-self: center;
    }
    
    @media only screen and (min-width: 530px) {
        width: 300px;
        height: 300px;
      }

    @media only screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @media only screen and (min-width: 1024px) {
        width: 300px;
        height: 300px;
      }
    
    @media only screen and (min-width: 1280px) {
        width: 300px;
        height: 300px;
      }
`;