import axios from 'axios';
const tableActions = {

    ActivitiesAskedFor:[],

    banUser: (obj) => {

        console.log(obj)

        axios
            .post('http://localhost:3001/banUser', {
                user_id:obj.id
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    unbanUser:(id) => {
        axios
            .post('http://localhost:3001/unbanUser', {
                user_id:id
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    deleteService:(obj) => {
        axios
            .post('http://localhost:3001/deleteService', {
                service_id:obj.service_id
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    setActivitiesAskedfor:(arr)=>{

        tableActions.ActivitiesAskedFor=arr
    },
    getActivitiesAskedFor:()=>{
        return tableActions.ActivitiesAskedFor
    }
}

export default tableActions;