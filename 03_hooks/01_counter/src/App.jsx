import { useState } from 'react'

// function App() {

//   let count=0;

//   function inc(){
//     console.log(count)
//     count=count+1
//   }
//   return (
//     <>
//     <p>Counter: {count}</p>
//     <button onClick={inc}>Add+</button>
//     </>
//   )
// }


function App() {

  const [count, setCount] = useState(0);

  function inc(){
    return setCount(count+1)
  }

  function dec(){
    return setCount(count-1)
  }
  
  return (
    <>
    <p>Counter : {count}</p>
    <button onClick={inc}>ADD+</button>
    <br /> <br />
    <button onClick={dec}>SUB-</button>
    </>
  )
}


export default App
