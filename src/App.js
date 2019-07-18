// import dependencies
import axios from "axios";
import React, { useState, useEffect } from "react";

// import components
import Caption from "./components/Caption";
import Date from "./components/Date";
import Header from "./components/Header";
import Headline from "./components/Headline";
import ImageBordered from "./components/ImageBordered";
import Video from "./components/Video";

// import stylesheet
import "./stylesheets/main.scss";

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
      <Header />
      <Headline headline={media.title} />
      <Date date={media.date} />
      {media.media_type !== "video" ? (
        <ImageBordered img={media.url} title={media.title} />
      ) : (
        <Video video={media.url} title={media.title} />
      )}
      <Caption caption={media.explanation} />
    </div>
  );
}

export default App;
