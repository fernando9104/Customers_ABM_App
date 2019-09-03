import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from './../components/CustomersActions';

const customers = [
    {
        "dni":"27000000",
        "name": "Juan Perez",
        "age": 37
    },
    {
        "dni":"33000000",
        "name": "Daniel Perez",
        "age": 40
    },
    {
        "dni":"34000000",
        "name": "Martinez",
        "age": 50
    }
];

class CustomerContainer extends Component {
    addClient = () =>{
        this.props.history.push('/customers/new');
    }
    renderBody = customers => (
        <div>
            <CustomersList
                customers = {customers}
                urlPath = {'customers/'}
            />
            <CustomersActions>
                <button onClick={this.addClient}>Nuevo cliente</button>
            </CustomersActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                />
            </div>
        );
    }
}

CustomerContainer.propTypes = {

};

export default withRouter(CustomerContainer);