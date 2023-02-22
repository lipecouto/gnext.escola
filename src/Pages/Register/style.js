import React from 'react'
import styled from 'styled-components'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import px2vw from '../../Utils/px2vw'


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(0)};
  max-width: 100%;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  height: 100%;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  padding-right: 5px;
 
  background-color: ${props => props.bgColor};
 

  @media (min-width: 768px) {
    width: ${px2vw(1450)};
    min-height: ${px2vw(200)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1450)};
    min-height: ${px2vw(300)};
    
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;

  @media only screen and (min-width: 360px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media only screen and (min-width: 411px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    flex-direction: row;
    
  }
`

export const FormContainer = styled.form`
  width: 100%;
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  box-sizing: inherit;
`

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;


