import axios from 'axios';
const ActivitiesActions = {

    deleteActivity: (obj) => {

        console.log(obj)

        axios
            .post('http://localhost:3001/deleteActivity', {
                activity_id:obj.activity_id
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    approveActivity: (obj) => {

        console.log(obj)

        axios
            .post('http://localhost:3001/approveActivity', {
                activity_id:obj.activity_id
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

}

export default ActivitiesActions;