import { useState, useEffect } from "react";
import "./App.css";
import "./main.css";




function App(){
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});


useEffect(() => {
  // Fetch data on component mount
  getListings();
}, []);
//  useEffect(()=>{
// //   fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((json)=>setData(json));
//  }, [])




function getListings(){
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  }, 2000);
  fetch("http://localhost:8080/listings", {method: "GET"})
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      console.log(json._embedded.listingList);
      setData(json._embedded.listingList);
    });
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
  alert("Signed in!");
}


function toggleItem(listingId) {
  setExpandedItems((prevExpandedItems) => ({
    ...prevExpandedItems,
    [listingId]: !prevExpandedItems[listingId],
  }));
}




  return (
    <div className="container">
 
  <button className="btn" onClick={getLogin}>Sign in</button>




  <h1 className="title">Your Next Nest</h1>




  <button className="btn" onClick={getListings}>For Renters: Get Listings</button>




  {/* <button className="btn" onClick={getTenants}>For Leasers: Get Tenants</button> */}
  {loading ? (
        <h2 className="mt-2">LOADING...</h2>
      ) : (
        <ul>
          {data.map((listing) => (
            <li className="alert alert-info" key={listing.id}>
              <div onClick={() => toggleItem(listing.id)}>
                {listing.id}. {listing.name}
              </div>
              {expandedItems[listing.id] && (
                <div>
                  <p>
                  {listing.address}<br></br>
                  </p>
                  {listing.address}
                </div>
              )}
              <button onClick={() => toggleItem(listing.id)}>
                {expandedItems[listing.id] ? "-" : "+"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;