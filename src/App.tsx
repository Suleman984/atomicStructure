import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Splitscreen } from './Splitscreen';
const LeftHandComponent:React.FC=()=>{
  return <h1>Left Hand Component</h1>
}
const RightHandComponent:React.FC=()=>{
  return <h1>Right Hand Component</h1>
}
function App() {
  return (
    <div className="App">
      <Splitscreen left={LeftHandComponent} right={RightHandComponent}/>
    </div>
  );
}

export default App;
