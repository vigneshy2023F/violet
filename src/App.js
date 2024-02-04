// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import "./App.css";
import "./main.css";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         Deployment is happening here
//       </header>
//     </div>
//   );
// }

function App(){
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);

 useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((json)=>setData(json));
 }, [])

function getListings(){
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  }, 2000);
//setData == console.log
  //fetch("http://localhost:8080/tenants", {mode: 'no-cors'}).then((response)=>response.json()).then((json)=>setData(json));
  fetch("http://localhost:8080/tenants", {method: "GET"}).then((response)=>response.json()).then((json)=>console.log(json));
  //fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((json)=>setData(json));
}

// function getTenants(){
//   setLoading(true);
//   setTimeout(()=>{
//     setLoading(false);
//   }, 2000);
//   //fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((json)=>console.log(json));
//   fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((json)=>setData(json));
// }

function getLogin(){
  alert("sign in");
}

  return (
    <div className="container">
  
  <button className="btn" onClick={getLogin}>Sign in</button>



  <h1 className="title">Your Next Nest</h1>

  <button className="btn" onClick={getListings}>For Renters: Get Listings</button>

  {/* <button className="btn" onClick={getTenants}>For Leasers: Get Tenants</button> */}
  
  {loading ? <h2 className="mt-2">LOADING...</h2> :  ( <ul>{data.map((post)=>(<li className="alert alert-info" key={post.id}>
    <div><div className="mar-1">{post.id}</div></div>
    <h3>{post.title}</h3>
    <p className="text-gray">{post.body}</p>
  </li>))}</ul>)}

  
  

  </div>
  
  );
}

export default App;