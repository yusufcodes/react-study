# react-study

## Section 3: Understanding the Base Features & Syntax

### Limitations of JSX

A restriction on  JSX is the use of different attribute names to real HTML. For example, we can't use 'class' but we must use 'className'. This is because class is a reserved keyword in JavaScript, so cannot be used. This brings up the important point that: **this is JSX, not HTML.** For this reason, although they look very similar, there are still some differences.

Also, everything must be wrapped in **one div** when rendering a component. This could also be seen as a limitation, but is standard practice when writing React code.

### Creating a Functional Component

#### Introduction to Components

A component is a function which returns some JSX, that's it. React apps are based on the combination of some components which combine together to form some site. React apps can be described as a **component tree**, where there is one *root* component, like App, and then any number of other components nested inside this root component (child components).

As mentioned earlier, a component must return some JSX code - this is so that React knows what sort of real HTML to output to the DOM in the end.

#### Types of components

Below are examples of two ways to create a component, with the first way being the best way to do this.

1. Functional Components (**best practice**)
AKA: Presentational, Dumb, or Stateless components
```js
const cmp = () => { return <div>some JSX</div> };
```
2. Class-based Components 
AKA: Containers, Smart, or Stateful components
```js
class Cmp extends Component {
    render() {
        return <div>some JSX</div>
        }
    }
```

#### How to create a component

Create a new folder with the name of the component, starting with a capital letter

Create a .js file with the same name as the folder

Import React at the top of the file:
```js
import React from 'react';
```

Write the function which will be returning the desired JSX. Below is a bare-bones, basic example.
```js
const person = () => {
    return <p>I'm a Person!</p>
}

```

End the file with an export, so that the component may be used in your main React app
```js
export default person;
```

In your main app file, import the new component:
```js
import Person from './Person/Person';
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

