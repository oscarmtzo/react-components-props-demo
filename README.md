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

## Components from ```npm```

There are premade components on the ```npm```, they will allow us to configure and customize them through the use of *props* 
- To install the **react-player** npm package, use:
```
npm install react-player
``` 
- It needs and import statements inside the *src/App.js* file and use it as any other component:
```
//App.js
import React from 'recat';

//import React Player from the npm package
import ReactPlayer from 'react-player';

// ...
const App = () => {
  return (
    <div className="App">
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing/>
    </div>
  )
}
```

- Example of the rendered ReactPlayer on the DOM transpiled by Babel and React Library

![ReactPlayer] (assets/reactplayer_example.jpg) 