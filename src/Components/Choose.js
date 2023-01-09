import React from "react";
// import IconAI from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ai.svg";
// import IconHealth from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-health.svg";
// import IconTracker from "https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-tracker.svg";

export default function Choose() {
  return (
    <ul className="options">
      <li className="opt-card">
        <div className="opt-card-img">
          <img
            src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ai.svg"
            alt="img"
          />
        </div>
        <p className="opt-card-heading">AI-based Diet Plan</p>
        <p className="opt-card-description">
          Personalised with the help of nutrition experts
        </p>
      </li>
      <li className="opt-card">
        <div className="opt-card-img">
          <img
            src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-health.svg"
            alt="img"
          />
        </div>
        <p className="opt-card-heading">Healthy Recipes</p>
        <p className="opt-card-description">
          Matching your food preferences and health goals
        </p>
      </li>
      <li className="opt-card">
        <div className="opt-card-img">
          <img
            src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-tracker.svg"
            alt="img"
          />
        </div>
        <p className="opt-card-heading bold">Smart Trackers</p>
        <p className="opt-card-description">Track your health goals daily</p>
      </li>
    </ul>
  );
}
