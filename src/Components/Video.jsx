import React from 'react'

const Video = () => {
  return (
    <>
    
    <div className="full-screen-video-container">
      <video
        className="full-screen-video"
        controls
        autoPlay
        loop
        muted
      >
        <source src="https://fast.wistia.net/embed/iframe/ye0bxpktlb?seo=false&videoFoam=true"type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    
    </>
  )
}

export default Video