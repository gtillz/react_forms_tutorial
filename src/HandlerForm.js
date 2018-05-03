import React, { Component } from 'react';

class HandlerForm extends Component {
    constructor () {
        super();

        this.state = {
            selectValue: ''
        }
    }

    onFormSubmit = (event) => {
        //Passing in the event and calling preventDefault 
        //allows us to halt the page from reloading. 
        event.preventDefault();

        //Passing in our state value to our prop handler
        //updates our state in app with the current value
        //stored in state.
        this.props.handleForm(this.state.selectValue);

        //after we pass our state to our handler that updates
        //our App state, we reset the value.
        this.setState({
            selectValue: ''
        })
    }

    handleMyOnChange = (event) => {
        //Because we added this handler to the onChange event listener
        //for a specific input, we can target that event and grab its
        //value.
        this.setState({
            selectValue: event.target.value
        })
    }

    //Dynamic way to create an onChange handler. The targeted elements
    //'name' attribute must match our state.
    handleOnChangeDynamic = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form className='offset-4 col-4' onSubmit={this.onFormSubmit}>
                <h6 className='mt-4'>Capture Using onChange Handler</h6>
                <select className="custom-select my-1 mr-sm-2" onChange={this.handleMyOnChange} value={this.state.selectValue} name='selectValue'>
                    <option value=''>Choose...</option>
                    <option value="popcorn">Popcorn</option>
                    <option value="chips">Chips</option>
                    <option value="skittles">Skittles</option>
                </select>
                <button type="submit" className="btn wave-light deep-purple darken-1 mt-3">Submit 2</button>
            </form>
        );
    }
}

export default HandlerForm;