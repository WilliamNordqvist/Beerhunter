import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constats/routes';
import * as Styles from './PasswordForgetStyle';

const PasswordForgetPage = () =>(
<Styles.Main>
    <h1>PasswordForget</h1>
    <PasswordForgetForm/>
</Styles.Main>

);

const INITIAL_STATE ={

    email:'',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props){
        super(props);

        this.state = {...INITIAL_STATE}

    }

    onSubmit = event => {
        const { email } = this.state;
        
        this.props.withFirebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE})
            })
        .catch(error => {
            this.setState({error});
        });

        event.preventDefault();
    };   
    
    onChange = event => {

        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    };

  render() {

        const { email,error } = this.state;
        const isInvalid = email ==='';
  
  return (
    <form onSubmit = {this.onSubmit}>
        <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Adress" 
        />
        <button diabled= {isInvalid} type="submit">Reset Password</button>
        {error && <p>{error.message}</p>}
    </form>
    );
  }
}

const PasswordForgetLink = () => (
    <p>
        <Link to = {ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export {PasswordForgetForm,PasswordForgetLink};