import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from '../pages/Home';
import ActivitesPage from '../pages/ActivitesPage';
import AnnouncementsPage from '../pages/AnnouncementsPage';
import Messages from '../pages/Messages';
import Services from '../pages/Services';
import Settings from '../pages/Settings';
import Statistics from '../pages/Statistics';
import Users from '../pages/Users';
import ServicesAskedFor from '../pages/ServicesAskedFor';
import ServicesHelpedIn from '../pages/ServicesHelpedIn';
import ServicesProposals from '../pages/ServicesProposals';
import CustomNav from '../components/CustomNav';
import CustomFooter from '../components/CustomFooter';
import '../CustomNav.css';

export default function DefaultContainer(props) {
    return (
        <div>
            <Container fluid={true} id='main-container'>
                <CustomNav  history={props.history}/>
                <Switch>
                    <Route path='/activities' component={ActivitesPage}/>
                    <Route path='/announcements' component={AnnouncementsPage}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/statistics' component={Statistics}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/helped' component={ServicesHelpedIn} />
                    <Route path='/asked' component={ServicesAskedFor} />
                    <Route path='/comments' component={ServicesProposals} />
                    <Route path='/' component={Home}/>
                </Switch>
                <CustomFooter/>
            </Container>
        </div>
    )
}
