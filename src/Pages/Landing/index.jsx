import React from "react";
import { Row, Col, Card, Icon, Container, Divider } from "react-materialize";


const Agenda = 'Agenda';

const LandingPage = () =>{
    return(<Row>
                <Col m={12}
                    s={12}
                    l={3}>

                    <Card
                        actions={[
                            <a key="1" href="#">Inf. Dia</a>,
                            <a key="2" href="#">Agenda completa</a>
                        ]}
                        className="cyan darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Escola"
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
                        title= {Agenda}
                    >
                    <Divider />
                        
                    </Card>
                </Col>
                <Col m={12}
                    s={12}
                    l={3}>
                    <Card
                        actions={[
                            <a key="1" href="#">Ver mais</a>,
                            
                        ]}
                        className="blue darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Calendario"
                    ></Card>
                </Col>
            </Row>
    )
}

export default LandingPage