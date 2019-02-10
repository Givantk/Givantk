import React from 'react';
import CardGroup from '../components/CardGroup';
import CustomCard from '../components/CustomCard'
import CustomTableWithGrid from '../components/CustomTableWithGrid';
import Activites from '../components/Activites';

function Home() {
    return (
        <div>

            <CardGroup header='Main Statistics'>

                <CustomCard
                    name='Users'
                    value='135,000'
                    footer='Updated Now'
                    color='text-success'
                    icon='fa-users'/>

                <CustomCard
                    name='Services'
                    value='13,000'
                    footer='Updated Now'
                    color='text-info'
                    icon='fa-shopping-cart '/>

                <CustomCard
                    name='Cust. Messages'
                    value='135,000$'
                    footer='Updated Now'
                    color='text-danger'
                    icon='fa-envelope '/>

                <CustomCard
                    name='Today income'
                    value='135,000$'
                    footer='Updated Now'
                    color='text-warning'
                    icon='fab fa-linkedin-in'/>

            </CardGroup>

            <CustomTableWithGrid
                url='http://localhost:3001/Users'
                headers={[
                'first_name',
                'last_name',
                'email',
                'location',
                'date',
                'ban'
            ]}
                titles={[
                'First Name',
                'Last Name',
                'Email',
                'Location',
                'Date',
                'Ban user'
            ]}
                specialColType
                specialColColor='danger'
                specialColText='Ban'/>
            <Activites/>

        </div>
    )
}

export default Home
