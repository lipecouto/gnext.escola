<FadeInOut show={showClassCad} duration={200}>
                               <AdFormContainer>
                                    <ClassContainer>
                                        <AdmInput type="text" placeholder="Nome da Turma" id={'className'} className='validate'/>
                                        <AdmInput type="text" placeholder="Sala" id={'classRoom'} className='validate'/>
                                        <AdmInput type="text" placeholder="Grau" id={'classDegree'} className='validate'/>
                                        <AdmInput type="number" placeholder="Capacidade Máxima" id={'classSize'} className='validate'/>
                                    </ClassContainer>
                                </AdFormContainer>
                                <FormBtn>
                                    <Button content="Salvar"></Button>
                                    <LinhaDivisora />
                                    <ButtonCancel content="Cancelar" onClick={toggleShowClassCad} >{showClassCad ? "hide" : "show"} </ButtonCancel>
                                </FormBtn>
                            </FadeInOut>
                            <FadeInOut show={show} duration={300}>
                                <CadContainer>
                                    <RMButton onClick={toggleShowClassCad} 
                                             
                                            tooltip = 'Adicionar Turma'
                                            id='classAdd'
                                            > 
                                            </RMButton>                        
                                </CadContainer>
                            </FadeInOut>

                            <FadeInOut show={showEducatorCad} duration={200}>
                               <AdFormContainer>
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
                                </AdFormContainer>
                                <FormBtn>
                                    <Button content="Salvar"></Button>
                                        <LinhaDivisora />
                                    <ButtonCancel content="Cancelar" onClick={toggleshowEducatorCad} >{showEducatorCad ? "hide" : "show"} </ButtonCancel>
                                </FormBtn>
                            </FadeInOut>
                            <FadeInOut show={show} duration={300}>
                                <CadContainer>
                                    <RMButton onClick={toggleshowEducatorCad} 
                                            direction = 'bottom'
                                            tooltip = 'Adicionar um Educador'
                                            id='educatorAdd'
                                            ></RMButton>                        
                                </CadContainer>
                            </FadeInOut>