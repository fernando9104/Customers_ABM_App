import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class HomeContainer extends Component {

    goToCustomers = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Home' 
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.goToCustomers} >Listado de clientes</button>
                            </CustomersActions>    
                        </div>
                    } 
                />
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter( HomeContainer );