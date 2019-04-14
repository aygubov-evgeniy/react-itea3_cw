import React, { Component } from 'react';
import './App.css';

import {Toggler, TogglerItem} from './Toggler/toggler.js'
import Input from './input.js';

class App extends Component {
  state = {
    layout: 'left',
    gender: 'male',
    name: '',
    password: '',
    age: '',
    lang: ''
  }

  changeStatus = (e) => {
    let TogglerValue = e.target.dataset.value;
    let activeToggler = e.target.dataset.label;

    this.setState({
      [activeToggler]: TogglerValue
    });
  }

  onChangeHandler = (e) => {
    const InputValue = e.target.value;
    const name = e.target.dataset.label;

    this.setState({
      [name]: InputValue
    })
  }

  submitForm = (e) => {
    const { layout, gender, name, password, age, lang } = this.state;
    e.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Layout:', layout);
    console.log('Favorite language:', lang);
  }

  render() {
    let { layout, gender, name, password, age, lang } = this.state;
    let { changeStatus, onChangeHandler, submitForm } = this;

    return (
      <form className="App">
        <Input
          name="Name"
          type="text"
          placeholder="Your name"
          value={name}
          label="name"
          action={onChangeHandler}>
        </Input>

        <Input
          name="Password"
          type="password"
          placeholder="Your password"
          value={password}
          label="password"
          action={onChangeHandler}>
        </Input>

        <Toggler
          name="Second"
          label="gender"
          activeToggler={gender}
          changeStatus={changeStatus}>
          <TogglerItem name="male" />
          <TogglerItem name="female" />
        </Toggler>

        <Input
          name="Age"
          type="number"
          placeholder="Your age"
          value={age}
          label="age"
          action={onChangeHandler}>
        </Input>

        <Toggler
          name="First"
          label="layout"
          activeToggler={layout}
          changeStatus={changeStatus}>
          <TogglerItem name="left" />
          <TogglerItem name="center" />
          <TogglerItem name="right" />
        </Toggler>

        <Input
          name="Favorite language"
          type="text"
          placeholder="Your favorite language"
          value={lang}
          label="lang"
          action={onChangeHandler}>
        </Input>

        <button onClick={submitForm}>Submit</button>
      </form>
    );
  }
}

export default App;
