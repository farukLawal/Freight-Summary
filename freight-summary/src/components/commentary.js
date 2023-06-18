import React from "react";
import "./commentary.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DailyCommentary = ({ date, comments }) => {
  return (
    <div>
      <div className="section container-xxl ps-3 pe-3 mt-5 mb-5">
        <div className="section-title" id="commentary">
          <h2 className="mb-3">DAILY COMMENTARY</h2>
        </div>
        <div className="border p-0">
          <hr className="m-0" />
          <h5 className="mb-3 p-3">{date}</h5>
          {comments.map((comment, index) => (
            <p
              key={index}
              className="card-text p-3"
              dangerouslySetInnerHTML={{ __html: comment.comment }}
            ></p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyCommentary;
