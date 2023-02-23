import styled from "styled-components";
import { Button, Card, Row, Col, Icon } from 'react-materialize';


export default function Avatar({ content }) {
  return<>  
            <AvatarContainer>
                <AvatarBox>               
                </AvatarBox>
                <FloatButtom 
                    className="red"
                    icon={<Icon center tiny>add</Icon>}con
                    floating
                    node="button"
                    waves="light"
                    large>
                    
                </FloatButtom>
            </AvatarContainer>
           
        </>;
}
const FloatButtom = styled(Button)`
    position: absolute;
    padding-right: 10rem;
    margin-right: 7rem;
    border: 5px solid #fff !important;

    @media only screen and (min-width: 360px) {
        margin-right: 6rem;
      }
    
    @media only screen and (min-width: 500px) {
        margin-right: 16rem;
      }

    @media only screen and (min-width: 760px) {
        margin-right: 4rem;
      }
`

const AvatarBox = styled.div`
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

`

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 10px;

    
    @media only screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
        margin: 10px;
    }
    
`;

