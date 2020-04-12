import React from 'react';
import Activites from '../components/Activites';
import ActivitiesActions from '../functions/ActivitiesActions'

function Messages() {
    return (
        <div>
            <Activites url='http://localhost:3001/Messages'  title='Recent messages' message
            actions={ActivitiesActions}
            ></Activites>

        </div>
    )
}

export default Messages
