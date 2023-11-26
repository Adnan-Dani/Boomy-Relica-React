import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { Row } from "react-bootstrap";
import "../../pages/Home/Home.css";

const Playlist = () => {
  return (
    <>
      <div className="container-fluid PlayList text-start " >
        <div className="row">
          <div className="col-lg-6 background py-4 px-5">
            <div className=" AudioFeaturePlaylist   gap-md-5 gap-0">
              <h4 >Featured Playlists</h4>
              <h5>
                {" "}
                share <FaShareAlt />
              </h5>
            </div>

            <p className="display-3 fw-bold d-md-block d-none" style={{color:"#cec3fb"}}>RFM-core</p>
           
            <div className="d-flex flex-column mb-3">
            <div className="row likedHeading order-lg-3 order-4"  >
              <div className="col-xl-6 col-12 text-center my-md-5 my-3 mt-4">
              <h3 className="LikedForMd">Like what you've heard</h3>
                <p className="bg-white text-dark py-2 rounded-2  fw-bold d-md-block  ">
                  Make Your First Song
                </p>
              </div>
            </div>

            <div className="FeaturedPlaylist order-lg-3 order-4 "  >
              <div className=" ">
                <img className=" imagesss" src="/assets/boomy.jpg" alt="" />
                <div>RFM Moody</div>
              </div>
              <div className="">
                <img
                  className=" imagesss"
                  src="https://i.scdn.co/image/ab67706c0000bebbc99bee05e160e90d4b3527df"
                  alt=""
                />
                <div>RFM Moody</div>
              </div>
              <div className="">
                <img
                  className=" imagesss"
                  src="https://i.scdn.co/image/ab67706c0000bebb3ec676eafb4041797287212c"
                  alt=""
                />
                <div>RFM Moody</div>
              </div>
              <div className="">
                <img
                  className=" imagesss"
                  src="https://i.scdn.co/image/ab67706c0000bebbda1e7f7c6a644fce01784ce3"
                  alt=""
                />
                <div>RFM Moody</div>
              </div>
            </div>
            </div>
          </div>

          <div className="col-lg-2 ">
            {/* Move the .card2sec content here */}
            <div className="card2sec">
              <img src="assets/boomy.jpg" className="card2sec-img " alt="..." />
            </div>
            <div className="card3sec">
              <img
                className="card3sec-img"
                src="https://i.scdn.co/image/ab67706c0000bebb6e47739f3f3ce2b7dd00ad52"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4 mt-5 "></div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
