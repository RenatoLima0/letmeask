// type ButtonProps = {
//   children?: string,
// }

import { useState } from "react";

// export function Button (props: ButtonProps) {
export function Button () {
  // let counter = 0;
  const [counter, setCounter] = useState(0)
  
  function increment() {
    // counter += 1;
    setCounter(counter + 1)
    console.log(counter);
  }

  return (
    // <button>{props.children || 'Default'}</button>
    <button onClick={increment}>{counter}</button>
  )
}
