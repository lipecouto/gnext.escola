import styled from "styled-components";
import Input from "../../Components/Input";
import { FormContainer } from "../Register/style";


export const CadContainer = styled.div`
    display: flex;
    padding-top: 10px;
`

export const ClassContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const LinhaDivisora = styled.div`
    width: 1.5px;
    background-color: #ffffff;
`

export const AdmInput = styled(Input)`
    width: 100% !important;
`

export const AdFormContainer = styled(FormContainer)`
    padding: 0px;
    height: 100%;
    padding-bottom: 20px;
`

export const FormBtn = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    position: absolute;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
`
