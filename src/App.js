//@ts-check
// {React} is the library that allow us to render and create components 
import React from 'react';

/**
 * @function {GreetingMessage} - is a functional component in React
 * @returns a JSX - JS with HTML
 */
function GreetingMessage() {
  const message = "Hello World!";
  return(
    <ul>{message}</ul>
  )
}


function WelcomeBlock() {
  return(
    <div>
      <GreetingMessage/>
      <em>Welcome to our cool page. It is a pleasure to have you here.</em>
    </div>
  )
}

function Student() {
  const name = "Raul";
  return(
    <div>
      <hr/>
      <GreetingMessage/> my name is {name}
    </div>
  )
}

function ClassRoom() {
  return(
    <div>
      <hr/>
      This is the classroom with the following students:
      <Student/>
      <Student/>
      <Student/>

    </div>
  )
}

/**
 * User - is a React component / functional React component
 * @param {object} props is modifiable object according to our needs
 * @returns a JSX - JS with HTML
 */
function User(props) {
  //console.log(props); //{firstname="Harper"}
  return <div>{props.firstname}</div>
}

/**
 * UserList - is a functional React component, that is a parent component or wrapper for some other components
 * @param {object} props is a modifiable object according to our needs 
 * @returns JSX - JS with HTML
 */
function UserList(props) {
  return <div>{props.children}</div>
}

/**
 * Color -  is a class component from React
 */
class Color extends React.Component {
  /**
   * is a method you can access to render JSX - JS with HTML
   * @returns JSX JS with  HTML
   */
  render() {
    // when inside a class, we should use "this" keyword to access the property values
    // props are inmutable
    // this.props.msg = "hola"
    // console.log(this.props) //=> {favColor = "Blue"}
    return <div>{this.props.favColor}</div>
  }  
}

/**
 * @function {App} a functional component; is one of two main kinds of components in React, the other one is as a @class
 * @returns JSX - JavaScript eXtension is JS with HTML
 */
const App = () => {
  return (
    <div className="App">
      {/*is an instance of the class component of React*/}
      <Color favColor="Blue"/>

      {/* @param {firstname} - is an example accesing to the props object and assigning to it a pair key-value */}
      <UserList>
        <User firstname="Harper"/>
        <User firstname="Lopez"/>
        <User firstname="Ramon"/>
        <User firstname="Jose"/>
      </UserList>

      {/* <GreetingMessage/> is a JSX component or React one, that returns, it can be used multiple times */}
      <GreetingMessage/>
      <hr/>
      <WelcomeBlock/>
      <Student/>
      <ClassRoom/>
    </div>
  )
}

export default App;