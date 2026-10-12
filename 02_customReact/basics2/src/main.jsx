import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MyApp(){
  return(
    <div>Raaz Kumar</div>
  )
}

// This will not work here 

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

// Method 1:
const reactElement1 = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

// Method 2
const reactElement2 = React.createElement(  // first -> tag, second -> properties within object, third -> text content
  'a',
  {href: "https://www.google.com", target: "_blank"},
  "click me to visit google",
)

createRoot(document.getElementById('root')).render(
  
  //<MyApp />
  //MyApp()  // will also work

  //reactElement1
  reactElement2
  
)
