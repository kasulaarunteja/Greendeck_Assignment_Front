import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div classNameName="bg">
        <img src="img/icon.png" height='50%' width='100%' alt="" />
      </div>
      <div className="center">
        <button type="button" className="btn btn-primary btn-lg"
        onClick={(e) => {
            e.preventDefault();
            window.location.href='https://docs.google.com/spreadsheets/d/19nvqIg8H74pkJ7Mu8Crk-yEjd-cx377vfBjBXWOUQ5s/edit#gid=0';
            }}
        >
        dashboard 
        </button>
        <Link to='/subscription'>
        <button type="button" className="btn btn-secondary btn-lg">
        subscriptions 
        </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
