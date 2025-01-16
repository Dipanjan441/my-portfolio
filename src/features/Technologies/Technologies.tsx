import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import DisplayHeading from '../../components/Heading';

const Technologies = () => {
  return (
    <div>
        <DisplayHeading label='Technologies' />
        <div className='container'>
        <div className='row'>
            <div className='col d-flex justify-content-center gap-4'>
                <FaReact color='blue' className='fs-1' />
                <FaNodeJs color='green' className='fs-1' />
                <FaWordpress color='blue' className='fs-1' />
                <SiMysql color='cyan' className='fs-1' />
                <RiNextjsFill color='black' className='fs-1' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Technologies
