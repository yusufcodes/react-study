# react-study

### Introduction

This repo will contain the code and notes (below) for the Udemy course: [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux).

**Course Started:** 27/04/20

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

In these first couple of lectures, we move a lot of logic / UI out of the main App.js into their own components. App.js is now only responsible for handling and manipulating the state. Through moving other UI / areas of the app we now have a better project structure.

### Comparing Stateless and Stateful Components

App is a stateful component where state is being managed.

Other components such as Person, are referred to as Stateless or Presentational.

We should have mostly dumb / presentational / stateless components to keep the app more manageable: so we are only manipulating state in a limited number of places.

### Class-based vs Functional Components

![Class vs Functional Components](https://prnt.sc/so1yxl)
[Credit: Maximilian Schwarzmüller](https://www.udemy.com/user/academind/)

### Class Component Lifecycle Overview

These are only available in class-based components. There are a number of methods that can be added to a class-based component, this is outlined below in a set of stages:
_Note: This has nothing to do with React Hooks_

**Component Lifecycle - Creation**

- constructor(props) ➡️ initialisation such as setting up state
  _Note:_ Must call **super(props)** so that the constructor of the _Component_ class is also executed.
- getDerivedStateFromProps(props, state) ➡️ Synchronising state
- render() ➡️ Get JSX code ready to be rendered
- _Render Child Components from the render() method_
- componentDidMount() ➡️ runs once other components render, here you can do common things such as http requests etc. however do **not** update the state here, as it will cause a re-render

**TO DO: Read up on this further, all I see is that they run one after the other but not sure when to use / why - maybe this will become clear later on? **

### Component Update Lifecycle (for props Changes)

### Component Update Lifecycle (for state Changes)

### Using useEffect() in Functional Components

### Controlling the useEffect() Behavior

### Cleaning up with Lifecycle Hooks & useEffect()

### Cleanup Work with useEffect() - Example

### Using shouldComponentUpdate for Optimization

### Optimizing Functional Components with React.memo()

### When should you optimize?

### PureComponents instead of shouldComponentUpdate

### How React Updates the DOM

### Rendering Adjacent JSX Elements

(Windows Users Must Read)

### Using React.Fragment

### Higher Order Components (HOC) - Introduction

### Another Form of HOCs

### Passing Unknown Props

### Setting State Correctly

### Using PropTypes

### Using Refs

### Refs with React Hooks

### Understanding Prop Chain Problems

### Using the Context API

### contextType & useContext()

### Wrap Up / Useful Resources & Links
