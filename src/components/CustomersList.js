import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
           <div className="customers-list">
                {
                    customers.map( cts =>
                        <CustomerListItem
                            key = {cts.dni}
                            dni = {cts.dni}
                            name = {cts.name} 
                            editAction={'Editar'} 
                            deleteAction={'Eliminar'} 
                            urlPath={urlPath} 
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