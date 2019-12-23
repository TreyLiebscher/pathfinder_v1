import React from 'react';

export default class Account extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        }
    }

    expand(){
        if(this.state.expanded === false){
            this.setState({expanded: true});
        } else {
            this.setState({expanded: false});
        }
    }


    render(){
        return (
            <div className="account-container">
                <div>{this.props.name}</div>
                <div>{this.props.address}</div>
            </div>
        )
    }
}