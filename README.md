# Importing files

## import React

***React*** is the library that allow us to render and create components 
```
//src/App.js
import React from 'react';
```

# React Components
There's two main types of componets in React JS,  
- ***functional components***:

```
const App = () => {
  return <div></div>
}
```
- ***Class components***

## Functional Components:

### User
```User``` - is a React component / functional React component
***Parameters:***
|Name	|Type|Mutable|Description|
|-----|----|-------|-----------|
|props|	object| false	|is modifiable object according to our needs|

***Returns:***
a JSX - JS with HTML
 
```
function User(props) {
  //console.log(props); //{firstname="Harper"}
  return <div>{props.firstname}</div>
}
```

## Class components:

### Color()

|Name	|Type|Description|Methods|
|-----|----|-----------|-------|
|Color|	class	|is a class component from React, when inside a class, we should use "this" keyword to access the property values| ```render()``` |


```
class Color extends React.Component {
  render() {
    // props are inmutable
    // this.props.msg = "hola" //=> inmutable
    // console.log(this.props) //=> {favColor = "Blue"}
    return <div>{this.props.favColor}</div>
  }  
}
```
```render()``` Returns: ```JSX JS with HTML```