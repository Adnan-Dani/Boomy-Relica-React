import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import {Button }from 'react-bootstrap';
import { ReactSVG } from "react-svg";
import { RxCross2 } from "react-icons/rx";
import "./Filter.css"
import { FaChevronLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import background from "../../../assets/background.png"
import { useNavigate, Link } from "react-router-dom";

export default function Filter() {
    const [selected, useSelected] = useState(null)
    const location = useLocation();
    const data = location.state?.data;
    console.log(data)
    const musicType = [
        {
            title:"Warehouse Groove",
            content: [
                {
                    type: "House"
                },
                {
                    type: "Edm"
                },
            ]
        },
        {
            title:"Warehouse Groove",
            content: [
                {
                    type: "House"
                },
                {
                    type: "Edm"
                },
            ]
        },
        {
            title:"Warehouse Groove",
            content: [
                {
                    type: "House"
                },
                {
                    type: "Edm"
                },
            ]
        },
    ]
    const navigate = useNavigate();
    const handleCardClick = () => {
        if(selected === null){
            alert("kindly select the first")
        }
        else{
        navigate('/edit', { state: { data: musicType[selected] } });
    }
      };
    
  return (
   <>
   <div style={{background:`url(${background})`, backgroundSize:"cover",  height:"100vh"}}>
     <Container className="d-flex justify-content-center" >
        <div className="box">
          <div className="d-flex justify-content-between align-items-center ">
            <div className='d-flex align-items-center'>
                <button  className="CrossButton">
                    <Link to="/song">
            <FaChevronLeft color='white'  />
            </Link>
            </button>
            <div className="Title ml-5" style={{marginLeft:"10px"}}>Create a song</div>
            </div>
            <button className="CrossButton">
              <RxCross2 />
            </button>
          </div>
          <div className="SubTitile">{data.title}</div>
          <div className="titleDescription">
            {data.desciption}
          </div>
          <ul style={{margin:"0px ", padding:'0px' }}>
            {musicType?.map((data, index )=> (
            <li key={index} className='d-flex align-items-center justify-content-between w-100 my-4 list'>
                <div className='d-flex '>
                <input type='radio' name="options" value={index} id="radio4" onChange={() =>useSelected(index)}  />
                <div className='selectedTitles mx-3'>{data.title}</div>
                {data?.content?.map(ContentTitle =>(
                    <div className='mx-2 contentTitle'>{ContentTitle.type}</div>
                ))}
                </div>
                <div>
                <FaPlay />
                </div>
            </li>
            ))}
            </ul>
            <div className='d-flex justify-content-end'>
            <button className='createSong'  >
                Create Song
            </button>
            </div>
        </div>
      </Container>
      </div>
   </>
  )
}
