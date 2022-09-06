import { useState} from 'react'
import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { async } from '@firebase/util';

import './index.css'
import config from './config.js'

class Form extends React.Component {

  componentDidMount = async () => {
    // Initializing firebase
    const app = initializeApp(config);

    // Finding parameter for URL
    const queryParams = new URLSearchParams(window.location.search)
    const finder = queryParams.get("userId")
    this.setState({finder: finder})
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      finder: '',
      sent: false,
      error: false,
  };

  /*
  HANDELING FORM CHANGE AND SEND
  */

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
    if(this.state.user === "" || this.state.email === ""){
      event.preventDefault();
      this.setState({email: "",name: "",error:true})
      setTimeout(() => {
        this.setState({error:false})
      }, 5000);
    }else{
      const db = getDatabase();
      set(ref(db,'users/' + this.state.finder + "/" + this.state.name), {
        name: this.state.name,
        email: this.state.email
      });
      event.preventDefault();
      this.setState({email: "",name: "",sent:true})
      setTimeout(() => {
        this.setState({sent:false})
      }, 5000);
    }
    
  }
  // *****************************



  render() {

    const Results = () => (
      <div className="sent">
        <p>Sent succesfully!</p>
      </div>
    )
    
    const Error = () => (
      <div className="error">
        <p>Please compile all the box</p>
      </div>
    )

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
        { this.state.sent ? <Results /> : null }
        { this.state.error ? <Error /> : null }
      </form>
    );
  }
}

export default Form
