import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./VideoPage.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import background from "./../../assets/background.png";
import song from "../../assets/songs/song.mp3"
import ReactPlayer from 'react-player'
import { FaSearch } from "react-icons/fa";
import p1 from "./../../assets/p1.png"
import p2 from "./../../assets/p2.png"
import p3 from "./../../assets/p3.png"
import p4 from "./../../assets/p4.png"
import p5 from "./../../assets/p5.png"
import p6 from "./../../assets/p6.png"
import p7 from "./../../assets/p7.png"
import p8 from "./../../assets/p8.png"
import { IoPlayOutline } from "react-icons/io5";

export default function VideoPage() {
  const videos = [
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p1,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p2,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p3,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p4,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p5,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p6,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p7,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p8,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p7,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p3,
    },
    {
      title:"New Video",
      date: "August 23, 2023",
      img: p4,
    },
    
  ]
  return (
<>
    <div  style={{background:`url(${background})`, backgroundSize:"cover", backgroundRepeat:"no-repeat" , height:`calc(100vh - 70px)`}}>
    <Container >
    <form className='py-4 '>
  <button type="submit"><FaSearch color='white' /></button>
  <input type="text" placeholder="Search..." />
</form>
<Row>
{
  videos?.map(data =>(
    <Col lg={3} md={4} sm={6} xs={12} className='my-4'>
      <div className='ImageOuterDiv'>
        <div className='d-flex justify-content-center imageSection' >
        <img src={data.img} width={"50%"} height={"150px"} />
        <div className='time'>1:20</div>
        <div className='PlayIcon'> <IoPlayOutline color='white' size={"30px"} style={{margin:"2px"}} /></div>
        </div>
        <div className='ImageBottomSection'>
        <div style={{ fontSize: ".875rem",
    lineHeight: "1.25rem", color:'white'}}>{data.title}</div>
        <div style={{color:"rgb(156 163 175)",    fontSize: ".75rem",
    lineHeight: "1rem",}}>{data.date}</div>
        </div>
      </div>
    </Col>
  ))
}
</Row>
    </Container>
</div>
   </> 
   
  )
}
