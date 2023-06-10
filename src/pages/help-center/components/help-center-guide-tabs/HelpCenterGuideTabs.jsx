import React from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import './HelpCenterGuideTabs.scss';
const HelpCenterGuideTabs = ({listOfTabs,children}) => {

    return (
        <Tab.Container id="help-center-guide-tabs-container" defaultActiveKey="tab-1">
            <Row className='help-center-guide-tabs_wrapper'>
                <Col lg={3} className='tabs-container'>
                    <Nav variant="pills" className="flex-column">
                        {
                            listOfTabs.map((tab, index) => {
                                return (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={`tab-${tab.id}`}>{tab.title}</Nav.Link>
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                </Col>
                <Col lg={9}>
                    <Tab.Content>
                        {children}
                    </Tab.Content>
                </Col>


            </Row>
        </Tab.Container>
    )
};

export default HelpCenterGuideTabs;