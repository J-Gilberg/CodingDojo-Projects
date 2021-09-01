import React, { Component } from 'react';
    
    
class PersonCard extends React.Component {
    render() {
        const {firstname, lastName, age, hairColor} = this.props
        return <div>
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <h2>Age: {this.props.age}</h2>
            <h2>Hair Color: {this.props.hairColor}</h2>
        </div>;
    }
}
    
export default PersonCard;
