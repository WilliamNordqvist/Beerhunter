import React from "react";
import * as Style from './BarPageStyle';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import {withFirebase} from '../Firebase/'
import BarOffers from './BarOffers/BarOffers'
import BarFriends from './BarFriends/BarFriends'
import {withAuthorization} from '../Session'

class BarPage extends React.Component {
    
    constructor(props) {
        super(props);
    
    this.state = {
        CheckedIn: false,
      };
    }

    CheckInFunction() {
        if(!this.state.CheckedIn){
            this.setState({
                CheckedIn: !this.state.CheckedIn,
              })
              this.props.Firebase
              .user(this.props.authUser.uid)
              .update({CheckedInBar:this.props.location.state.name});
       
              
        } else {
            this.setState({
                CheckedIn: !this.state.CheckedIn,
              })
              this.props.Firebase
            .user(this.props.authUser.uid)
            .update({CheckedInBar:''});
        }
    }


    render(){
        return(
            <Style.Main>
                <MapHeader />
                    <Style.FlexContainer>
                            <BarBioText />
                            <BarOffers
                            uid={this.props.location.state.uid}
                            />
                        
                            {this.state.CheckedIn ? 
                            <BarFriends BarName={this.props.location.state.name}/>
                            : null}
                        
                    
                            {/* <p>latidude:{this.props.location.state.position[0]}</p>
                            <p>longitude:{this.props.location.state.position[1]}</p>
                            <p>{this.props.location.state.uid}</p> */}
                    
                            <CheckInButton 
                                Checkin={()=>this.CheckInFunction()}
                                IsCheckedIn={this.state.CheckedIn}
                            />
                    </Style.FlexContainer>
        </Style.Main>


        )
    }
}


const MapHeaderBase = (props) => (
    <Style.HeaderContainer>
    
        <i className="fas fa-caret-left" onClick={()=> props.history.push(ROUTES.MAP)}>

        </i>
        <h1>{props.location.state.name}</h1>

    </Style.HeaderContainer>   
)

const BarBioTextBase = (props) =>(
    <Style.BioaBarText>
        <p>
            
        <span>Välkommen till {props.location.state.name}</span> <br /> 
        Phasellus commodo ex sed enim volutpat accumsan. Donec vitae nisl ut dui hendrerit convallis. Proin at felis id nulla maximus ullamcorper sit amet quis nunc. Maecenas id accumsan nunc, vitae condimentum lectus. Phasellus ornare luctus cursus. Duis urna arcu, vehicula vel pharetra quis, auctor et nibh. Phasellus sit amet ultrices sem. 
            
        </p>
    </Style.BioaBarText>
)




const CheckInButton = (props) => {
   
        let color = {
            backgroundColor: "rgb(43, 112, 139)",
          }
          if(props.IsCheckedIn){
            color.backgroundColor = "rgb(161, 196, 38)";
          }

    return(
    <Style.CheckInButton >
        <button style={color} onClick={()=> props.Checkin()}>
            {!props.IsCheckedIn ? 'CHECKA IN' : 'CHECKA UT'} 
        </button>
    </Style.CheckInButton>
    )
}


const MapHeader = withRouter(MapHeaderBase)
const BarBioText = withRouter(BarBioTextBase)
const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(BarPage));