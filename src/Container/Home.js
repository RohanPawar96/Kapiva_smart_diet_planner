import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import Choose from "../Components/Choose";
import Verification from "../Components/Verification";
// import IconCalender from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-calender.svg";
// import IconFree from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-free.svg";
// import ImgSceenShot1 from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/screenshort1.png";
// import ImgSceenShot2 from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/screenshort2.png";
// import ImgCard from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/cardimg1.webp";
// import IconRatings from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ratings.svg";
import Reviews from "../Components/Reviews";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  let UtmSorce = "";
  let UtmMedium = "";
  let Campaign = "";
  const [ScreenSize, setScreenSize] = React.useState("");

  let queryString = window.location.search;
  if (queryString !== "") {
    UtmSorce = queryString.split("=")[1].split("&")[0];
    UtmMedium = queryString.split("&")[1].split("&")[0];
    UtmMedium = UtmMedium.split("=")[1];
    Campaign = queryString.split("&")[2];
    Campaign = Campaign.split("=")[1];
  } else {
    UtmSorce = "";
    UtmMedium = "";
    Campaign = "";
  }
  // console.log("Utm:", UtmSorce, UtmMedium, Campaign);

  useEffect(() => {
    setScreenSize(window.screen.width);
  }, [ScreenSize]);

  return (
    <div className="main">
      <Banner handleClickOpen={handleClickOpen} />
      <div className="choose">
        <p className="line-1">
          WHY CHOOSE {ScreenSize <= 800 ? <br /> : ""}
          <span className="bold"> A CUSTOMISED DIET PLAN?</span>
        </p>
        <p className="line-2">
          Kapiva helps you personalise your diet without compromising on your
          taste/food habit.
        </p>
        <Choose />
      </div>
      <button className="diet-plan-button" onClick={() => handleClickOpen()}>
        <img
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-calender.svg"
          alt="calender"
        />
        <p className="button-text">
          ACCESS YOUR DIET PLAN{" "}
          <sup>
            <img
              id="free-img"
              src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-free.png"
              alt="free"
            />
          </sup>
        </p>
      </button>
      <div>
        <p className="headings">
          <span className="bold">SNEAK PEAK</span> FOR YOU
        </p>
        <div className="screenshots">
          <img
            src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/screenshort1.png"
            alt="screenshots"
          />
          <img
            src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/screenshort2.png"
            alt="screenshots"
          />
        </div>
      </div>
      <div className="reviews">
        <p className="headings bold">REAL PEOPLE, REAL STORIES</p>
        <Reviews />
      </div>
      <Verification
        open={open}
        setOpen={setOpen}
        UtmSorce={UtmSorce}
        UtmMedium={UtmMedium}
        Campaign={Campaign}
      />
    </div>
  );
}
