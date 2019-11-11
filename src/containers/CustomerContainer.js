import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerData from './../components/CustomerData';
import CustomerEdit from './../components/CustomerEdit';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';

class CustomerContainer extends Component {

    componentDidMount(){
        if( Object.keys(this.props.customer).length === 0  ){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        const { dni } = values;
        return this.props.updateCustomer(dni, values);
    }

    handleOnBack = () =>{
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route 
            path ='/customers/:dni/edit' 
            children={
                ( { match } ) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl 
                                { ...this.props.customer } 
                                onSubmit={this.handleSubmit}
                                onBack ={this.handleOnBack} /> 
                }
            } />
    );
    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()} />
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired
};

CustomerContainer.defaultProps = {
    customer:{}
}

const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state,props)
});

export default withRouter(connect( mapStateToProps , {
    fetchCustomers,
    updateCustomer
})(CustomerContainer));