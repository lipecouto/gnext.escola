import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { MainContainer, 
         WelcomeText, 
         InputContainer, 
         ButtonContainer, 
         LoginWith, 
         HorizontalRule, 
         IconsContainer, 
         ForgotPassword } from "./style";

const Login = () =>{

    return(
        <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
            <InputContainer>
                <Input type="text" placeholder="Email" id={'email'} className='validate'/>
                <Input type="password" placeholder="Password" id={'password'} className='validate'/>
            </InputContainer>
            <ButtonContainer>
                <Button content="Sign Up" />
            </ButtonContainer>
            <LoginWith>OR LOGIN WITH</LoginWith>
            <HorizontalRule />
            <IconsContainer>
            
            </IconsContainer>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    )
}

export default Login;