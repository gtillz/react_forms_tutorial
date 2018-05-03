import React, { Component } from 'react';

class RefForm extends Component {
    handleRef = (event)=> {
        //passing in the event and calling preventDefault 
        //allows us to halt the page from refreshing. 
        event.preventDefault();
        //Refs are used to get reference to a DOM node 
        //or an instance of a component in a React Application. 
        //We can add the ref attribute to an element and add '.value'
        //to get the current value from the ref. 
        let value = this.refs.favEntertainment.value;

        //Passing in the ref value to our prop handler
        //updates our state in app with the current value
        //of our ref.
        this.props.handleRefForm(value);

        //Resets the value of our ref
        this.refs.favEntertainment.value = 'Choose...'
    }
    render() {

        return (
            <form className="offset-4 col-4" onSubmit={this.handleRef}>
                <h6>Capture Using Ref</h6>
                <select className="custom-select my-1 mr-sm-2" ref='favEntertainment'>
                    <option defaultValue>Choose...</option>
                    <option value="comic books">Comic Books</option>
                    <option value="video games">Videos Games</option>
                    <option value="movies">Movies</option>
                </select>
                <button type="submit" className="btn wave-light deep-purple darken-1 mt-3">Submit 1</button>
             </form>
        );
    }
}

export default RefForm;