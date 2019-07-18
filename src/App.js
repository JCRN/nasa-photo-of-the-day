// import dependencies
import axios from "axios";
import React, { useState, useEffect } from "react";

// import components
import "./components/Caption";
import "./components/Date";
import "./components/Headline";
import "./components/Image";

// import stylesheet
import "./index.scss";

function App() {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=PcVpaedF6F77PzIsMXSmtdGVbICPmYJVGGez97Xg`
      )
      .then(result => {
        setMedia(result.data);
      })
      .catch(error => console.log("ERROR: ", error));
  }, []);
  console.log(media);
  return (
    <div className="App">
      <p>NASA Images</p>
      {/* <Headline headline={media.data.title} /> */}
    </div>
  );
}

export default App;
