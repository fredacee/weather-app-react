import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="sudmit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Porto-Novo</h1>
      <ul>
        <li>Sunday 10:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy-icon"
              className="float-left"
            />
            <span className="temperature">28</span>
            <span className="units">℃ | ℉ </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:41%</li>
            <li>Humidity:73%</li>
            <li>Wind:11 km/h</li>
          </ul>
        </div>
        <div className="row">
          <div className="col">
            Mon
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy-icon"
            />
            <br />
            32°
          </div>
          <div className="col">
            Tue
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy-icon"
            />
            <br />
            30°
          </div>
          <div className="col">
            Wed
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt="cloudy-icon"
            />
            <br />
            30°
          </div>
          <div className="col">
            Thur
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt="cloudy-icon"
            />
            <br />
            30°
          </div>
          <div className="col">
            Fri
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"
              alt="cloudy-icon"
            />
            <br />
            30°
          </div>
        </div>
      </div>
    </div>
  );
}
