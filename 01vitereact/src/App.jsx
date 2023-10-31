import Chai from "./chai"

function App() {
  const username = "chai aur code"
  return (
    //  this is called fragment
    <>
      <Chai />
      {/* {username} this is evaluation expression  */}
      <h1>React Demo {username}</h1>
      <p>Test para</p>
    </>
  )
}

export default App
