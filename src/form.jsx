import { useState} from 'react'
import React from 'react';
import './index.css'

class Form extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: ''
    };
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name:</p>
            <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
          </label>
          <label>
            <p>Email:</p>
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
          </label>
          <br />
          <input type="submit" value="Submit" className='invio'/>
        </form>
      );
    }
  }

  export default Form