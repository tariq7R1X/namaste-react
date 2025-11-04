import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
        
    }
    render(){
        return(
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h2>Location: Karachi</h2>
                <h2>contact: @tariquehussain</h2>
            </div>
        )
    }
}

export default User;