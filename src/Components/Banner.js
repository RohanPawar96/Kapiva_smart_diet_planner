import React from "react";
// import ImgBanner from "../Assets/Images/banner1.jpg";

export default function Banner({ handleClickOpen }) {
  return (
    <div className="banner" onClick={() => handleClickOpen(true)}>
      <img
        className="bannerimg"
        src="https://store-5h8rqg02f8.mybigcommerce.com/content/Kapiva_smart_diet/Images/banner1.jpg"
        alt="banner"
      />
      <div className="bannerContent">
        <h1 className="line-1">
          NEED HELP TO <br />
          <span className="bold">CURATE YOUR LIFESTYLE?</span>
        </h1>
        <p className="line-2">
          Maintaining your health is 70% diet & 30% exercise.
          <br />
          Customise your health journey with Kapiva for free!
        </p>
      </div>
    </div>
  );
}
