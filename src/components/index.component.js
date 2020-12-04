import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TodosList extends Component {
  render() {
    return (
      <div id="index">
        <div className="row header">
          <div className="header-img">
            <div className="row nav">
              <div className="nav2-logo">
                <Link to="/" ></Link>
              </div>
              <div class="centre">
                <a href="/about">About Us</a>
                <Link to="/users" className="nav-link">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer pb-5 justify-content-around pt-5">
          <div className="col-md-2 d-flex flex-column">
            <a href="/about">About Us</a>
          </div>
          <div className="col-md-3">
            <div></div>
          </div>
          <div className="col-md-3">
            <div className="row mb-3">
              <h4>Subscribe for Updates</h4>
            </div>
            <div className="row justify-content-between">
              <input
                type="text"
                placeholder="Email ID"
                className="contact-input-3"
              ></input>
              <div className="footer-button">Submit</div>
            </div>
          </div>
        </div>
        <div class="row footer pb-3 justify-content-around">
          <p>
          Web Technology - I Project 2020. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    );
  }
}
