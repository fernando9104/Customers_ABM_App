import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions';

const MyField = ({input, meta, type, label, name})=>(
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }  
    </div>
);

/*const isRequired = value => (
    !value && "Este campo es requerido"
);*/

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un numero"
);

const validate = values =>{
    const error = {};
    if( !values.name ){
        error.name = "El campo nombre es requerido";
    }
    if( !values.dni ){
        error.dni  = "El campo Dni es requerido";
    }
    return error;
};

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField} 
                    label="Nombre"></Field>
                 
                <Field 
                    name="dni" 
                    component={MyField} 
                    label="Dni"></Field>
                
                <Field 
                    name="age" 
                    component={MyField} 
                    validate={isNumber}
                    label="Edad"></Field>

                <CustomersActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomersActions>    
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm(
    { 
        form:'CustomerEdit',
        validate
    }
)(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);