import React, { Component } from 'react';
    
    
class PersonCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }

    }

    render() {
        const {firstname, lastName, age, hairColor} = this.props
        return <div>
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <h2>Age: {this.state.age}</h2>
            <h2>Hair Color: {this.props.hairColor}</h2>
            <button onClick={ () => {this.setState({ age: this.state.age + 1})}}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>;
    }
}
    
export default PersonCard;
