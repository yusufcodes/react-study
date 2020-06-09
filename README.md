# react-study

## Introduction

This repo will contain the code and notes (below) for the Udemy course: [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux).

**Course Started:** 27/04/20

## Table of Contents

- [Section 3: Understanding the Base Features & Syntax](#section-3-understanding-the-base-features--syntax)
- [Section 4: Rendering Lists & Conditional Content](#section-4-rendering-lists--conditional-content)
- [Section 5: Styling React Components & Elements](#section-5-styling-react-components--elements)
- [Section 6: Debugging React Apps](#section-6-debugging-react-apps)
- [Section 7: Diving Deeper into Components & React Internals](#section-7-diving-deeper-into-components--react-internals)
- [Section 8: A Real App: The Burger Builder (Basic Version)](#section-8-a-real-app-the-burger-builder-basic-version)

## Section 3: Understanding the Base Features & Syntax

### The Build Workflow

React needs multiple different things to work. This section shows what is needed to work with React.

- Dependency Management: e.g. **npm** or yarn, to install third party packages. Examples are 'React', 'React DOM', and all the other build tools we may need.
- Bundler: e.g. **Webpack**, this will condense lots of files into a smaller amount, as it isn't optimal to send potentially many files to a server when deploying our site.
- Compiler: e.g. **Babel**, this will compile our next-generation ES6 code into older, compatible code that can help our application run on as many browsers as possible. This is hooked into Webpack, and is applied to our code before it is bundled.
- Development Server: Run a local server to test React app.

All of the above can be setup using one tool called **Create React App**, which is introduced in the next section.

### Create React App

This is the first thing we'd need to do when creating a new app, and all instructions are on the GitHub: [create-react-app](https://github.com/facebook/create-react-app)

### Understanding Component Basics

#### A Basic Component

```js
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
  }
}

export default App;
```

- **React** needs to be imported from the _react_ library to allow for any component to be rendered to the DOM
- **Component** needs to be imported from the _react_ library so we can inherit our class from it, to use all features of a react component
- React will call the **render** method to output anything to the screen, and within this method, it must **return some JSX to display to the screen.**
- This class is exported at the bottom of the file, and the default keyword is used so that, if we import this file as default, this class will instantly be given.
- The 'HTML' looking code inside of the render method is actually just **JSX**, some syntactical sugar to allow for us to write 'HTML' which, when compiled, is just some JavaScript code.

### Understanding JSX

Below is what the JSX we write is going to get compiled down to by Babel. It uses the React class with the createElement method from it to build our apps. However, writing everything like this can become a lot of work, which is why JSX is used instead. This can help understand exactly what is going on behind the scenes.

```js
return React.createElement(
  "div",
  { className: "App" },
  React.createElement("h1", null, "My H1 text")
);
```

### Limitations of JSX

A restriction on JSX is the use of different attribute names to real HTML. For example, we can't use 'class' but we must use '**className**'. This is because class is a reserved keyword in JavaScript, so cannot be used. This brings up the important point that: **this is JSX, not HTML.** For this reason, although they look very similar, there are still some differences.

Also, everything must be wrapped in **one div** when rendering a component. This could also be seen as a limitation, but is standard practice when writing React code.

### Creating a Functional Component

#### Introduction to Components

A component is **a function which returns some JSX**, that's it. React apps are based on the combination of some components which combine together to form some site. React apps can be described as a **component tree**, where there is one _root_ component, like **App**, and then any number of other components nested inside this root component (**child components**).

As mentioned earlier, a component must return some JSX code - this is so that React knows what sort of real HTML to output to the DOM in the end.

#### Types of components

Below are examples of two ways to create a component, with the first way being the best way to do this.

1. **Functional Components** (_best practice_)
   AKA: Presentational, Dumb, or Stateless components

```js
const cmp = () => {
  return <div>some JSX</div>;
};
```

2. **Class-based Components**
   AKA: Containers, Smart, or Stateful components

```js
class Cmp extends Component {
  render() {
    return <div>some JSX</div>;
  }
}
```

#### How to create a component

1. Create a new folder with the name of the component, starting with a capital letter
2. Inside the new folder, create a .js file with the same name as the folder
3. Import React at the top of the file:

```js
import React from "react";
```

4. Write the function which will be returning the desired JSX. Below is a bare-bones, basic example using a **functional component**.

```js
const person = () => {
  return <p>I'm a Person!</p>;
};
```

5. End the file with an export, so that the component may be used in your main React app

```js
export default person;
```

6. In your main app file, import the new component:

```js
import Person from "./Person/Person";
```

7. Now, you can add the component into your main rendered content using a self-closing tag, with its name written inside the tag:

```js
... // more code
<Person />
... // more code
```

#### Outputing Dynamic Content

Inside the JSX, you can use **curly braces { ... }** to enclose basic, single-line JavaScript thsat you want to run, to create dynamic content.

#### Working with Props

Following on from the Person component we had earlier, it would be handy to be able to define your **own content** for each 'Person' component you use. Props allow for you to pass data into a component externally - this is shown below:

First, we pass in the data that we want to use as attributes:

```js
// App.js
<Person name="Yusuf" age="20">
```

In our component, we first pass in the **props** object to access the data we want to use, and then access the **properties** we defined outside of the component, as shown below:

```js
// Person.js
const person = (props) => {
  return (
    <p>
      I'm a {props.name} and I am {props.age} years old!
    </p>
  );
};
```

_Note_: This is a functional based component - in a class based component, we would use '**this.props**' to access the props object.

#### Understanding the children prop

Aside from passing data as attributes, we can also pass things in between the component tags:

```js
// App.js
<Person name="Yusuf" age="20">
  Yusuf's test content, output from props.children
</Person>
```

To access the text I've entered between the tags, we can use **props.children** inside our component:

```js
<p>{props.children}</p>
```

#### Props and State: Summary (outlined in course notes)

**Props** (Properties): An object which is an **input** to a component, containing information that should be used when creating a component.

With props, you are passing data from the **parent component** to the **child component**.

**Props Example**

Here, we access the custom property, title, from the props object. This will have been defined elsewhere, when declaring the usage of the component, as shown below:

```js
// Post component
const post = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

// Other component (where we use Post)
<Post title="My first Post" />;
```

**State**: This is similar to a prop, except that data is being defined and changed from **within** the component. An important thing to note is that state can only be accessed via **class based components**.

'state' is a property of the **component class** which is accessed by typing _this.state_.

When there is a change to the state, the component will **re-render** to display the new change.

**State Example**

```js
class NewPost extends Component {
  // state can only be accessed in class-based components!
  state = {
    counter: 1,
  };

  render() {
    // Needs to be implemented in class-based components! Needs to return some JSX!
    return <div>{this.state.counter}</div>;
  }
}
```

### Handling Events with Methods

This example will demonstrate how to add event handling with the click of a button.

To register some form of event to happen when clicking a button, we must use the **onClick** attribute, a special JSX attribute. Notice how it is written in camel case as it is JSX, whereas in traditional HTML/CSS/JS, we would use onclick.

```js
<button onClick={}>Switch Name</button>
```

You then want to go off and define some other function to be executed. We should do this using the ES6 Arrow Functions, to ensure that the _this_ keyword is locally scoped (to the current context).

```js
switchNameHandler = () => {
  console.log("Clicked!");
};
```

Lastly, we want to refer to the function we want to call within the curly braces as shown below:

```js
<button onClick={this.switchNameHandler}>Switch Name</button>
```

### Manipulating the State

Linked to the previous section, this section will show you how to dynamically change the data displayed to the user through manipulating the state. This is done by **an onClick event**.

**setState:** A method which takes in an object, which contains any **updated data** to be added to the state object. It will _merge_ anything defined here with what already exists in the state, meaning nothing is lost. React will then **re-render** the area of the DOM which has been changed to reflect this.

```js
this.setState({
  people: [
    { name: "Yusuf Ahmed", age: 20 },
    { name: "Manu", age: 29 },
    { name: "Steph", age: 27 },
  ],
});
```

### Using the useState() Hook for State Manipulation

_Note:_ Since React 16.8, you can use **functional components** to manage state. This wasn't a thing before, and is possible because of **React Hooks.** Course note - instructor briefly demonstrates this here, but for the rest of the course will use the traditional Class Components to approach state management. (Separate units on React Hooks are in this course).

We started by converting the Class Based 'App' component to be Function Based, and then imported the **useState** hook.

**Difference between setState (class based component), and new function returned from hook to set the stage (function based component):**
setState will merge any existing state data with what we pass in, whereas the new function returned by the useState hook **will over-write** any data in our state.

To over-come this, you can use **multiple useState()** calls to manage different pieces of data. That way, setting the state of one piece of data will not effect other bits of data which may not have been updated.

### Stateful and Stateless Components

**Stateful Components (AKA: Containers, Smart)**: A component which manages come form of state. For example, currently my **App** main component handles some kind of state.

**Stateless Components (AKA: Presentational, Dumb):**: A component which has **no state** attached to it. For example, my **Person** component.

It is better to create more stateless components, which are there for presentational purposes, as it makes the app easier to manage. It means it is easy to locate where data is dynamically changing, in a certain place.

### Passing Method References between Components

We can use custom properties to pass functions from our **parent** component to other components. Below shows how we would pass in a pre-written function, **switchNameHandler**, to the **Person** component. This can then be accessed inside of the component via the Prop object, to be used in any way, such as in an event.

```js
<Person
    name={this.state.persons[1].name}
    age={this.state.persons[1].age}
    click={this.switchNameHandler}
>
```

However, often we want to pass in some **parameters** containing data to be used. For this, we must manipulate the scope of the _this_ keyword, and use the **bind** method:

**TODO:** Read up on this a bit more to enhance understanding of it.

```js
<Person
    name={this.state.persons[1].name}
    age={this.state.persons[1].age}
    click={this.switchNameHandler.bind(this, 'New Name!!!')}
>
```

### Adding Two Way Binding

This section will outline how to take input from the page and update the state of a component.

This example will demonstrate this using the Person component in conjunction with the main App component.

In the Person component, we want to allow for some input. After adding a basic input element, we want an event to happen when we alter this input field: **onChange** can be used for this. Next, we want to tell React which function should be executed when onChange is triggered, in this case it is this 'changed' function we pass into the component.

```js
// Person component
<input type="text" onChange={props.changed} />
```

To access the method through the props object, we must add it as a custom property as usual:

```js
// Person component with 'changed' method
<Person
    name={this.state.persons[1].name}
    age={this.state.persons[1].age}
    click={this.switchNameHandler.bind(this, 'New Name!!!')}
    changed={this.nameChangedHandler}
>
```

We finish this off by calling the usual setState method, however as we are handling an event, we are given the **event** object to play with, like any JS event handling. We can then get the current element via **event.target**, then get the value typed in by **event.target.value**.

```js
// New method to be called
nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: "Max", age: 28 },
      { name: event.target.value, age: 29 },
      { name: "Stephanie", age: 27 },
    ],
  });
};
```

**Result:** When any text is entered into this input field, React will re-render the DOM to reflect the newly entered text. This will happen each time a change is made, such as an additional character, or a removal of one.

### Adding Styling with Stylesheets

For a given component, you must create the .css file you want and import it at the top of the file. This will allow for any styles to be used.

It can also be done **inline**, by setting your styles within an **object** using JavaScript access to CSS properties, and then using the style attribute on a given component to link to the styles.

### Section 3: Useful Resources and Links

- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [Components & Props](https://reactjs.org/docs/components-and-props.html)
- [Listenable Events](https://reactjs.org/docs/events.html)

## Section 4: Rendering Lists & Conditional Content

### Rendering Content Conditionally

To do any conditional work in JSX, you can wrap your JSX in {...} and within this, do simple statements. We can use the ternary operator in JavaScript to conditionally ouput data using this.

For this example, I used a state variable which is toggled by a button, of which the value is read in JSX to determine whether or not to show a set of names. **Better alternative way is shown in the next section**

### Handling Dynamic Content "The JavaScript Way"

One thing to always remember is, whenever React needs to render, or re-render, anything to the screen, the **entire render() method** is executed. We can use this to our advantage here.

Before the **return** statement in the render method, we can add any regular JS we need. In my example, I did the conditional work here, rather than inside the JSX. I then refer to the variable holding my JSX inside the return statement.

### Outputting Lists

We can use the **map** method to map the JS objects in our state into components.
**JavaScript Object -> Component:**

```js
{
  this.state.persons.map((person) => {
    return <Person name={person.name} age={person.age} />;
  });
}
```

### Lists and State

We can edit the display of a list using state. First, we want to have some way of deleting an item through an event such as a **click**, so we can get that setup inside the component we want.

After that we can use the index we have and call the **splice** method to remove the element from the state, and use **setState** to update the state accordingly.

```js
<Person click={() => this.deletePersonHandler(index)} />;

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({ persons: persons });
};
```

### Updating State Immutably

The approach above to access the state is not the best practice, because we are getting a reference to the original state **object** and then manipulating from this. Instead, we should get a **copy** of the state so we are not potentially overriding any original data before we update it - in an **immutable** way. This can be achieved using the **spread** operator. This operator will simply copy the contents of the object that we want to use the data from:

```js
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({ persons: persons });
};
```

### Lists & Keys

This section refers to the usage of the 'map' function to create component list items. For each of these list items (JSX component) we need a way to uniquely identify it.

As React works by updating only the part of the DOM that needs re-rendering, with a list, it needs to know **exactly which** item has been updated to achieve this. Otherwise, it will end up re-rendering the entire list. For this, we pass in a **key** prop to our component, which should be some unique ID we generate.

**Flexible Lists Example:** See the _nameChangedHandler_ in App.js to see flexibly updating a list in action.

### Useful Resources and Links

[Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
[Lists & Keys](https://reactjs.org/docs/lists-and-keys.html)

## Section 5: Styling React Components & Elements

### Outlining the Problem Set

- Cannot use pseudoselectors when using a JS object to create styles
- .css files create global styles

### Setting Styles Dynamically

As a reminder, this is the current styling setup we have:

- A JavaScript object containing properties and values of CSS styles
- This is assigned using the 'style' attribute on the component we want

To dynamically change the style, we can manipulate the JS object containing the styles we have based on some event, for example a click. Quick example below:

```js
style.backgroundColor = "red";
```

Doing this will change the background colour once a button is clicked, and once it is clicked again the default normal style is re-applied.

### Setting Class Names Dynamically

The approach taught to have dynamic classes:

- Set up styles in .css file (global)
- Create an array to hold the classes
- Perform some JS dynamic logic to add / remove classes to the array
- Convert the array to a string
- Set the string to be the class of the component you want to style

Array to String: use the **join** method, taking in a parameter to join each item with such as a space or comma.

### Adding and Using Radium

Radium is a third party package which allows you to overcome the problem of not being able to use pseudo-selectors and media queries. For now **will not add lengthy notes on this** as I want to learn Styled Components and see how this works!

### Using Radium for Media Queries

Same as above.
**TO DO: Come back to this later after Styled Components?**

### Introducing Styled Components

styled-components is a library which can be used to write styles.
The syntax makes use of String Literals, as shown below:

```js
// Creates a styled 'a' element - returns a React element
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
`;
```

### More on Styled Components

The components are built with randomly generated class names which can be seen in the DOM.

### Styled Components & Dynamic Styles

We can use a boolean, passed in as a prop to our styled component, to dynamically style our component. We use string literals to write some basic logic to determine a style below:

```js
background-color: ${props => props.alt ? 'red' : 'green'};
```

The **alt** prop passed into the component is used to determine whether this button should be red or green.

### Working with CSS Modules

So far, all the CSS that has been written has been inside our JavaScript files. Here we introduce the method of using CSS Modules to eliminate this from happening, keeping the JS and CSS separate.

#### Getting CSS Modules to work

_Update:_ Ejecting is not needed anymore for this to work see [this link](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)

1. Get access to the config files created with create-react-app:

   > npm run eject

2. Add the following congifuration to the **webpack.config.dev** and **webpack.config.prod** files below test: /\.css\$/ inside of options:

> modules: true,
> localIndentName: '[name]**[local]**[hash:base64:5]'

What this does is allows for the usage of **modules**, and for each CSS class that we import, it will have a **unique class name** made using the defined naming convention in localIndentName.

3. Import CSS as a module:
   > import './App.css'; (old)
   > import classes from './App.css'; (new)

Each class in the CSS file now is a **unique class** which is specifically mapped to a particular element in our app. It is accessed through this type of syntax, where App is a property on the imported classes object, with a unique identifier:

```js
<div className={classes.App}>
```

The actual class name for this will be a unique ID which is generated using the configuration we set up earlier. This ensures that each style is scoped to a particular element.

### CSS Modules & Media Queries

Media Queries can be applied in your .css file as normal now and it should work as normal.

### More on CSS Modules / Useful Resources & Links

[Using CSS Modules in create-react-app Projects](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

[More information about CSS Modules](https://github.com/css-modules/css-modules)

## Section 6: Debugging React Apps

This module will help us learn from and understand errors in React.

### Understanding Error Messages

If you go to the top of sa large red error in the console, you can start looking at the error message. Followed by this, line numbers can help you identify where a particular error has occurred.

### Finding Logical Errors by using Dev Tools & Sourcemaps

Logical Errors are errors where there is no message but we have some unexpected behaviour in our program. We can use the dev tools to set a breakpoint where we want to inspect our code.

### Working with the React Developer Tools

The console has two new additional tabs 'Components' and 'Profiler'. Components contain all the info of each component on the page such as the state, event listeners etc.

### Using Error Boundaries (React 16+)

This section shows how to create some sort of error page generated to be helpful to the user.

We will be using a **high-order component**. This is a component which **wraps** the original component we are displaying to do some of operations, in this case, it is handling an error. **Note:** Move any 'key' properties into this higher component as key should always be on the outer component.

**TODO:** I got to the end of the lecture and the error boundary did not fully work however below is a link to official docs to try another time. I want to move on with the course but this looks handy for future reference - more of a **good to know**:

[Error Handling in React 16+](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

### Wrap Up / Useful Links and Resources

[Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/)

## Section 7: Diving Deeper into Components & React Internals

### A Better Project Structure & Splitting an App Into Components

In these first couple of lectures, we move a lot of logic / UI out of the main App.js into their own components. App.js is now only responsible for handling and manipulating the state. Through moving other UI / areas of the app, we now have a better project structure.

### Comparing Stateless and Stateful Components

- App.js is a **stateful** component where state is being managed.
- Other components such as Person, are referred to as Stateless or Presentational.
- We should have mostly **dumb / presentational / stateless components** to keep the app more manageable: so we are only manipulating state in a limited number of places.

### Class-based vs Functional Components

[Class vs Functional Components](https://prnt.sc/so1yxl)

[Credit: Maximilian Schwarzmüller](https://www.udemy.com/user/academind/)

### Class Component Lifecycle Overview

These are only available in class-based components. There are a number of methods that can be added to a class-based component, this is outlined below in a set of stages:
_Note: This has nothing to do with React Hooks_

### Component Lifecycle - Creation

- **constructor**(props) ➡️ initialisation such as setting up state
  _Note:_ Must call **super(props)** so that the constructor of the _Component_ class is also executed.
- **getDerivedStateFromProps**(props, state) ➡️ Synchronising state
- **render**() ➡️ Get JSX code ready to be rendered
- _Render Child Components from the render() method_
- **componentDidMount**() ➡️ runs once other components render, here you can do common things such as http requests etc. however do **not** update the state here, as it will cause a re-render

You can try and achieve different things at different points of the creation / updating of a component. For example, you may want to wait until something is fully rendered before attempting anything - this functionality could go into **componentDidMount()**.

### Component Update Lifecycle (for props Changes)

This is the cycle which is followed when a the Component's **props** are updated:

- **getDerivedStateFromProps**(props, state) ➡️ Used to synchronise the state to props (instructor said more elegant ways of doing this)
  ⬇️
- **shouldComponentUpdate**(nextProps, nextState) ➡️ Here you can decide whether or not to continue updating a component, with the ability to cancel an update in progress.
  ⬇️
- **render**()
  ⬇️
- Update Child Component Props
  ⬇️
- **getSnapshotBeforeUpdate**(prevProps, prevState) ➡️ This gets a 'snapshot' of the component before it is updated.
  ⬇️
- **componentDidUpdate**() ➡️ We can now perform anything such as a HTTP request however, we do **not** want to set the state here because it will trigger a re-render, causing an infinite loop of this lifecycle.

### Component Update Lifecycle (for state Changes)

Most important methods are **componentDidMount**() and **componentDidUpdate**() as you would typically do activities such as fetching data in these.
_shouldComponentUpdate()_ can be used for performance improvements.

### \* The Component Lifecycle

- These notes have been taken by myself from the official React documentation, as a means to summarise this area of the course.

[Visual Diagram of Lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

#### Mounting / Adding to DOM

This is the order in which these methods are called when a component is being **created and inserted** into the DOM:

- **constructor**()
- static **getDerivedStateFromProps**()
- **render**()
- **componentDidMount**()

#### Updating

Updates to a component are triggered by changes to **props** or **state**. The following methods are called when a component is being re-rendered:

- static **getDerivedStateFromProps**()
- **shouldComponentUpdate**()
- **render**()
- **getSnapshotBeforeUpdate**()
- **componentDidUpdate**(prevProps, prevState, snapshot)

#### Unmounting / Removing from DOM

One method is called when a component is being removed from the DOM: **componentWillUnmount**().

#### Error Handling

These methods are called when there's a rendering error:

- static **getDerivedStateFromError**()
- **componentDidCatch**()

### Using useEffect() in Functional Components

The **useEffect hook** can be used in functional components in place of the lifecycle methods - this was introduced with **React Hooks**.

This method is executed whenever the component being used is **created** or **updated**. It is like componentDidMount and componentDidUpdate in one method.

Setup:

```js
import React, { useEffect } from 'react';

...

useEffect(() => {
  console.log('[Cockpit.js] useEffect');
});
```

### Controlling the useEffect() Behavior

By default this method will run all the time. We can pass in an **array** of data for the useEffect hook to base its running off of. This means that, it will **only** execute when the data we pass into the method gets changed - not the entire virtual DOM.

To run useEffect only for the **first time**, you pass in an empty array as a second parameter.

### Cleaning up with Lifecycle Hooks & useEffect()

'Cleaning' here refers to: when a component is removed from the DOM, and you have something like an event listener, you want to 'remove' them essentially cleaning up the application a bit. This can be done using lifecycle hooks / useEffect().

**Class-based Component:**
The method _componentWillUnmount()_ can be used as it will run when an element is removed from the DOM.

**Function-based Component:**
We can add a _return_ statement to our useEffect method. This will run before the main useEffect method:

```js
useEffect(() => {
  // Do some stuff
  return () => {
    console.log("Cleanup here");
  };
});
```

Note that the above will work only if we pass in an empty array as a second argument to the useEffect method: this causes the hook to run upon **first render** and then when it is eventually **removed**. Without this argument, it will fire every single time (which you might want in some instances!).

```js
// Runs on initial render and once component is removed
useEffect(() => {
  console.log("useEffect");
  return () => {
    console.log("cleanup work");
  };
}, []);

// Runs all the time
/* Output:
2nd cleanup work
2nd useEffect */
useEffect(() => {
  console.log("2nd useEffect");
  return () => {
    console.log("2nd cleanup work");
  };
});
```

### Using shouldComponentUpdate for Optimization

When a change happens to the DOM, it may not always require a re-render of a particular component. We can use **shouldComponentUpdate** to determine whether something needs updating. This is based on the new value of the prop, and the previous value. This is demonstrated below:

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.persons !== this.props.persons;
  }
```

What happens here is we return true/false depending on the comparison of the old props and the new props. This then determines whether the component updates and therefore re-renders, hence the name shouldComponentUpdate.

### Optimizing Functional Components with React.memo()

The previous example is only available in class based components, but we can use **React.memo()** in a **functional component**.

The way we do this is wrap our component inside the **memo** method as shown below:

```js
export default React.memo(cockpit);
```

This creates an 'image' of the component, so that React see if the input (props) change for this component. Only when the input changes, the method will allow for a render to happen. This saves you from using the shouldComponentUpdate() method to compare every single prop / input you have to a component, checking them all at once for you.

### When should you optimize?

The only time the above optimizations should be ran is when you have unrelated content causing re-renders to a different component where it isn't needed.

**Example**: We wouldn't want to re-render some list at the bottom of a page when we only want to update the header of the page.

### PureComponents instead of shouldComponentUpdate

PureComponent is a different **type** of Component, where it will, by default, check if **any** prop is changed before attempting to re-render. It effectively has the checks you should do in shouldComponentUpdate, where you compare old props to new props, already. All you need to do is import PureComponent and extend from this class rather than the usual Component class.

### How React Updates the DOM

render() is called ➡️ this does **NOT** mean a full render to the actual DOM is performed. It compares Virtual DOMs:

We have the **Old Virtual DOM** and then the **Re-rendered Virtual DOM** kept by React. The **re-rendered** one is created when we call render() and then the comparison happens.

Any differences are updated in the real DOM. Otherwise the real DOM is not touched.

Accessing the real DOM can be slow, which is why React uses the Virtual DOM.

### Rendering Adjacent JSX Elements

By default, when returning any JSX, it must be contained in **one root element** which will contain all the elements you want. However, we can defy this if we want to simpy return a set of elements with no wrapping div.

#### Method 1: Wrap the returned JSX in an Array

Below is a basic example to show the usage of returning an array. Rather than wrapping the elements in one single div, around parentheses, we can omit the outer div and just return a set of elements in an Array. All we need to do is use typical Array syntax and it works. However we **must** assign a key to each element as React needs a way to identify each element in the Array.

```js
return [<p key="1">Element One</p>, <p key="2">{this.props.name}</p>];
```

#### Method 2: Use a Higher Order Component

A higher order component is one that wraps around another one. We can essentially wrap all of our adjacent elements inside of an 'empty' high order component, to fulfil the JavaScript requirement that is: a function must return only one thing.

The HOC looks like this:

```js
// Outputs whatever is passed into the this component
const auxilary = (props) => props.children;

export default auxilary;
```

And then the elements we want to return in our main app can be wrapped around this new component like so:

```js
return (
  <Auxilary>
    <p onClick={this.props.click}>
      I'm a {this.props.name} and I am {this.props.age} years old!
    </p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name} />
  </Auxilary>
);
```

The key difference between using a HOC compared to an actual div is that this wrapper **won't** be rendered to the DOM: all it is doing is outputting the contents of its children as 'props.children' does.

### Using React.Fragment

Since React 16.2 there is a built-in 'Auxilary' component called **React.Fragment** - you type this into the pointed brackets to make use of it. It works exactly the same as the one we created ourself.

### Higher Order Components (HOC) - Introduction

An example was demonstrated here where div wrappers containing some classes were converted into a generic, HOC, with the following structure:

```js
const withClass = (props) => {
  <div className={props.classes}>{props.children}</div>;
};
```

This is just an example of how such HOC could be utilised and isn't always needed - just for demo.

### Another Form of HOCs

This next form of HOC is best used when you need to add some extra logic to a component, rather than say, a bit of styling via a class name.

Rather than create a new component, we instead write a **function** which **returns a new component**. Below is an example - all we are doing is adding a class to a component that we pass in:

```js
// WrappedComponent: The component we will pass into the function to be displayed
// className and any other additional parameters: Extra info we need to supply to the component
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};
```

To implement this, we need to wrap our component during the export stage as shown below:

```js
export default withClass(App, classes.App);
```

### Passing Unknown Props

The problem with the above method is that we end up losing all our props automatically, and we need to add them back somehow.
The way we do this is to **spread** the props that we receive into the WrappedComponent:

```js
<WrappedComponent {...props} />
```

### Setting State Correctly

So far in the course, we've been setting state correctly with the setState method. Below is an example of using it 'incorrectly'.

setState is called synchronously when we use it, and whilst most of the time it will finish executing right away, this may not always be the case.
If we tried to update an item in our state, using 'this.state...', we are not always guaranteed to have the updated version of the item we're updating.
In such a scenario where state may be updated in multiple places, relying on the state being totally up to date is not the best idea. There is a better way to approach such a task - **passing in an optional function to setState when depending on state values:**

It makes use of the provided previous state in the function to update old state values.

```js
this.setState((prevState, props) => {
  return {
    persons: persons,
    changeCounter: prevState.changeCounter + 1,
  };
});
```

### Using PropTypes

There is a another way of introducting props to a component through installing a package called **prop-types**.

This package allows for you to dictate the **data type** of each prop you are using in a component. After your component declaration, you create a new property against the component you are working with 'propTypes' to define the different data types. Now anytime the incorrect data type is passed in, an error will be thrown at you in the console.

```js
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
```

### Using Refs

References (refs) is a way to select a React element. Below are two ways of achieving this. Note that this will only work with class components.

#### Method 1

Add a 'ref' attribute to the element you are working with. It takes an argument being the actual item you are working with.
You can then set a property equal to the element you want to do something with and access it elsewhere in your component.

```js
<Component
  ref={(inputEl) => {
    this.inputElement = inputEl;
  }}
/>
```

In this example, we go ahead and use the last input element we rendered to the screen and cause it to focus once loaded (componentDidMount).

```js
componentDidMount() {
  this.inputElement.focus();
}
```

#### Method 2: React.createRef()

In this approach, we use the **createRef** method to **prep** our reference value in the constructor.

```js
constructor();
{
  super();
  // This will hold the reference for our input element once it is set later in 'ref' attribute
  this.inputElementRef = React.createRef();
}
```

Now we have a generic reference to be used, it can be assigned to the element we want, similarly to Method 1, using the ref attribute.

```js
<Component ref={this.inputElementRef} />
```

Now to access the current element, we need to use the **current** property of the reference so React knows to get the 'current' one:

```js
componentDidMount() {
  this.inputElementRef.current.focus();
}
```

### Refs with React Hooks: useRef

We can somewhat use Method 2 above in a function-based component to make use of refs, outlined below using the **useRef hook:**

```js
// Import useRef
import React, { useEffect, useRef } from "react";

// Setup the reference for the button / item you want to get reference to
const toggleBtnRef = useRef();

// Set the ref attribute to the reference created earlier
<button ref={toggleBtnRef} />;

// Access the element using the current property:
toggleBtnRef.current.click();
```

In our code example we used the click method inside our **useEffect** hook method, so that way the elements will have completely rendered to the page before we attempted anything.

### Understanding Prop Chain Problems

This section addresses the issue of passing props endlessly from one component to another. When you need to pass some data through 'layers' of components e.g. Layer A -> Layer C, we probably don't want to have to go through the additional layer, B, to get to C. We don't care about the data here, we just need to transport it to C. This is what the **Context API** solves.

### Using the Context API

The context is like a 'globally' available JavaScript object. It can also be of any other datatype.

Create a new folder called context with a new .js file 'auth-context.js'

Setup the Context API as follows:

```js
import React from "react";

const authContext = React.createContext();

export default authContext;
```

We can pre-set any properties we want in our Context object as well:

```js
const authContext = React.createContext({
  auth: false,
  login: () => {},
});
```

Then you import this component where you want to use it, and **wrap** any other component that needs access to the context. We must do this in the following way:

```js
<AuthContext.Provider
  value={{
    auth: this.state.auth,
    login: this.loginHandler,
  }}
>
  {/* Other components here */}
</AuthContext.Provider>
```

Now we have set these values, any nested components can access these values. Make sure to import the context component in other components too.
Example:

```js
render() {
  return (
    <AuthContext.Consumer>
    {(context) => return (
      //...
    )}
    </AuthContext.Consumer>
  )
}
```

We must return the AuthContext.Consumer component, which actually takes a function first which **thenn** returns the desired JSX we wanted. The function provides the 'context' that we want to access.

### contextType & useContext()

#### contextType - class based components

React 16.6 introduced another way of using context - **contextType**:

```js
// Must be accessed as a static property with the name contextType, and then set it to the imported context class we created earlier:
static contextType = AuthContext;

// Then to access any data from the context, we use this.context
console.log(this.context.auth);
```

### useContext() - function based components

We can use the **useContext** hook to access context in function based components. We import **useContext** first before we are able to do anything.

```js
const authContext = useContext(AuthContext);
console.log(authContext.auth);
```

### Wrap Up / Useful Resources & Links

This module was very knowledge heavy - can be seen as a reference module. Features in this module to be used in later areas.

#### Links

[More on useEffect](https://reactjs.org/docs/hooks-effect.html)

[State & Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)

[Refs](https://reactjs.org/docs/refs-and-the-dom.html)

## Section 8: A Real App: The Burger Builder (Basic Version)

### Planning an App in React - Core Steps

There are **three main areas** we could focus on when planning a new app:

1. Component Tree / Structure: How we lay out alll of the components
2. Application State: The state data we may need in the app
3. Components vs Containers: Determine which Components need to handle state (components) and which are there for presentation (containers)

### Planning our App - Layout and Component Tree

Define the app and what it should be able to do. For this app, a user should be able to add a set of ingredients to build a burger, that they go on to purchase.

- Header with buttons and logo
- Section to actually build the burger: render list of ingredients which can be added / removed
- Checkout button

[Layout and Component Tree](https://prnt.sc/spuxqq)

### Planning the State

- Ingredients: which the user has added: JS object with the ingredient as the key and the quantity by value
- Purchased: Boolean whether or not the user has bought the burger
- totalPrice: Keep track of the total cost of the burger

This state should be managed in the **BurgerBuilder** section rather than the root App level as this state is only linked to this section of the site. Later if we add more pages, this information may not be relevant.

[Section 8: Burger Builder App Repo](https://github.com/yusufcodes/react-burgerbuilder)

## Section 9: Reaching out to the Web (Http / Ajax)

### Understanding HTTP requests in React

When React sends a HTTP request to a server, the response is a **JSON** response (often).

### Understanding Our Project and Using Axios

Instructor introduces a blog project to practice using HTTP - a [fake REST API](www.jsonplaceholder.typicode.com) will be used to mock some data for blog posts.
Recommendation to use **Axios** to make it easy to perform HTTP requests.

### Creating a HTTP request to GET data

The best component lifecycle to place a HTTP request is **componentDidMount()** to **fetch** the data. We do not render from this data in this method just yet so we avoid trigerring a re-render.

Axios uses Promises so we can chain **.then()** to decide what to do with the response we receive.

### Transforming Data

In the **then** block of the AJAX request, you can manipulate the data you receive to your liking. This can be useful if, for example, you want to limit the number of responses you want to use from a request, or add / remove fields of data that have been returned.

### Making a selectable Post

The idea in this little section is to load the currently selected post information into some forms below it. I want to outline the steps he takes for future use in similar usecases:

- Add an **onClick** attribute to the **Post** component
- In the main **Blog** component, set up this click listener and send this method as a prop
- Pass in the received ID from the AJAX request to the click listener
- Add a new state variable to hold the currently selected Post ID
- Pass in this state variable to the component where we want to load the post
  
Now, in the component we want to load the post, we need to make a new AJAX request to **get the post by ID.** This is done in the **componentDidUpdate()** lifecycle hook.

To actually load the contents of the post, first we chain .then() and use setState. But in the code lower down, we must check if this value is actually **assigned** using an if block.

### Handling Errors Locally

The **catch** blog in Promises can be used to handle errors from requests using this such as Axios.

### Adding Interceptors to Execute Code Globally

Axios has an **interceptors** object which can be chained with 'request.use()' and 'response.use()', taking in a function with parameters request/response, and then error. In these methods we can globally 'intercept' the request / response to edit it in some way, and / or handle an error. I did **not** add this to my code but it is here as a reference.

### Useful Links / Resources

[Axios Docs](https://github.com/axios/axios)

## Section 10: Burger Builder Project: Accessing a Server

This section was completed in the **react-burgerbuilder** repo as it was just an addition to this project. No notes taken as it is applying the theory seen in Section 9.

## Section 11: Multi-Page-Feeling in a Single-Page-App: Routing