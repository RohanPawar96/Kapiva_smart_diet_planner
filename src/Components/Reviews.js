import React from "react";
import ReadMoreReact from "read-more-react";

export default function Reviews() {
  return (
    <ul>
      <li className="story-card">
        <div className="story-image">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jCzRXjZgtCY"
            title="Get Slim Juice Testimonial"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <img
            src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/cardimg1.webp"
            alt="review-1"
          />
        </div>
        <p className="story-name bold">Akanksha Singh</p>
        <img
          className="stars"
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ratings.svg"
          alt="ratings"
        />
        <hr className="story-seperator" />
        <p className="story-desc">
          <ReadMoreReact
            text="Kapiva has been working miracles for me. In just a few months, there was a drop in my weight by 13kgs. I wish that more and more people try this product."
            min={100}
            ideal={100}
            max={1000}
            readMoreText="Read more"
            style={{ width: "100%" }}
          />
        </p>
      </li>
      <li className="story-card">
        <div className="story-image">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_JzRshFGem0"
            title="Aloe Garcinia Testimonial"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            placeholder="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/cardimg1.webp"
          ></iframe> */}
          <img
            src="https://4wdpmdxj.cdn.imgeng.in/https://dashboard.kapiva.in/kapiva/static/24535weight___nandini_satish___2_jpg.jpg"
            alt="review-1"
          />
        </div>
        <p className="story-name bold">Nandini Satish</p>
        <img
          className="stars"
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ratings.svg"
          alt="ratings"
        />
        <hr className="story-seperator" />
        <p className="story-desc">
          <ReadMoreReact
            text="I moved from a XXXL to XXL after using the juice. the best part was that after a long holiday & not consuming the juice, I didn't gain back any weight during this time!"
            min={100}
            ideal={100}
            max={1000}
            readMoreText="Read more"
          />
        </p>
      </li>
      <li className="story-card">
        <div className="story-image">
          <img
            src="https://4wdpmdxj.cdn.imgeng.in/https://dashboard.kapiva.in/kapiva/static/62477lifestyle___karan_agarwal___4_jpg.jpg"
            alt="review-1"
          />
        </div>
        <p className="story-name bold">Karan Agarwal</p>
        <img
          className="stars"
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ratings.svg"
          alt="ratings"
        />
        <hr className="story-seperator" />
        <p className="story-desc">
          <ReadMoreReact
            text="Loved the product...told my doctors that I have tried this product. They were not aware of Kapiva, but now they know. This product has helped me more than allopathic doctors could. Thank You Kapiva!"
            min={100}
            ideal={100}
            max={1000}
            readMoreText="Read more"
          />
        </p>
      </li>
      <li className="story-card">
        <div className="story-image">
          <img
            src="https://4wdpmdxj.cdn.imgeng.in/https://dashboard.kapiva.in/kapiva/static/74248lifestyle___tanisha_dayal___3_jpg.jpg"
            alt="review-1"
          />
        </div>
        <p className="story-name bold">Tanisha Dayal</p>
        <img
          className="stars"
          src="https://cdn11.bigcommerce.com/s-5h8rqg02f8/content/Kapiva_smart_diet/Images/icon-ratings.svg"
          alt="ratings"
        />
        <hr className="story-seperator" />
        <p className="story-desc">
          <ReadMoreReact
            text="It helps a lot in controlling sugar...I was having sugar 250-400. I was taking 3 insulin per day.but now sugar is controlled to 250-300 with 1 insulin per day...its a very good juice...just have once a day on empty stomach.thats it.."
            min={100}
            ideal={100}
            max={1000}
            readMoreText="Read more"
            // style={{ color: "pink" }}
          />
        </p>
      </li>
    </ul>
  );
}
