import React from 'react';
import CardGroup from '../components/CardGroup';
import CustomCard from '../components/CustomCard';
import CustomTableWithGrid from '../components/CustomTableWithGrid';
import {serverUrl} from '../Assets/Constants';
import tableActions from '../functions/tableActions'

function Home() {
  return (
    <div>
      <CardGroup header="Main Statistics">
        <CustomCard
          name="Users"
          value="135,000"
          footer="Updated Now"
          color="text-success"
          icon="fa-users"
        />

        <CustomCard
          name="Services"
          value="13,000"
          footer="Updated Now"
          color="text-info"
          icon="fa-shopping-cart "
        />

        <CustomCard
          name="Cust. Messages"
          value="135,000"
          footer="Updated Now"
          color="text-danger"
          icon="fa-envelope "
        />

        <CustomCard
          name="Today income"
          value="135,000$"
          footer="Updated Now"
          color="text-warning"
          icon="fab fa-linkedin-in"
        />
      </CardGroup>

      <CustomTableWithGrid
        url={`${serverUrl}/api/admin/personal-info`}
        name="Personal Information"
        headers={[
          'first_name',
          'last_name',
          'phone_number',
          'email',
          'location',
          'registration_date',
          'ban',
        ]}
        titles={[
          'First Name',
          'Last Name',
          'Phone Number',
          'Email',
          'Location',
          'Registration Date',
          'Ban user',
        ]}
        specialColType
        specialColColor="danger"
        specialColText="Ban"
        alterButtonText="Unban"
        alterButtonColor="secondary"
        alterable
        action={tableActions.banUser}
      />
    </div>
  );
}

export default Home;
