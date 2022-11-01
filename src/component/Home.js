import React, { useEffect, useState } from "react";
import bgImage from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user1.png";
import Card from "./Card";
import Loader from "./Loader";
import Video from "./Video";
import ImgSlider from "./ImgSlider";
import Documents from "./Documents";
import { useParams } from "react-router-dom";

export default function Home() {
  const { userId } = useParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/${userId}`
    )
      .then((res) => res)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let modeData;
  if (data === undefined) {
  } else {
    modeData = data.BusinessLinks;
    if (data.Mode === "Personal") {
      modeData = data.PersonalLinks;
    } else if (data.Mode === "Direct") {
      modeData = data.DirectLinks;
    }
  }

  return (
    <>
      {data === undefined ? (
        <Loader />
      ) : (
        <>
          <section className="hero">
            <img className="img-fluid" src={bgImage} alt="" />
            <div className="container">
              <div className="hero-top">
                <div className="logo-banner text-center">
                  <img className="img-fluid" src={user} alt="" />
                </div>
              </div>
              <div className="hero-bottom mt-5">
                <h1>{data.PersonalInfo.Name}</h1>
                <h2>{data.PersonalInfo.Location}</h2>
                <h3>{data.PersonalInfo.Country}</h3>
                <div className="hero-detail banner-shadow">
                  <p>{data.PersonalInfo.Bio}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="card-section">
            <div className="container">
              {modeData.StandardLinks.Links ? (
                <Card data={JSON.parse(modeData.StandardLinks.Links)} />
              ) : (
                ""
              )}
              {modeData.Slider.Links ? (
                <ImgSlider data={JSON.parse(modeData.Slider.Links)} />
              ) : (
                ""
              )}
              {modeData.Document.isActive ? (
                <Documents
                  data={modeData.Document}
                  loader={() => {
                    console.log("lonc");
                    setLoader(true);
                  }}
                />
              ) : (
                ""
              )}
              {modeData.FeaturedVideo.isActive ? (
                <Video data={modeData.FeaturedVideo} />
              ) : (
                ""
              )}
              <footer className="footer text-center">
                <div className="contaier">
                  <img className="img-fluid" src={logo} alt="" />
                  <h4>CREATE YOUR MICROSITE</h4>
                </div>
              </footer>
            </div>
          </section>
        </>
      )}
    </>
  );
}
