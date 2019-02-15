import React, { Component } from "react";
import CustomTableWithGrid from "../components/CustomTableWithGrid";
import "../CustomNav.css";

class Services extends Component {
  render() {
    var headers = [
      ["name", "description", "nature", "state", "date", "delete"],
      [
        "first_name",
        "last_name",
        "givantk_points",
        "money_points",
        "skills",
        "ban"
      ]
    ];

    var titles = [
      [
        "Service name",
        "Service description",
        "Service nature",
        "Service state",
        "Service date",
        "Delete service"
      ],
      [
        "First Name",
        "Last Name",
        "Givantk points",
        "Money Points",
        "Skills",
        "Ban user"
      ]
    ];

    return (
      <div>
        <CustomTableWithGrid
          url="https://givantk-backend.herokuapp.com/api/service/all"
          name="Services info"
          headers={headers[0]}
          titles={titles[0]}
          specialColType
          specialColColor="danger"
          specialColText="Delete"
          alterButtonText="Undelete"
          alterButtonColor="secondary"
        />

        <CustomTableWithGrid
          url="https://givantk-backend.herokuapp.com/api/profile/all"
          name="Points and Skills"
          headers={headers[1]}
          titles={titles[1]}
          specialColType
          specialColColor="danger"
          specialColText="Ban"
          alterButtonText="Unban"
          alterButtonColor="secondary"
        />

        <CustomTableWithGrid
          url="https://givantk-backend.herokuapp.com/api/profile/all"
          name="Users and services"
          headers={headers[1]}
          titles={titles[1]}
          specialColType
          specialColColor="danger"
          specialColText="Ban"
          alterButtonText="Unban"
          alterButtonColor="secondary"
        />
      </div>
    );
  }
}

export default Services;
