# react-study

## Section 3: Understanding the Base Features & Syntax

### Limitations of JSX

A restriction on JSX is the use of different attribute names to real HTML. For example, we can't use 'class' but we must use 'className'. This is because class is a reserved keyword in JavaScript, so cannot be used. This brings up the important point that: **this is JSX, not HTML.** For this reason, although they look very similar, there are still some differences.

Also, everything must be wrapped in **one div** when rendering a component. This could also be seen as a limitation, but is standard practice when writing React code.

### Creating a Functional Component

#### Introduction to Components

A component is a function which returns some JSX, that's it. React apps are based on the combination of some components which combine together to form some site. React apps can be described as a **component tree**, where there is one _root_ component, like App, and then any number of other components nested inside this root component (child components).

As mentioned earlier, a component must return some JSX code - this is so that React knows what sort of real HTML to output to the DOM in the end.

#### Types of components

Below are examples of two ways to create a component, with the first way being the best way to do this.

1. Functional Components (**best practice**)
   AKA: Presentational, Dumb, or Stateless components

```js
const cmp = () => {
  return <div>some JSX</div>;
};
```

2. Class-based Components
   AKA: Containers, Smart, or Stateful components

```js
class Cmp extends Component {
  render() {
    return <div>some JSX</div>;
  }
}
```

#### How to create a component

Create a new folder with the name of the component, starting with a capital letter

Create a .js file with the same name as the folder

Import React at the top of the file:

```js
import React from "react";
```

Write the function which will be returning the desired JSX. Below is a bare-bones, basic example.

```js
const person = () => {
  return <p>I'm a Person!</p>;
};
```

End the file with an export, so that the component may be used in your main React app

```js
export default person;
```

In your main app file, import the new component:

```js
import Person from "./Person/Person";
```

Now, you can add the component into your main rendered content using a self-closing tag, with its name written inside the tag:

```js
... // more code
<Person />
... // more code
```

#### Outputing Dynamic Content

Inside the JSX, you can use curly braces { ... } to enclose basic, single-line JavaScript thsat you want to run, to create dynamic content.

#### Working with Props

Following on from the Person component we had earlier, it would be handy to be able to define your own content for each 'Person' component you use. This is shown below:

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

Note: This is a functional based component - in a class based component, we would use '**this.props**' to access the props object.

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

#### Handling Events with Methods

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

#### Manipulating the State

Linked to the previous section, this section will show you how to dynamically change the data displayed to the user through manipulating the state. This is done by a onClick event.

**setState:** A method which takes in an object, which contains any updated data to be added to the state object. It will _merge_ anything defined here with what already exists in the state, meaning nothing is lost. React will then **re-render** the area of the DOM which has been changed to reflect this.

```js
this.setState({
  people: [
    { name: "Yusuf Ahmed", age: 20 },
    { name: "Manu", age: 29 },
    { name: "Steph", age: 27 },
  ],
});
```

#### Using the useState() Hook for State Manipulation

_Note:_ Since React 16.8, you can use **functional components** to manage state. This wasn't a thing before, and is possible because of **React Hooks.** Course note - instructor briefly demonstrates this here, but for the rest of the course will use the traditional Class Components to approach state management. (Separate units on React Hooks are in this course).

We started by converting the Class Based 'App' component to be Function Based, and then imported the **useState** hook.

**Difference between setState (class based component), and new function returned from hook to set the stage (function based component):**
setState will merge any existing state data with what we pass in, whereas the new function returned by the useState hook **will over-write** any data in our state.

To over-come this, you can use **multiple useState()** calls to manage different pieces of data. That way, setting the state of one piece of data will not effect other bits of data which may not have been updated.

#### Stateful and Stateless Components

**Stateful Components (AKA: Containers, Smart)**: A component which manages come form of state. For example, currently my **App** main component handles some kind of state.

**Stateless Components (AKA: Presentational, Dumb):**: A component which has **no state** attached to it. For example, my **Person** component.

It is better to create more stateless components, which are there for presentational purposes, as it makes the app easier to manage. It means it is easy to locate where data is dynamically changing, in a certain place.

#### Passing Method References between Components

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

#### Adding Two Way Binding

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

#### Adding Styling with Stylesheets

For a given component, you must create the .css file you want and import it at the top of the file. This will allow for any styles to be used.

It can also be done **inline**, by setting your styles within an **object** using JavaScript access to CSS properties, and then using the style attribute on a given component to link to the styles.
