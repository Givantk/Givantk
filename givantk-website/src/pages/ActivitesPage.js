import React from 'react'
import Activites from '../components/Activites';
import ActivitiesActions from '../functions/ActivitiesActions' ;

function ActivitesPage() {
    return (
        <div>

            <Activites url='http://localhost:3001/Activities' title='Activities to be approved'
            actions={ActivitiesActions}
            />

                 
        </div>
    )
}

export default ActivitesPage;
