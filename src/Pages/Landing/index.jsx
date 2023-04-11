import React from "react";
import { Row, Col, Card, Icon, Container, Divider,  } from "react-materialize";
import { DayDiv, Box, DayContainer, Title } from "./styles";
import FormatDates from "../../hooks/calendar";
import { Calendar } from "../../Components/Calendar";

const Agenda = 'Agenda';

const Date = new FormatDates()


const LandingPage = () =>{
    return(<Row>
                <Col m={12}
                     s={12}
                     l={3}>
                    <Card
                        actions={[
                            <a key="1" href="#">Inf. Dia</a>,
                            <a key="2" href="#">Anuncions Anteriores</a>
                        ]}
                        className="blue darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        
                        textClassName="white-text"
                        title= "Anuncios Gerais"
                    ></Card>
                </Col>
                <Col m={12}
                    s={12}
                    l={6}>
                    <Card                        
                        className="grey lighten-4"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="black-text"
                        title= {<Title>{Agenda}
                                    <Box> 
                                        <DayContainer>
                                            {Date.Day()}.
                                            <DayDiv>{Date.DayNumber()}</DayDiv> 
                                        </DayContainer>
                                        
                                        
                                    </Box>
                                </Title>}
                    >
                    <Divider />
                       
                    </Card>
                </Col>
                <Col m={12}
                    s={12}
                    l={3}>
                    <Card
                        actions={[
                            <a key="1" href="#">Ver Todos Eventos</a>,
                            
                        ]}
                        className="blue darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Eventos"
                    >
                    
                    </Card>
                </Col>
            </Row>
    )
}

export default LandingPage