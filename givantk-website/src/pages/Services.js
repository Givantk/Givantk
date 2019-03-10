import React, {Component} from "react";
import CustomTableWithGrid from "../components/CustomTableWithGrid";
import tableActions from "../functions/tableActions";
import "../CustomNav.css";
import {serverUrl} from '../Assets/Constants'


class Services extends Component {
    render() {
        var headers = [
            [
                "service_id",
                "service_nature",
                "service_title",
                "service_description",
                "asker_id",
                "helper_id",
                "applicants_id",
                "service_date",
                "service_state",
                "delete_service"
            ],
            [
                "service_id",
                "service_title",
                "service_description",
                "service_comments",
               
            ]
        ];

        var titles = [
            [
                "Service Id",
                "Service Nature",
                "Service Title",
                "Service Description",
                "Asker Id",
                "Helper Id",
                "Applicants Id",
                "Service Date",
                "Service State",
                "Delete service"
            ],
            [
                "Service Id",
                "Service Title",
                "Service Description",
                "Comments",
              
            ]
        ];

        return (
            <div>
                <CustomTableWithGrid
                    url={`${serverUrl}/api/admin/services-info`}
                    name="Services info"
                    headers={headers[0]}
                    titles={titles[0]}
                    specialColType
                    specialColColor="danger"
                    specialColText="Delete"
                    action={tableActions.deleteService}
                    
                    />

                <CustomTableWithGrid
                    url={`${serverUrl}/api/admin/services-info`}
                    name="Services and Comments"
                    headers={headers[1]}
                    titles={titles[1]}
                    specialColType
                    specialColColor="info"
                    specialColText="View Comments"
                    navigable
                    navigate={() => this.props.history.push('/')}/>

                    />

            </div>
        );
    }
}

export default Services;
