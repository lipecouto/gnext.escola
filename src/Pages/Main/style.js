import styled from "styled-components";
import { Row, Col, Card, Icon } from "react-materialize";


const MainPage = () =>{

    return(
        <Row>
            <Col>
                <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>,
                        <a key="2" href="#">This is a link</a>
                    ]}
                    className="blue-grey darken-1"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title="Card title"
                  ></Card>
            </Col>
        </Row>
    )
}

export default MainPage