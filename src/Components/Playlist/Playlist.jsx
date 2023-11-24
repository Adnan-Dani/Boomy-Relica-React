import React from 'react';

const Playlist = () => {
  return (
    <>
      <div className="container-fluid text-start">

        <div className="row">

          <div className="col-md-6 background py-5 px-5">
            <div className='d-flex justify-between gap-5'>
              <h4>Featured Playlists</h4>
              <h5> share</h5>
            </div>

            <h1 className='display-4'>This is Boomy</h1>
            <div className="row">
              <div className="col-6 text-center my-5">
                <p className='bg-white text-dark py-2 rounded-2  f-bold '>Make Your First Song</p>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-2 ">
                <img className='h-25' src="/assets/boomy.jpg" alt="" />
              </div>
              <div className="col-md-2">
                <img className='h-25' src="/assets/boomy.jpg" alt="" />
              </div>
              <div className="col-md-2">
                <img className='h-25' src="/assets/boomy.jpg" alt="" />
              </div>
              <div className="col-md-2">
                <img className='h-25' src="/assets/boomy.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-5">
            {/* Move the .card2sec content here */}
            <div className="card2sec">
              <img src="assets/boomy.jpg" className="card2sec-img" alt="..." />
            </div>
          </div>

          <div className="col-md-4 mt-5 ">
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlist;
