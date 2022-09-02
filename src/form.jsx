import { useState} from 'react'
import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { async } from '@firebase/util';

import './index.css'
import config from './config.js'

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

    componentDidMount = async () => {
      const app = initializeApp(config);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
  
    handleSubmit(event) {
      const db = getDatabase();
      set(ref(db,this.state.name), {
        name: this.state.name,
        email: this.state.email
      });
      this.setState({email: "",name: ""})
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
