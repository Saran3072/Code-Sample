import React, { useState } from "react";
import "./PAnnounce.css";
import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import { ButtonPAnnounce } from "./ButtonPAnnounce";
// import InputImage from "./InputImage";

function PAnnounce() {
  const [state, setState] = useState(false);
  let url =
    "https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf";
  const [data, setdata] = useState("");
  let urln = window.location.href.split("/");
  var option = urln.pop();
  var location = urln.pop();
  function APIcall(month) {
    console.log(location);
    var backend_URL = `http://localhost:8000/Districts/Predictions/${option.toUpperCase()}/${location}/${month}`;
    axios
      .get(backend_URL)

      .then(function (response) {
        console.log(response);
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="announce-page">
        <video src="/videos/video3.mp4" autoPlay loop muted></video>
        <h1 className="location"></h1>
        <div className="announce-container">
          <div className="announce-left">
            <h2 className="headannounce">SEARCH</h2>
            <div className="announce-bar">
              <textarea style={{marginBottom: '20px'}} name="" id="" cols="150" rows="20"></textarea><br />
              <ButtonSearch
                className="month-btn"
                buttonStyle="btn1--primary"
                buttonSize="btn1--large"
                path = 'NIZAMABAD'
              >
                TWEET
              </ButtonSearch>
            </div>
          </div>
          {/* <div className="announce-right"> */}
          {/* <h2>PREDICTIONS</h2> */}
          {/* <div className="value"> */}
          {/* <input type="text" name="name" /> */}
          {/* {data.AQI_bucket_calculated && <> */}
          {/* AQI:{data.AQI_calculated}<br/> */}
          {/* Purity Level:{data.AQI_bucket_calculated}<br/> */}
          {/* <div className="image-contain"> */}
          {/* <img src="images/AQI.jpg"  width={250} height={200}></img> */}
          {/* <img src="images/aqilevel.jpg"  width={250} height={200} ></img> */}
          {/* </div> */}
          {/* </>} */}
          {/* {data.HeatWave && <> */}
          {/* Occurence: {data.HeatWave}<br/> */}
          {/* Maximum Temperature: {data.Max_Temp}<br/> */}
          {/* <div className="image-contain"> */}
          {/* <img src="images/heatlevel.jpeg"  width={250} height={200} ></img> */}
          {/* <img src="images/heatwave.jpg"  width={250} height={200} ></img> */}
          {/* </div> */}
          {/* <p>Check this <a href='https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf' target="_blank">link</a> for IMD report.</p> */}
          {/* </>} */}
          {/* </div> */}
          {/*  */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default PAnnounce;
