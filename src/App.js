import { useState } from "react";
import "./App.css";
import "./main.css";

import Listing from "./Listing"




function App(){
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);

  function getListings(){
    setLoading(true);
    fetch("http://localhost:8080/listings", {method: "GET"})
      .then((response)=>response.json())
      .then((json)=>{
        setData(json._embedded.listingList);
        setLoading(false);
      });
  }

  function getLogin(){
    alert("Signed in!");
  }

  return (
    <div className="container">
      <button className="btn" onClick={getLogin}>Sign in</button>
      <h1 className="title">Your Next Nest</h1>
      <button className="btn" onClick={getListings}>For Renters: Get Listings</button>

      {loading ? (
        <h2 className="mt-2">LOADING...</h2>
      ) : (
        <ul>
          {data.map((listing) => (
            <li className="listing-container" key={listing.id}>
              <Listing
                data={listing}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;