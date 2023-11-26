import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./VideoPage.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import background from "./../../assets/background.png";
import song from "../../assets/songs/song.mp3"
import ReactPlayer from 'react-player'

export default function VideoPage() {
  return (
<div  style={{background:`url(${background})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" , height:`calc(100vh - 70px)`}}>
   <Container className='d-flex justify-content-center align-items-center  h-100'>
   
    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
 
    </Container>
   </div>
  )
}
