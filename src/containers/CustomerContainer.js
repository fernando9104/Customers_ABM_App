import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';

class CustomerContainer extends Component {
    
    renderBody = () => (
        <Route 
            path ='/customers/:dni/edit' 
            children={
                ( {match} )=>( match ? <p>Es edicion</p>: <p>No es edicion</p> )
            } />
    );

    //<p>Datos del cliente { this.props.customer.name }</p>
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

const mapStateToProps = (state, props) =>({
    customer: getCustomerByDni(state,props)
});

export default connect( mapStateToProps , null)(CustomerContainer);