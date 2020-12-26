import React from "react"

function Potato({name}){
  return <h3>I Like {name}</h3>;
}

function App() {
  return (
  <div>
    <h1>Hello!!</h1>
    <Potato name="kimchi" something={true} />
  </div>
  );
}

export default App;
