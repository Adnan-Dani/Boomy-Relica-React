import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import {Button }from 'react-bootstrap';
import { ReactSVG } from "react-svg";
import { RxCross2 } from "react-icons/rx";
import "./Edit.css"
import { FaChevronLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import background from "../../../assets/background.png"
import { useNavigate, Link } from "react-router-dom";

export default function Edit() {
    const [selected, useSelected] = useState(null)
    const location = useLocation();
    const data = location.state?.data;
    console.log("edit",data)
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


    
  return (
   <>
   <div style={{background:`url(${background})`, backgroundSize:"cover"}}>
     <Container className="d-flex justify-content-center" >
        <div className="box">
          <div className="d-flex justify-content-between align-items-center ">
            <div className='d-flex align-items-center'>
                <button  className="CrossButton">
                    <Link to="/filter">
            <FaChevronLeft color='white' />
            </Link>
            </button>
            <div className="Title ml-5" style={{marginLeft:"10px"}}>{data.title}</div>
            </div>
            <button className="CrossButton">
              <RxCross2 />
            </button>
          </div>
        </div>
      </Container>
      </div>
   </>
  )
}
