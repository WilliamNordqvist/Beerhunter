import React from 'react';
import SignOutPage from '../SignOut/SignOut';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constats/routes';
import {Main,Button} from './NavigationStyle';

const Navigation = ({authUser}) => (
   <Main>
       {authUser ? <NavigationAuth />  : <NavigationNoneAuth/>}
   </Main> 

)
    
const NavigationNoneAuth = () => (
    
    <Main>
        
                <Link to={ROUTES.SIGNUP}><button>Sign up</button></Link>
       
    </Main>
)
const NavigationAuth = () => (
    <Main>
    
        <ul>
            <li>
                <Link to={ROUTES.PROFILE}><i className="fas fa-user"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.MAP}><i className="fas fa-map-marked-alt"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.OFFERS}><i className="fas fa-gift"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.FRIENDLIST}><i className="fas fa-user-friends"></i></Link>
            </li>
            <li>
                <SignOutPage/>
            </li>
        </ul>
    </Main>
)

export default Navigation;