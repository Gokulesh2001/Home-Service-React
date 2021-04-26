import React, { useEffect,useState } from "react";
import firebaseDb from "../Firebase";
import Display from "./Display";

const ProviderDetails = () => {
  var [posts, setPosts] = useState({});
  
  useEffect(() => {
    firebaseDb
    .database()
    .ref("Address/")
    .on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setPosts({ ...snapshot.val() });
        
      }
    });
  }, []);


  return (
    <div>
     <h1>Provider Details</h1>
      {Object.keys(posts).map((a) => (
        <div>
          
          <Display
          fname={posts[a].FirstName}
          lname={posts[a].LastName}
          email={posts[a].Email}
          zip={posts[a].Zip}
          address={posts[a].Address} 
             city={posts[a].City}
          service={posts[a].Service}
          
          />
        </div>
      ))}
    </div>
  );
};

export default ProviderDetails;
