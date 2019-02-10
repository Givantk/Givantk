import React from 'react'
import CardGroup from '../components/CardGroup'
import CustomCard from '../components/CustomCard';


function Statistics() {
    return (
        <div>

            <CardGroup header='All Statistics'>
                <CustomCard
                    name='Users'
                    value='135,000'
                    footer='Updated Now'
                    color='text-info'
                    icon='fa-users'/>

                <CustomCard
                    name='Approved Users'
                    value='133,000'
                    footer='Updated Now'
                    color='text-success'
                    icon='fa-user-check '/>
                <CustomCard
                    name='Banned users'
                    value='2,000'
                    footer='Updated Now'
                    color='text-danger'
                    icon='fa-user-slash '/>
                <CustomCard
                    name='Registered today'
                    value='1,500'
                    footer='Updated Now'
                    color='text-warning'
                    icon='fa-registered '/>
                <CustomCard
                    name='Services'
                    value='13,000'
                    footer='Updated Now'
                    color='text-info'
                    icon='fa-shopping-cart '/>

                <CustomCard
                    name='Done Services'
                    value='12,000'
                    footer='Updated Now'
                    color='text-success'
                    icon='fa-cart-plus '/>

                <CustomCard
                    name='Undone Services'
                    value='1,000'
                    footer='Updated Now'
                    color='text-danger'
                    icon='fa-times-circle '/>

                <CustomCard
                    name='Pending Services'
                    value='200'
                    footer='Updated Now'
                    color='text-warning'
                    icon='fab fa-product-hunt '/>
                <CustomCard
                    name='Cust. Messages'
                    value='15,000'
                    footer='Updated Now'
                    color='text-info'
                    icon='fa-envelope '/>

                <CustomCard
                    name='Transactions value'
                    value='135,000$'
                    footer='Updated Now'
                    color='text-success'
                    icon='fa-dollar-sign'/>

                <CustomCard
                    name='No of transactions'
                    value='1,000'
                    footer='Updated Now'
                    color='text-danger'
                    icon='fa-credit-card'/>

                <CustomCard
                    name='Today income'
                    value='13,000$'
                    footer='Updated Now'
                    color='text-warning'
                    icon='fab fa-linkedin-in'/>
            </CardGroup>

        </div>

    )
}

export default Statistics;