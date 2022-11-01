import React from "react";

export default function Video({ data }) {
  return (
    <>
      <div className="youtube mt-4">
        <div className="card mt-0 round-bottom-0">
          <div className="card_icon bg-bannner">
            <img className="img-fluid" src="/social_icon/youtube.svg" alt="" />
          </div>
          <p>{data.Title}</p>
        </div>
        <iframe
          className="youtube_video"
          src={data.URL}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
