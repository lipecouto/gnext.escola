import React from "react";
import { Row, Col, Card, Icon, Container } from "react-materialize";

const MainPage = () =>{

    return(
        <>
            <Row>
                <Col m={12}
                     s={12}
                     l={3}>

                    <Card
                        actions={[
                            <a key="1" href="#">Inf. Dia</a>,
                            <a key="2" href="#">Agenda completa</a>
                        ]}
                        className="blue-grey darken-1"
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
                        actions={[
                            <a key="1" href="#">Inf. Dia</a>,
                            <a key="2" href="#">Agenda completa</a>
                        ]}
                        className="blue-grey darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Agenda"
                    >
                        
                    </Card>
                </Col>
                <Col m={12}
                     s={12}
                     l={3}>
                    <Card
                        actions={[
                            <a key="1" href="#">Ver mais</a>,
                            
                        ]}
                        className="blue-grey darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Calendario"
                    ></Card>
                </Col>
            </Row>        
        </>
    )
}

export default MainPage


