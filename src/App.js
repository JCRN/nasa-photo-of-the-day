import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.scss";

function App() {
  const [media, setMedia] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=PcVpaedF6F77PzIsMXSmtdGVbICPmYJVGGez97Xg`
      )
      .then(result => {
        console.log("result:", result);
        setMedia(result.data);
      })
      .catch(error => console.log("ERROR: ", error));
  }, []);
  console.log("media line 29: ", media);
  return (
    <div className="App">
      {console.log(media)}
      <p>Test This Mess</p>
    </div>
  );
}

export default App;
