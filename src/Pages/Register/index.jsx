import React from "react";
import { Container, 
         Box, 
         BoxTitle,
         RegisterContainer,
         FormContainer } from "./style";
import Avatar from "../../Components/Avatar";
import Input from "../../Components/Input";


export default function Register() {
  return (
    <Container>
     <Box bgColor='white'>
       <RegisterContainer>
          <Avatar>           
          
          </Avatar>
         
          <FormContainer>
            <BoxTitle>Registro</BoxTitle>
            <Input type="text" placeholder="Email" id={'email'} className='validate'/>
            <Input type="text" placeholder="Senha" id={'pass'} className='validate'/>
            <Input type="text" placeholder="Confirme a senha" id={'passConfirm'} className='validate'/>
            <Input type="text" placeholder="Nome" id={'firstName'} className='validate'/>
            <Input type="text" placeholder="Sobre Nome" id={'lastName'} className='validate'/>
            <Input type="text" placeholder="CPF" id={'id'} className='validate'/>
            <Input type="text" placeholder="Telefone" id={'phoneNumber'} className='validate'/>
            <Input type="text" placeholder="Endereço" id={'adress'} className='validate'/>
            <Input type="text" placeholder="Número" id={'AdressNumber'} className='validate'/>
            <Input type="text" placeholder="Complemento" id={'adress2'} className='validate'/>
            <Input type="text" placeholder="CEP" id={'adressCode'} className='validate'/>
            <Input type="text" placeholder="Cidade" id={'city'} className='validate'/>
            <Input type="text" placeholder="Estado" id={'state'} className='validate'/>
          </FormContainer>
       </RegisterContainer>
     </Box>
    </Container>
  );
}