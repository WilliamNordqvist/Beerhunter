import React from 'react';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constats/routes';

import {AuthUserContext} from './index';


const withAuthorization = (condition) => Component => {
    class WithAutorization extends React.Component{

        componentDidMount(){ 
            this.listener = this.props.Firebase.onAuthUserListener(
                authUser =>{
                    if(!condition(authUser))
                    this.props.history.push(ROUTES.LANDING);
                },
                () => {
                    this.props.history.push(ROUTES.LANDING);
                }
            )
        }


        componentWillUnmount(){
            this.listener();
        }
        render(){
            return(
            <AuthUserContext.Consumer>
               {authUser => 
                condition(authUser) ? <Component {...this.props}/>: null}
            </AuthUserContext.Consumer>
            ) 
        };
    };

    return withRouter(withFirebase(WithAutorization));
}

export default withAuthorization;