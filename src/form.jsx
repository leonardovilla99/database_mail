import { useState} from 'react'
import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { async } from '@firebase/util';

import './index.css'
import config from './config.js'

class Form extends React.Component {

  componentDidMount = async () => {
    const app = initializeApp(config);
    
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      sent: false,
      finder: '',
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
    

    const db = getDatabase();
    set(ref(db,'users/' + this.state.name), {
      name: this.state.name,
      email: this.state.email,
      finder: this.state.finder,
    });
    this.setState({email: "",name: "",sent:true})
    event.preventDefault();
    setTimeout(() => {
      this.setState({sent:false})
    }, 3000);
  }
  
  render() {

    const Results = () => (
      <div className="sent">
        <p>Sent succesfully!</p>
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
      </form>
    );
  }
}

export default Form
