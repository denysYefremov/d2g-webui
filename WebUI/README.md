#WebUI

##Technologies:

#####_JavaScript_

* React
* Redux
* ES6

#####_Styles_
* Less

## React documentation

* [Introduction](https://facebook.github.io/react/docs/hello-world.html)
* [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [JSX In Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [State and Lifecycle](https://facebook.github.io/react/docs/state-and-lifecycle.html)
* [Handling Events](https://facebook.github.io/react/docs/handling-events.html)
* [Composition vs Inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)
* [Refs and the DOM](https://facebook.github.io/react/docs/refs-and-the-dom.html)
* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

## Redux documentation

* [Introduction](http://redux.js.org/docs/introduction/index.html)
* [Basics](http://redux.js.org/docs/basics/index.html)
* [Advanced](http://redux.js.org/docs/advanced/index.html)
* [Recipes](http://redux.js.org/docs/recipes/index.html)
* [Troubleshooting](http://redux.js.org/docs/Troubleshooting.html)
* [Glossary](http://redux.js.org/docs/Glossary.html)
* [API Reference](http://redux.js.org/docs/api/index.html)

#### Learn Redux from Its Creator

[Getting Started with Redux](https://egghead.io/series/getting-started-with-redux) is a video course consisting of 
30 videos narrated by Dan Abramov, author of Redux. It is designed to complement the 
“Basics” part of the docs while bringing additional insights about immutability, testing, 
Redux best practices, and using Redux with React. **This course is free and will always be.**

#### Additional articles 

>**[HOC (Higher-Order Components)](https://facebook.github.io/react/docs/higher-order-components.html)**

>**[Mixins Are Dead. Long Live Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.wyfzsauqe)**

##Additional libraries 
###Included

**_[immutable](https://facebook.github.io/immutable-js/)_** - Immutable data cannot be changed once created, 
leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic.

**_[react router](https://github.com/ReactTraining/react-router/)_** - Is a complete routing library for React.

**_[react-router-redux](https://github.com/reactjs/react-router-redux/)_** - Helps you keep bit of state in sync with your Redux store.

**_[reselect](https://github.com/reactjs/reselect/)_** - Simple “selector” library for Redux
* Selectors can compute derived data, allowing Redux to store the minimal possible state.
* Selectors are efficient. A selector is not recomputed unless one of its arguments change.
* Selectors are composable. They can be used as input to other selectors.

**_[redux-thunk](https://github.com/gaearon/redux-thunk/)_** - Redux Thunk middleware allows you to write action 
creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

**_[babel](https://babeljs.io/)_** - Has support for the latest version of JavaScript through syntax 
transformers. These plugins allow you to use new syntax, right now without waiting for browser support.

**_[eslint](http://eslint.org/)_** - The pluggable linting utility for JavaScript and JSX

**_[airbnb](https://github.com/airbnb/javascript/)_** - A mostly reasonable approach to JavaScript. ESLint rules, including ECMAScript 6+ and React.

**_[webpack](https://webpack.github.io/)_** - Is a tool to build JavaScript modules in your application.

###May be included

**_[redux form](http://redux-form.com/)_** - primarily consists of four things:                                           
* A Redux reducer that listens to dispatched redux-form actions to maintain your form state in Redux.
* A React component decorator that wraps your entire form in a Higher Order Component (HOC) and provides functionality via props.
* A Field component to connect your individual field inputs to the Redux store.
* Various Action Creators for interacting with your forms throughout the application.

**_[flow](https://flowtype.org/)_** - A static type checker for JavaScript
 
Flow can catch common bugs in JavaScript programs before they run, including:
* silent type conversions,
* null dereferences,
* and the dreaded undefined is not a function.