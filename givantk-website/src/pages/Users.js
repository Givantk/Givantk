import React, {Component} from "react";
import CustomTableWithGrid from "../components/CustomTableWithGrid";
import tableActions from '../functions/tableActions'
import "../CustomNav.css";
import {serverUrl} from '../Assets/Constants'

class Users extends Component {
    render() {
        let headers = [
            [
                "id",
                "first_name",
                "last_name",
                "gender",
                "phone_number",
                "email",
                "date_of_birth",
                "ban"
            ],
            [
                "first_name", "last_name", "givantk_points", "money_points", "skills"
            ],
            [
                "first_name",
                "last_name",
                "services_asked_for",
                "services_helped_in",
                "services_proposed_for",
                "services_asked_for_finished",
                "services_helped_in_finished"
            ],
            ["id", "first_name", "last_name", "services_helped_in"],
            ["id","first_name","last_name", "services_asked_for"]
        ];

        let titles = [
            [
                "User Id",
                "First Name",
                "Last Name",
                "Gender",
                "Phone Number ",
                "Email",
                "Date of birth",
                "Ban user"
            ],
            [
                "First Name", "Last Name", "Givantk points", "Money Points", "Skills"
            ],
            [
                "First Name",
                "Last Name",
                "Services asked for ",
                "Services helped in",
                "Proposals submitted",
                "Finished asked services",
                "Finished helped in services"
            ],
            ["User id", "First Name", "Last Name", "Services helped in"],
            ["User id", "First Name", "Last Name", "Services asked for"]
        ];

         

        return (
            <div>
                <CustomTableWithGrid
                    url={`${serverUrl}/api/admin/personal-info`}
                    name="Personal Information"
                    headers={headers[0]}
                    titles={titles[0]}
                    specialColType
                    specialColColor="danger"
                    specialColText="Ban"
                    alterButtonText="Unban"
                    alterButtonColor="secondary"
                    alterable
                    action={tableActions.banUser}
                    />

                <CustomTableWithGrid
                    url={`${serverUrl}/api/profile/all`}
                    name="Points and Skills"
                    headers={headers[1]}
                    titles={titles[1]}/>

                <CustomTableWithGrid
                    url={`${serverUrl}/api/admin/user-services`}
                    name="Users and services statistics"
                    headers={headers[2]}
                    titles={titles[2]}/>

                <CustomTableWithGrid
                    url={`${serverUrl}/api/admin/services-helped-in`}
                    name="Users and services helped in"
                    headers={headers[3]}
                    titles={titles[3]}
                    specialColType
                    specialColColor="success"
                    specialColText="Go to services helped in"
                    navigable
                    navigate={() => this.props.history.push('/helped')}
                    navigationTitle="services_helped_in"
                    />

                <CustomTableWithGrid
                    url={`${serverUrl}/api/admin/services-asked-for`}
                    name="Users and services asked for"
                    headers={headers[4]}
                    titles={titles[4]}
                    specialColType
                    specialColColor="success"
                    specialColText="Go to services asked for"
                    navigable
                    navigate={() => this.props.history.push('/asked')}
                    navigationTitle="services_asked_for"
                    />
            </div>
        );
    }
}

export default Users;
