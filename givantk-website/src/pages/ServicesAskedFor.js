import React, { Component } from 'react';
import CustomTableWithGrid from '../components/CustomTableWithGrid';
import toBeShowed from '../functions/toBeShowed';

export default class ServicesAskedFor extends Component {
  render() {
    let headers = [
      [
        'service_id',
        'service_name',
        'service_nature',
        'service_state',
        'service_type',
        'helper_location',
        'helper_first_name',
        'helper_Second_name',
        'helper_email',
      ],
    ];
    let titles = [
      [
        'service_id',
        'service_name',
        'service_nature',
        'service_state',
        'service_type',
        'helper_location',
        'helper_first_name',
        'helper_Second_name',
        'helper_email',
      ],
    ];
    return (
      <div>
        <CustomTableWithGrid
          dataArray={toBeShowed.getShowed()}
          name="Services Asked for"
          headers={headers[0]}
          titles={titles[0]}
        />
      </div>
    );
  }
}
