import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Lyrics.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import background from "./../../assets/background.png";
import song from "../../assets/songs/song.mp3"

export default function Lyrics() {
  return (
<div  style={{background:`url(${background})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" , height:`calc(100vh - 70px)`}}>
   <Container>
    <div className='d-flex align-items-center gap-5'>
        <Link to="/">
        <button className="leftButton"  >
    <FaArrowLeft  color='white' />
    </button>
    </Link>
    <div className='d-flex flex-column' >
        <h3>Song</h3>
        <h6>Tittle</h6>
    </div>
    </div>
    </Container>
    <div>
    <div className='h-100 d-flex justify-content-center ' style={{ overflowY: "auto" }}>
        <div className='lyricsSection' >
            <div className='lyricsText'>
            <div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br/> <br/><br/>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>

<div>
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.<br /><br/> <br/><br/>
  Deserunt mollit anim id est laborum.
</div>

<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
            <div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br/> <br/><br/>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>

<div>
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.<br /><br/> <br/><br/>
  Deserunt mollit anim id est laborum.
</div>

<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
            <div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br/> <br/><br/>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>

<div>
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.<br /><br/> <br/><br/>
  Deserunt mollit anim id est laborum.
</div>

<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
            <div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br/> <br/><br/>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>

<div>
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.<br /><br/> <br/><br/>
  Deserunt mollit anim id est laborum.
</div>

<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
            <div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br/> <br/><br/>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>

<div>
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.<br /><br/> <br/><br/>
  Deserunt mollit anim id est laborum.
</div>

<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <br/> <br/><br/>
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

            </div>
        </div>
    </div>
    
    <div className='audioPlayer'>
    <AudioPlayer
    
    src="http://example.com/audio.mp3"
    style={{background: `url(${background})`}}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    </div>
 
    </div>
   </div>
  )
}
