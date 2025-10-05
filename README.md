# EPISODE - 01 & 02

### CDN (Content Delivery Network):

    A globally distributed network of servers that delivers cached
    web content (HTML, CSS, JS, Images) from the nearest server to the user.

### Library vs Framework:

    - A library is a set of reusable functions that I call directly to solve specific problems,
    so my application code controls the flow.
    - A framework on the other hand provides a structure and controls the overall flow of the
    application, calling my code at specific points, this is called the **Inversion of Control**.

### Parcel:

    - A zero configuration web application bundler.
    - It takes project files, processes them and bundles them into optimized files for the broswer.
    **Features:**
        - Dev Build
        - Local Server
        - HMR - Hot Module Replacement
        - File Watching Algorithm - written in C++
        - Tree Shaking - remove unused code
        - Caching - faster builds
        - Image Optimization
        - Minification
        - Bundling
        - Compress
        - Content Hashing
        - Code Spliting
        - Differential Bundling - supports older browsers
        - Diagonstic - beautiful errors
        - Error Handling
        - HTTPs
        - Reliable Caching - everything parcel does cached
        - Different Development and Production Bundles

### Caret ^

    - minor updates i-e 2.16.0 -> 2.16.1

### Tilde ~

    - major updates i-e 2.16.0 -> 3.16.0

# EPISODE - 03

### JSX:

- JSX is not HTML in JavaScript.
- It is HTML-Like or XML-Like syntax.
- It is transpiled before it reaches the JS engine and it is done by **PARCEL** with the help of **BABEL**.

### Babel:

- Babel is a JavaScript compiler that converts modern JavaScript (ES6+ or JSX) into older
  versions of JavaScript so that browsers can understand it.
- In short Babel makes new JS code backward-compatible for all browsers.

🪄 JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

### React Components:

1. Class Based Components - Old way to write React Components
2. Functional Components - New way to write React Components

### React Functional Components:

- A functional that returns some peice of JSX code.
- First Letter of Component name must be Capital letter.
- At the end of the day Functional Components are normal JavaScript functions.


### Component Composition:
- A Component inside another component.


# EPISODE - 04

### PROPS:
- Props short for properties.
- A way to pass data from a parent component to a child component in React.
- They make components reusable and dyanmic.
- Props are Read-Only - You can not modify props inside a component.


### Config Driven UI:
- Building a user interface based on  data (configuration) instead of hardcoding it in your component.
- **In Short:** The UI changes when the config (JSON/Object) changes.
- No need to change the React code itself.


