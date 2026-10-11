
function App() {
  const username = "Surjeet"; // inject variable within {}
  const a=10;
  const b=20;
  return (
    <div>
      <h1>Hello {username}</h1>
      <p>The sum is: {a+b}</p>

      {/* <p>This is not allowed: {if(condition){}}</p> */}
    </div>   
  )
}

export default App

// function name should start from capital letter
// function return only single element
// single page application --> there is only one html document 