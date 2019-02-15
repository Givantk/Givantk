import React, {Component} from 'react';
import '../CustomNav.css';
import adminPhoto from '../images/myphoto.jpg';
import {
    Navbar as NavigationBar,
    Nav,
    Form,
    Button,
    Container,
    Row,
    Col,
    NavbarBrand,
    InputGroup
} from 'react-bootstrap';

import {CustomModal} from './CustomModal';

import {NavLink} from 'react-router-dom';

import auth from '../components/auth'

class CustomNav extends Component {

    state = {
        showModal: false
    }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    logMeOut = () => {
        console.log(auth.isAuthenticated);
        auth.logOut(() => {
            this.hideModal()
            this
                .props
                .history
                .push('/login')
        })

        console.log(auth.isAuthenticated);
    }

    render() {
        return (
            <div>
                <NavigationBar as='nav' variant="light" expand="md">
                    <NavigationBar.Toggle
                        aria-controls="basic-navbar-nav"
                        className='ml-auto mb-2 bg-light '/>
                    <NavigationBar.Collapse id="basic-navbar-nav">
                        <Container fluid='true'>
                            <Row>
                                <Col lg='3' xl='2' md='4' className='sideBar fixed-top'>

                                    <NavbarBrand
                                        className='text-white d-block mx-auto text-center py-3 mb-4 bottom-border'>
                                        Givantk Admin
                                        <br></br>Dashboard
                                    </NavbarBrand>
                                    <div className='bottom-border pb-3'>
                                        <img src={adminPhoto} width='50' alt='' className='rounded-circle admin-photo'/>
                                        <NavigationBar.Text className='d-block mx-auto text-center'>
                                            <a className='text-white ' href="#login">Muhammad Salah Eldin</a>
                                        </NavigationBar.Text>
                                    </div>
                                    <Nav as='ul' className='flex-column mt-4'>
                                        <li>
                                            <NavLink
                                                exact
                                                activeClassName='current'
                                                className=' nav-link p-2 mb-2 sidebar-link  text-white'
                                                to="/">
                                                <i className='fas fa-home fa-lg mr-3'></i>Main</NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className='nav-link p-2 mb-2 sidebar-link text-white'
                                                to="/users">
                                                <i className='fas fa-user fa-lg mr-3'></i>Users</NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className='nav-link p-2 mb-2 sidebar-link text-white'
                                                to="/services">
                                                <i className='fas fa-shopping-cart  fa-lg mr-3'></i>Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className=' nav-link p-2 mb-2 sidebar-link text-white'
                                                to="/statistics">
                                                <i className='fas fa-chart-line fa-lg mr-3'></i>Statistics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className='nav-link p-2 mb-2 sidebar-link text-white'
                                                to="/messages">
                                                <i className='fas fa-envelope fa-lg mr-3'></i>Messages</NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className='nav-link p-2 mb-2 sidebar-link text-white'
                                                to="/activites">
                                                <i className='fas fa-bell  fa-lg mr-3'></i>Activites</NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className='nav-link p-2 mb-2 sidebar-link text-white '
                                                to="/settings">
                                                <i className='fas fa-wrench fa-lg mr-3'></i>Settings</NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                activeClassName='current'
                                                className='nav-link p-2 mb-2 sidebar-link text-white'
                                                to="/announcements">
                                                <i className='fas fa-bullhorn  fa-lg mr-3'></i>Announcements</NavLink>
                                        </li>

                                    </Nav>

                                </Col>

                                <Col xl='10' lg='9' md='8' className='ml-auto bg-dark fixed-top top-navbar '>

                                    <Row className=' align-items-center'>
                                        <Col md='4'>
                                            <h3 className='text-light text-uppercase mb-0 '>Dashboard</h3>
                                        </Col>
                                        <Col md='5'>

                                            <InputGroup>
                                                <Form.Control className='search-input ' placeholder='search..' type='text'></Form.Control>
                                                <Button className='search-button' variant='light' type="submit">
                                                    <i className='fas fa-md fa-search text-danger'></i>
                                                </Button>
                                            </InputGroup>

                                        </Col>
                                        <Col md='3'>

                                            <Nav as='ul'>

                                                <Nav.Item as='li' className='icon-parent'>

                                                    <NavLink className='icon-bullet nav-link' to='/messages' >
                                                        <i className='fas fa-comments text-muted fa-lg'></i>
                                                    </NavLink>
                                                </Nav.Item>

                                                <Nav.Item as='li' className='icon-parent'>

                                                    <NavLink className='icon-bullet nav-link' to="/activites" >
                                                        <i className='fas fa-lg text-muted fa-bell'></i>
                                                    </NavLink>
                                                </Nav.Item>

                                                <Nav.Item as='li' className='ml-md-auto'>

                                                    <Nav.Link onClick={this.showModal}>
                                                        <i className='fas fa-lg text-danger fa-sign-out-alt '></i>
                                                    </Nav.Link>
                                                </Nav.Item>

                                            </Nav>

                                        </Col>

                                    </Row>
                                </Col>

                            </Row>
                        </Container>

                    </NavigationBar.Collapse>

                </NavigationBar>

                <CustomModal
                    show={this.state.showModal}
                    title='Want to sign Out?'
                    body='Press log out to leave'
                    hide={this.hideModal}>

                    <Button variant="success" onClick={this.hideModal}>
                        Stay here
                    </Button>

                    <Button variant="danger" onClick={this.logMeOut}>
                        Log out
                    </Button>
                </CustomModal>

            </div>

        )
    }
}

export default CustomNav;