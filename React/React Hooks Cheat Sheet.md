<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# React Hooks Cheat Sheet

React Hooks are special functions that let you "hook into" React features like state, lifecycle, and context from function components. Below is a summary of the most commonly used built-in hooks, with brief explanations and examples.

---

## **1. useState**

Manages state in functional components.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;
    </div>
  );
}
```


---

## **2. useEffect**

Performs side effects in function components (like data fetching, subscriptions, or manually changing the DOM).

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;;
}
```


---

## **3. useContext**

Accesses the value of a React context directly.

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    &lt;button style={{ background: theme.background, color: theme.color }}&gt;
      I am styled by theme context!
    &lt;/button&gt;
  );
}
```


---

## **4. useRef**

Creates a mutable object which persists for the lifetime of the component. Commonly used to access DOM elements directly.

```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputEl = useRef(null);
  const onButtonClick = () =&gt; {
    inputEl.current.focus();
  };
  return (
    &lt;&gt;
      &lt;input ref={inputEl} type="text" /&gt;
      &lt;button onClick={onButtonClick}&gt;Focus the input&lt;/button&gt;
    
  );
}
```


---

## **5. useReducer**

An alternative to useState for complex state logic.

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    &lt;&gt;
      Count: {state.count}
      &lt;button onClick={() =&gt; dispatch({ type: "increment" })}&gt;+&lt;/button&gt;
    
  );
}
```


---

## **6. useCallback**

Returns a memoized callback function, useful for passing stable callbacks to optimized child components.

```jsx
import React, { useState, useCallback } from "react";

const MyComponent = () =&gt; {
  const [count, setCount] = useState(0);

  const increment = useCallback(() =&gt; setCount((c) =&gt; c + 1), []);
  return &lt;button onClick={increment}&gt;Increment&lt;/button&gt;;
};
```


---

## **7. useMemo**

Returns a memoized value, useful for optimizing expensive calculations.

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComponent({ num }) {
  const expensiveValue = useMemo(() =&gt; {
    // Expensive calculation here
    return num * 2;
  }, [num]);
  return <div>{expensiveValue}</div>;
}
```


---

## **8. useLayoutEffect**

Like useEffect, but fires synchronously after all DOM mutations. Useful for reading layout from the DOM and synchronously re-rendering.

```jsx
import React, { useLayoutEffect, useRef } from "react";

function LayoutEffectExample() {
  const ref = useRef();
  useLayoutEffect(() =&gt; {
    // Measure or mutate DOM here
    ref.current.style.background = "yellow";
  }, []);
  return <div>Hello</div>;
}
```


---

## **9. useImperativeHandle**

Customizes the instance value that is exposed to parent components when using `ref`.

```jsx
import React, { useImperativeHandle, useRef, forwardRef } from "react";

const FancyInput = forwardRef((props, ref) =&gt; {
  const inputRef = useRef();
  useImperativeHandle(ref, () =&gt; ({
    focus: () =&gt; {
      inputRef.current.focus();
    }
  }));
  return &lt;input ref={inputRef} /&gt;;
});
```


---

## **10. useId**

Generates a unique ID for accessibility attributes and server rendering.

```jsx
import React, { useId } from "react";

function Form() {
  const id = useId();
  return (
    &lt;&gt;
      &lt;label htmlFor={id}&gt;Name&lt;/label&gt;
      &lt;input id={id} type="text" /&gt;
    
  );
}
```


---

## **Other Advanced Hooks**

- **useDebugValue**: Displays a label for custom hooks in React DevTools.
- **useDeferredValue**: Defer re-rendering of non-urgent updates.
- **useInsertionEffect**: For injecting styles before DOM mutations.
- **useSyncExternalStore**: For subscribing to external stores.
- **useTransition**: For marking state updates as transitions (for concurrent rendering).

---

## **Rules of Hooks**

- Only call hooks at the top level (not inside loops, conditions, or nested functions).
- Only call hooks from React function components or custom hooks.
- Hooks must be called in the same order on every render.[^6][^9]

---

## **Custom Hooks**

You can create your own hooks to reuse stateful logic across components.

```jsx
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() =&gt; {
    const handleResize = () =&gt; setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () =&gt; window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```


---

This cheat sheet covers the essential React hooks with examples for each. For a full list and details, refer to the [official React documentation][^2][^5].

<div style="text-align: center">⁂</div>

[^1]: image.jpg

[^2]: https://react.dev/reference/react/hooks

[^3]: https://legacy.reactjs.org/docs/hooks-overview.html

[^4]: https://www.freecodecamp.org/news/full-guide-to-react-hooks/

[^5]: https://legacy.reactjs.org/docs/hooks-reference.html

[^6]: https://www.w3schools.com/react/react_hooks.asp

[^7]: https://www.freecodecamp.org/news/react-hooks-cheatsheet/

[^8]: https://www.uxpin.com/studio/blog/react-hooks/

[^9]: https://builtin.com/software-engineering-perspectives/react-hooks

[^10]: https://daily.dev/blog/react-hooks-explained-simply

[^11]: https://payloadcms.com/docs/admin/react-hooks

[^12]: https://www.youtube.com/watch?v=6wf5dIrryoQ

[^13]: https://dev.to/abhisheknaiidu/10-react-hooks-explained-3ino

[^14]: https://legacy.reactjs.org/docs/hooks-intro.html

[^15]: https://www.telerik.com/kendo-react-ui/react-hooks-guide/

[^16]: https://blog.ohansemmanuel.com/react-hooks-documentation-easy-to-read/

