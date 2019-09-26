import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerData from './../components/CustomerData';
import CustomerEdit from './../components/CustomerEdit';

class CustomerContainer extends Component {
    renderBody = () => (
        <Route 
            path ='/customers/:dni/edit' 
            children={
                ( { match } ) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer } /> 
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
    customer: PropTypes.object.isRequired
};

CustomerContainer.defaultProps = {
    customer:{}
}

const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state,props)
});

export default connect( mapStateToProps , null)(CustomerContainer);