import React from 'react';
import Activites from '../components/Activites';

function Messages() {
    return (
        <div>
            <Activites url='http://localhost:3001/Messages'  title='Recent messages' message></Activites>

        </div>
    )
}

export default Messages
