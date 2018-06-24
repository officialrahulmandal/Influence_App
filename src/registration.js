import React, { Component } from 'react';

import Button from './components/UI/Button/Button';
import Spinner from './components/UI/Spinner/Spinner';
import './registration.css';
import axios from './axios-users';
import Input from './components/UI/Input/Input';

class Register extends Component {
    state = {
        userForm: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your First Name'
                },
                value: ''
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Last Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            phone_no: {
                elementType: 'input',
                elementConfig: {
                    type: 'Number',
                    placeholder: 'Phone Number'
                },
                value: ''
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: ''
            },
            postal_code: {
                elementType: 'input',
                elementConfig: {
                    type: 'Number',
                    placeholder: 'Postal Code'
                },
                value: ''
            },
            country: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'southKorea', displayValue: 'South Korea'},
                        {value: 'republicOfArmenia', displayValue: 'Republic of Armenia'},
                        {value: 'republicofCyprus', displayValue: 'Republic of Cyprus'},
                        {value: 'peopleRepublicOfChina', displayValue: 'People Republic of China'},
                        {value: 'stateOfIsrael', displayValue: 'State of Israel'},
                        {value: 'northKorea', displayValue: 'North Korea'},
                    ]
                },
                value: ''
            },
            comments: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'comments'
                },
                value: ''
            },
            
            
        },
        loading: false
    }

    userHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.userForm) {
            formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value;
        }
        const user = {
            userData: formData
        }
        axios.post( '/users.json', user )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/Login' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updateduserForm = {
            ...this.state.userForm
        };
        const updatedFormElement = { 
            ...updateduserForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updateduserForm[inputIdentifier] = updatedFormElement;
        this.setState({userForm: updateduserForm});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.userForm) {
            formElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        let form = (
            <form onSubmit={this.userHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success">Register</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div classfirst_name="userdata"  >
                <h4>Enter your Details</h4>
                {form}
            </div>
        );
    }
}

export default Register;