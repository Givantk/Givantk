import React, { Component } from 'react';
import CustomTableWithGrid from '../components/CustomTableWithGrid';
import toBeShowed from '../functions/toBeShowed';

export default class ServicesHelpedIn extends Component {
  render() {
    let headers = [
      [
        'service_id',
        'service_name',
        'service_nature',
        'service_state',
        'service_type',
        'asker_location',
        'asker_first_name',
        'asker_Second_name',
        'asker_email',
      ],
    ];
    let titles = [
      [
        'service_id',
        'service_name',
        'service_nature',
        'service_state',
        'service_type',
        'asker_location',
        'asker_first_name',
        'asker_Second_name',
        'asker_email',
      ],
    ];

    return (
      <div>
        <CustomTableWithGrid
          dataArray={toBeShowed.getShowed()}
          name="Services Helped in"
          headers={headers[0]}
          titles={titles[0]}
        />
      </div>
    );
  }
}
