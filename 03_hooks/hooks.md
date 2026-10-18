# Why do we need hooks 

Before Hooks, React had a major distinction:

    Function components → mainly used for UI
    Class components → used when you needed state, lifecycle methods, etc.

Hooks made it possible to use those capabilities directly inside function components.

## 1. The problem Hooks solved

```javascript

function Counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}

```

You might expect clicking the button to change 0 → 1.

But it doesn't.

Why?

Because changing a normal JavaScript variable does not tell React to render the component again.

That's where useState comes in:

``` javascript 

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}
```

Now React knows:

"The state changed. I need to render this component again."
So the first big reason we need Hooks is:


## 2. Hooks allow function components to manage state and interact with React's rendering system.

There are several things a React component may need to do:

    Remember data → useState
    Run something after rendering → useEffect
    Access a DOM element → useRef
    Share data without passing props everywhere → useContext
    Optimize expensive calculations → useMemo
    Optimize function references → useCallback
    Build reusable logic → custom Hooks

## 3. Why can't React just use normal variables?
This is one of the most important concepts to understand.

Consider:
``` javascript 
function Counter() {
  let count = 0;

  function increment() {
    count++;
  }

  return <button onClick={increment}>{count}</button>;
}

```
There are actually two problems.

Problem 1: React doesn't know the variable changed
When you do:
``` javascript
count++;
```
that's just JavaScript.

React isn't notified.

Problem 2: React function components can run again
When React renders:

Counter()   
the function executes again.

So:
``` javascript
let count = 0; 
```
gets created again.

That's why React provides:
``` javascript
const [count, setCount] = useState(0);
```
React essentially manages the state for you across renders.