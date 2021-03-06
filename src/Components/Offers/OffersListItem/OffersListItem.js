import React from 'react'
import * as Styles from './OffersListItemStyle'


class offersListItem extends React.Component{
    state={
        open: false,
    }

    
    toggleOpenOffer = () =>{
        this.setState({ open: !this.state.open });
    }

    render(){

        const profileOffer = this.props.profileOffer;
        return(
            <Styles.Li>
                <Styles.trying open={this.state.open} onClick={this.toggleOpenOffer}>
                    <span>
                        <Styles.antal>
                            {
                                !this.state.open ? <i style={{padding: "0 10px",}} className="fas fa-sort-down"></i>:
                                <i style={{padding: "0 10px",}} className="fas fa-sort-up"></i>
                            }
                            
                        </Styles.antal>   
                        <h4>
                            {this.props.name} 
                            <Styles.antal style={{padding: "0 10px"}}>
                                {this.props.offerCount}
                            </Styles.antal>
                        </h4>
                        {
                            profileOffer ? null: 
                            <span>
                                {this.props.authUser.roles.includes('ADMIN') && 
                                this.props.authUser.uid === this.props.uid ? <i className="fas fa-times"
                                style={{padding:"0 20px",color:"red"}} 
                                onClick={()=> this.props.onDelete(this.props.offerUid)}></i> 
                                : null }
                            </span> 
                        }
                    </span>
                        { typeof this.props.text !== "string" ?
                            this.props.text.map((t,i) => <p key={i}>* {t}</p>) : <p>{this.props.text}</p>}
                  </Styles.trying>
            </Styles.Li>
        )
    }
}
export default offersListItem