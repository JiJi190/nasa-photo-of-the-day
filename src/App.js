import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import "semantic-ui-css/semantic.min.css"
import { Segment } from 'semantic-ui-react'


const NasaPic = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    .then(res => {
      setPhotos(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [])



  return (
    <div className="App">
      <h1>Photos of the Day!</h1>
      <h2>{photos.title}</h2>
      <img src={photos.url} alt="nasa pic" />
      {/* <p>{photos.explanation}</p> */}
      <Segment raised>{photos.explanation}</Segment>

    </div>
  );
}

export default NasaPic;
