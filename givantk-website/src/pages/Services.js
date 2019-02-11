import React, {Component} from 'react';
import CustomTableWithGrid from '../components/CustomTableWithGrid'
import '../CustomNav.css'

class Services extends Component {
    render() {

        var headers = [

            [
                'first_name',
                'last_name',
                'gender',
                'phone_number',
                'date_of_birth',
                'ban'

            ],
            [
                'first_name',
                'last_name',
                'givantk_points',
                'money_points',
                'skills',
                'ban'

            ]

        ]

        var titles = [
            [
                'First Name',
                'Last Name',
                'Gender',
                'Phone Number ',
                'Date of birth',
                'Ban user'
            ],
            [
                'First Name',
                'Last Name',
                'Givantk points',
                'Money Points',
                'Skills',
                'Ban user'
            ]
        ]

        return (
            <div>
                <CustomTableWithGrid
                    url='https://givantk-backend.herokuapp.com/api/profile/all'
                    name='Personal Information'
                    headers={headers[0]}
                    titles={titles[0]}
                    specialColType
                    specialColColor='danger'
                    specialColText='Ban'
                    alterButtonText='Unban'
                    alterButtonColor='secondary'
                    />

                <CustomTableWithGrid
                    url='https://givantk-backend.herokuapp.com/api/profile/all'
                    name='Points and Skills'
                    headers={headers[1]}
                    titles={titles[1]}
                    specialColType
                    specialColColor='danger'
                    specialColText='Ban'
                    alterButtonText='Unban'
                    alterButtonColor='secondary'
                    />

                <CustomTableWithGrid
                    url='https://givantk-backend.herokuapp.com/api/profile/all'
                    name='Users and services'
                    headers={headers[1]}
                    titles={titles[1]}
                    specialColType
                    specialColColor='danger'
                    specialColText='Ban'
                    alterButtonText='Unban'
                    alterButtonColor='secondary'
                    />
            </div>
        )
    }
}

export default Services
