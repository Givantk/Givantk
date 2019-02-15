import React, {Component} from "react";
import CardGroup from "../components/CardGroup";
import CustomCard from "../components/CustomCard";
import axios from 'axios'

class Statistics extends Component {

    url='http://localhost:3001/statistics'

    state={
        StatisticsData:{}
    }

    componentDidMount = () => {
        axios
            .get(this.url, {crossdomain: true})
            .then(res => {
                this.setState({StatisticsData: res.data});
            });
    };

    
    render() {
        
        const StatisticsData={...this.state.StatisticsData}
        console.log(StatisticsData)

        return (

            

            <div>
                <CardGroup header="All Statistics">
                    <CustomCard
                        name='Number of users'
                        value={StatisticsData.numberOfUsers}
                        footer="Updated Now"
                        color="text-info"
                        icon="fa-users"/>

                    <CustomCard
                        name="Approved Users"
                        value={StatisticsData.approvedUsers}
                        footer="Updated Now"
                        color="text-success"
                        icon="fa-user-check "/>
                    <CustomCard
                        name="Banned users"
                        value={StatisticsData.bannedUsers}
                        footer="Updated Now"
                        color="text-danger"
                        icon="fa-user-slash "/>
                    <CustomCard
                        name="Registered today"
                        value={StatisticsData.registeredToday}
                        footer="Updated Now"
                        color="text-warning"
                        icon="fa-registered "/>
                    <CustomCard
                        name="Services"
                        value={StatisticsData.services}
                        footer="Updated Now"
                        color="text-info"
                        icon="fa-shopping-cart "/>

                    <CustomCard
                        name="Done Services"
                        value={StatisticsData.servicesDone}
                        footer="Updated Now"
                        color="text-success"
                        icon="fa-cart-plus "/>

                    <CustomCard
                        name={"Undone Services"}
                        value={StatisticsData.servicesUndone}
                        footer="Updated Now"
                        color="text-danger"
                        icon="fa-times-circle "/>

                    <CustomCard
                        name="Pending Services"
                        value={StatisticsData.servicesWithNoProposals}
                        footer="Updated Now"
                        color="text-warning"
                        icon="fab fa-product-hunt "/>
                    <CustomCard
                        name="Cust. Messages"
                        value={StatisticsData.noOfCustomerMessages}
                        footer="Updated Now"
                        color="text-info"
                        icon="fa-envelope "/>

                    <CustomCard
                        name="Transactions value"
                        value={StatisticsData.transactionsValue}
                        footer="Updated Now"
                        color="text-success"
                        icon="fa-dollar-sign"/>

                    <CustomCard
                        name="No of transactions"
                        value={StatisticsData.noOfTransactions}
                        footer="Updated Now"
                        color="text-danger"
                        icon="fa-credit-card"/>

                    <CustomCard
                        name="Today income"
                        value={StatisticsData.todayIncome}
                        footer="Updated Now"
                        color="text-warning"
                        icon="fab fa-linkedin-in"/>
                </CardGroup>
            </div>
        );
    }
}

export default Statistics;
