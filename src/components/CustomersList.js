import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers }) => {
    return (
        <div>
           <div className="customers-list">
                {
                    customers.map( cts =>
                        <CustomerListItem
                            key = {cts.dni}
                            name = {cts.name} 
                            editAction={'Editar'} 
                            deleteAction={'Eliminar'} 
                            urlPath={cts.urlPath} 
                        />
                    )
                }
           </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomersList;