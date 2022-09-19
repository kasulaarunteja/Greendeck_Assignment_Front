import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg">
        <img src="img/icon.png" alt="" />
        
      </div>
      <div className="center">
        <button type="button" class="btn btn-primary btn-lg">
        dashboard 
        </button>
        <button type="button" class="btn btn-secondary btn-lg">
        subscriptions 
        </button>
      </div>
    </>
  );
};

export default Home;
