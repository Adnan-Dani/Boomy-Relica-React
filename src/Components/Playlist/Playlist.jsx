import React from 'react'

const Playlist = () => {
  return (
<>

<div className="conatiner-fluid  text-start">

    <div className="row">


        <div className="col-md-6 background py-5 px-5">
<div  className='d-flex justify-between gap-5'>
<h4>Featured Playlists</h4>
<h5> share</h5>
</div>

            <h1 className='display-4'>This is Boomy</h1>
            <div className="row">
                <div className="col-6 text-center my-5">
                <p className='bg-white text-dark py-2 rounded-2  f-bold '>Make Your First Song</p>

                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <img className='h-25' src="/assets/boomy.jpg" alt="" />
                </div>
                <div className="col-md-2">
                    <img className='h-25' src="/assets/boomy.jpg" alt="" />
                </div> <div className="col-md-2">
                    <img className='h-25' src="/assets/boomy.jpg" alt="" />
                </div> <div className="col-md-2">
                    <img className='h-25' src="/assets/boomy.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 mt-5 items-center">

        <div className="card" style={{width: '18rem'}}>
  <img src="assets/boomy.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

        </div>
    </div>
</div>
</>
  )
}

export default Playlist