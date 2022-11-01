import React from "react";
export default function Card({ data }) {
  return (
    <>
      <div className="cardItem">
        {data.map((value, id) => {
          if (!value.isActive) {
          }
          return (
            <a key={id} href="/" className="card">
              <div className="card_icon bg-bannner">
                <img
                  className="img-fluid"
                  src={`/social_icon/${value.Name}.svg`}
                  alt=""
                />
              </div>
              {value.Title ? value.Title : value.Name}
            </a>
          );
        })}
      </div>
    </>
  );
}
