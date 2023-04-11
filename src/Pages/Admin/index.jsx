 
import { Row, Col, Card, Icon, Container, Divider, Tabs, Tab } from "react-materialize";
import FadeInOut from "../../hooks/FadeInOut";

import React, { useState } from "react";
import { Button, RMButton, ButtonCancel } from "../../Components/Button";
import { CadContainer, LinhaDivisora, 
        ClassContainer, 
        AdmInput,
        AdFormContainer, 
        FormBtn, 
        CardHeader } from "./style";




const AdminPage = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  
  const [showClassCad, setShowClassCad] = useState(false);

  const toggleShowClassCad = () => {
        
        setShow(!show);
        setShowClassCad(!showClassCad);
        
        
    };

  const [showEducatorCad, setshowEducatorCad] = useState(false);

  const toggleshowEducatorCad = () => {
        setShow(!show);
        setshowEducatorCad(!showEducatorCad)        
    };
  const extraStyles = {
    // position: "fixed",
    // top: "30px",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // background: "rgba(0, 0, 0, 0.4)",
    // color: "#FFF"
  };
  return (
    <Row>
        <Col m={12}
            s={12}
            l={6}
            >
            <Card                        
                className="grey lighten-4"   
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="black-text"
                title= 'Painel de Administrador'
            >   
                <Divider />
                <Tabs
                    className="tab-demo z-depth-1"
                    scope="tabs-31"
                    
                    >
                    <Tab
                         
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                        }}
                        title="Turmas"
                    >   
                        <CardHeader>
                            <FadeInOut show={show} duration={300}>
                                <CadContainer>
                                
                                    <RMButton onClick={toggleShowClassCad}
                                                
                                            tooltip = 'Adicionar Turma'
                                            class = 'btn-floating'
                                            > 
                                    </RMButton>                        
                                </CadContainer>
                            </FadeInOut>
                        </CardHeader>
                        <AdFormContainer>
                            <FadeInOut show={showClassCad} duration={200}>
                                <ClassContainer>
                                    <AdmInput type="text" placeholder="Nome da Turma" id={'className'} className='validate'/>
                                    <AdmInput type="text" placeholder="Sala" id={'classRoom'} className='validate'/>
                                    <AdmInput type="text" placeholder="Grau" id={'classDegree'} className='validate'/>
                                    <AdmInput type="number" placeholder="Capacidade Máxima" id={'classSize'} className='validate'/>
                                </ClassContainer>
                                <FormBtn>
                                    <Button content="Salvar"></Button>
                                    <LinhaDivisora />
                                    <ButtonCancel content="Cancelar" onClick={toggleShowClassCad} >{showClassCad ? "hide" : "show"} </ButtonCancel>
                                </FormBtn>
                            </FadeInOut>
                        </AdFormContainer>                  
                    </Tab>
                    <Tab 
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                        }}
                        title="Educadores"
                    >  
                        <CardHeader>
                            <FadeInOut show={show} duration={300}>
                                    <CadContainer>
                                        <RMButton onClick={toggleshowEducatorCad} 
                                                tooltip = 'Adicionar um Educador'
                                                id='educatorAdd'>
                                        </RMButton>                        
                                    </CadContainer>
                            </FadeInOut>
                        </CardHeader> 
                      
                        <AdFormContainer>
                            <FadeInOut show={showEducatorCad} duration={200}>
                                <ClassContainer>
                                        <AdmInput type="text" placeholder="Turma" id={'className'} className='validate'/>
                                        <AdmInput type="text" placeholder="Nome" id={'EducatorName'} className='validate'/>
                                        <AdmInput type="text" placeholder="Sobre Nome" id={'EducatorLastName'} className='validate'/>
                                        <AdmInput type="text" placeholder="CPF" id={'EducatorId'} className='validate'/>
                                        <AdmInput type="text" placeholder="Área de Atuação" id={'EducatorArea'} className='validate'/>
                                        <AdmInput type="text" placeholder="Endereço" id={'EducatorAdress'} className='validate'/>
                                        <AdmInput type="text" placeholder="Número" id={'EducatorAdressNumber'} className='validate'/>
                                        <AdmInput type="text" placeholder="Complmento" id={'EducatorAdress2'} className='validate'/>
                                        
                                        <AdmInput type="text" placeholder="Grau" id={'classDegree'} className='validate'/>
                                </ClassContainer>
                                <FormBtn>
                                    <Button content="Salvar"></Button>
                                        <LinhaDivisora />
                                        <ButtonCancel content="Cancelar" onClick={toggleshowEducatorCad} >{showEducatorCad ? "hide" : "show"} </ButtonCancel>
                                </FormBtn>
                            </FadeInOut>
                        </AdFormContainer>
                    </Tab>
                    <Tab
                        options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                        }}
                        title="Alunos"
                    >
                        Test 3
                    </Tab>
                    
                </Tabs>       
                                        
            </Card>
        </Col> 
        
        
         
    </Row>
    
  
  );
}

export default AdminPage